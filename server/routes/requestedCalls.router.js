const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


/**
 * GET route template
 */
router.get('/', (req, res) => {
  const sqlQuery = `SELECT "requested-call".id, "requested-call".member_id, "requested-call".open, "requested-call".time, "requested-call".inserted_at, "user".first_name, "user".profile_pic FROM "requested-call"
  JOIN "user" on "user".id = "requested-call".member_id
WHERE "open" = true ORDER BY "time" ASC;`;
  pool.query(sqlQuery)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all requested calls', err);
      res.sendStatus(500)
    })
});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, async (req, res) => {

  const client = await pool.connect();
  const dateTime = req.body.dateTime;
  const memberId = req.body.user.id;

  try{
  await client.query('BEGIN')
  const sqlQuery = `INSERT INTO "requested-call" ("member_id", "time") VALUES ($1, current_timestamp) RETURNING id;`;
  const sqlValues = [memberId];
  const insertRequestedCallResuts = await client.query(sqlQuery, sqlValues);
  const requestedCallId = insertRequestedCallResuts.rows[0].id

  await client.query('COMMIT')

    
      console.log('this is the requested call id:',requestedCallId);
     res.status(201).send({ requestedCallId });
    
  }catch (error) {
    await client.query('ROLLBACK')
    console.log('Error POST /api/requestedCalls', error);
    res.sendStatus(500);
} finally {
    client.release()
}
})

module.exports = router;
