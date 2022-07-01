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

  //added user to the variables here
  router.get('/:callId', rejectUnauthenticated, (req, res) => {
    const user = req.user;
    const callId = req.params.callId;

    console.log('this is req.body in get router for fetch one call:', req.user);
    console.log('this is params in get router for fetch one call:', req.params);

  
    if (user.is_ally === true) {
      const sqlQuery = `
      SELECT call.id AS call_id, call.member_id, call.ally_id, "user".first_name
      FROM "call"
        JOIN "user" on "user".id = call.member_id
      WHERE call.id = $1;
      `;
      const sqlValues = [callId]
      pool.query(sqlQuery, sqlValues)
        .then((dbRes) => {
          res.send(dbRes.rows[0]);
        })
    } else if (user.is_ally === false) {
      const sqlQuery = `
      SELECT call.id AS call_id, call.member_id, call.ally_id, "user".first_name
      FROM "call"
        JOIN "user" on "user".id = call.ally_id
      WHERE call.id = $1;
      `;
      const sqlValues = [callId]
      pool.query(sqlQuery, sqlValues)
        .then((dbRes) => {
          res.send(dbRes.rows[0]);
        })
    }
  })






module.exports = router;
