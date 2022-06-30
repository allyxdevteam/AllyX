const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');


 router.get('/', rejectUnauthenticated, (req, res) => {
    if(req.user.is_admin){
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
      })}
      else console.warn('403, admins only :)')
    }
  )

router.post('/', rejectUnauthenticated, (req, res) => {
  if (req.user.is_ally === true) {
    const sqlText = `
    INSERT INTO "call-rating"
      ("reviewer_id", "recipient_id", "call_id", "num_stars", "comment")
      VALUES (1, 2, 2, 4, 'Yo!');
    `;
    const sqlValues = [
      req.user.id,
      req.body.memberId,
      req.body.callId,
      req.body.rating,
      req.body.comment
    ];
    pool.query(sqlText, sqlValues)
      .then((dbRes) => {
      res.sendStatus(201);
    })
  } else if (req.user.is_ally === false) {
    if (req.user.is_ally === true) {
      const sqlText = `
      INSERT INTO "call-rating"
        ("reviewer_id", "recipient_id", "call_id", "num_stars", "comment")
        VALUES (1, 2, 2, 4, 'Yo!');
      `;
      const sqlValues = [
        req.user.id,
        req.body.allyId,
        req.body.callId,
        req.body.rating,
        req.body.comment
      ];
      pool.query(sqlText, sqlValues)
        .then((dbRes) => {
        res.sendStatus(201);
      })
    }
  }
});

module.exports = router;
