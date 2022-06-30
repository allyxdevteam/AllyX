const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


router.get('/', rejectUnauthenticated, (req, res) => {
  if(req.user.is_admin){
    const sqlText = `
      SELECT * FROM "general-comment"
    `;
    pool.query(sqlText)
      .then((dbRes) => {
        res.send(dbRes.rows);
      })
      .catch((dbErr) => {
        console.log('error getting comments', dbErr);
        res.sendStatus(500);
      })}
      else console.warn('403, admins only :)')
    }
);

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated, (req, res) => {
  const sqlText = `
  INSERT INTO "general-comment" 
    (user_id, num_stars, comment)
    VALUES 
    ($1, $2, $3);
`;
const sqlValues = [
  req.user.id,
  req.body.rating,
  req.body.comment
];

pool.query(sqlText, sqlValues)
  .then((dbRes) => {
    res.sendStatus(201);
  })
  .catch((dbErr) => {
    console.log('add general comment error', dbErr);
    res.sendStatus(500);
  });
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  if (req.user.is_admin) {
  const sqlText = `
    DELETE FROM "general-comment"
      WHERE id=$1
  `;
  const sqlValues = [req.params.id];
  pool.query(sqlText, sqlValues)
    .then(
      res.sendStatus(204)
    )
    .catch((dbErr) => {
      console.log('error in DELETE /general-comment/:id', dbErr);
      res.sendStatus(500);
    })
  } else {
    console.warn('only admins can delete comments, sorry!')
  }
})

module.exports = router;
