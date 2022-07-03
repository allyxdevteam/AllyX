const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


router.get('/', rejectUnauthenticated, (req, res) => {
  if (req.user.is_admin) {
    const sqlText = `
      SELECT * FROM "call-rating"
    `;
    pool.query(sqlText)
      .then((dbRes) => {
        res.send(dbRes.rows);
      })
      .catch((dbErr) => {
        console.log('error getting reports', dbErr);
        res.sendStatus(500);
      })
  }
  else console.warn('403, admins only :)')
}
)

router.post('/ally', rejectUnauthenticated, (req, res) => {

  console.log('req dot booooooooody in call ratings router:', req.body);
  const sqlText = `
    INSERT INTO "call-rating"
      (reviewer_id, recipient_id, call_id, num_stars, comment)
      VALUES ($1, $2, $3, $4, $5);
    `;
  const sqlValues = [
    req.body.user.id,
    req.body.memberId,
    req.body.callId,
    req.body.rating,
    req.body.comment
  ];
  pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(201);
    })
});

router.post('/member', rejectUnauthenticated, async (req, res) => {
  
  const client = await pool.connect();
  
  const  memberId = req.body.user.id;
  const allyId = req.body.allyId;
  const requestedCallId = req.body.requestedCallId;
  const rating = req.body.rating;
  const comment = req.body.comment;

try{
  await client.query('BEGIN')
  const sqlQueryCallId = `SELECT "id" FROM "call" WHERE "requested_call_id" = $1;`;
  const sqlValuesCallId = [requestedCallId];
  const callIdResults = await client.query(sqlQueryCallId, sqlValuesCallId);

  const callId = callIdResults.rows[0].id

  const sqlText = `
  INSERT INTO "call-rating"
    (reviewer_id, recipient_id, call_id, num_stars, comment)
    VALUES ($1, $2, $3, $4, $5);
  `;
  const sqlValues = [
    memberId,
    allyId,
    callId,
    rating,
    comment
  ];

  await client.query(sqlText, sqlValues);

  await client.query('COMMIT');

  res.sendStatus(201);

} catch (error) {
  await client.query('ROLLBACK')
  console.log('Error POST member call rating', error);
  res.sendStatus(500);
} finally {
  client.release()
}
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  if (req.user.is_admin) {
    const sqlText = `
    DELETE FROM "call-rating"
      WHERE id=$1
  `;
    const sqlValues = [req.params.id];
    pool.query(sqlText, sqlValues)
      .then(
        res.sendStatus(204)
      )
      .catch((dbErr) => {
        console.log('error in DELETE /call-rating/:id', dbErr);
        res.sendStatus(500);
      })
  } else {
    console.warn('only admins can delete call ratings, sorry!')
  }
})

module.exports = router;
