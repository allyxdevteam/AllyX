const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.put('/', rejectUnauthenticated, (req, res) => {

    const callId = req.body.callId;
    const dateTime = req.body.dateTime;
    console.log('this is req dot boooooooody in call in progress router:', dateTime, callId);


    const sqlText = `
    UPDATE "call"
    SET "date_time_started" = $1
    WHERE "id" = $2;
  `;
  const sqlValues = [
    dateTime, callId
  ];
  
  pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((dbErr) => {
      console.log('put cal start time error', dbErr);
      res.sendStatus(500);
    });
  });

  router.put('/:end', rejectUnauthenticated, (req, res) => {

    const callId = req.body.callId;
    const dateTime = req.body.dateTime;
    console.log('this is req dot boooooooody in call in progress router:', dateTime, callId);


    const sqlText = `
    UPDATE "call"
    SET "date_time_ended" = $1, "is_done_ally" = true
    WHERE "id" = $2;
  `;
  const sqlValues = [
    dateTime, callId
  ];
  
  pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((dbErr) => {
      console.log('put cal start time error', dbErr);
      res.sendStatus(500);
    });
  });

  router.get('/:callId', rejectUnauthenticated, (req, res) => {
    const user = [req.body.user];
    const sqlQuery = [req.params.callId];
  
    if (user.is_ally === true) {
      const sqlText = `
        SELECT ("call".id, "member_id", "ally_id", "first_name")
          FROM "call"
            JOIN "user" on "user".id = "ally_id"
          WHERE "call".id = $1;
      `;
      pool.query(sqlText, sqlQuery)
        .then((dbRes) => {
          res.send(dbRes.rows);
        })
    } else if (user.is_ally === false) {
      const sqlText = `
        SELECT ("call".id, "member_id", "ally_id", "first_name")
          FROM "call"
            JOIN "user" on "user".id = "member_id"
          WHERE "call".id = $1;
      `;
      pool.query(sqlText, sqlQuery)
        .then((dbRes) => {
          res.send(dbRes.rows);
        })
    }
  })






module.exports = router;
