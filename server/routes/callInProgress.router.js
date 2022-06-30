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
  if (req.body.callId !== undefined) {
    const callId = req.body.callId;
    //send datetime ended and make conditional here
    const dateTime = req.body.dateTime;
    console.log('this is req dot boooooooody in call in progress router:', dateTime, callId);


    const sqlText = `
    IF "date_time_ended" = NULL
    THEN
    UPDATE "call"
    SET "date_time_ended" = $1, "is_done_ally" = true
    WHERE "id" = $2
    ELSE
    UPDATE "call"
    SET "is_done_ally" = true;
  `;
    const sqlValues = [
      dateTime, callId
    ];

    pool.query(sqlText, sqlValues)
      .then((dbRes) => {
        res.sendStatus(201);
      })
      .catch((dbErr) => {
        console.log('put call end time ally error', dbErr);
        res.sendStatus(500);
      })
  }

  else if (req.body.userId !== undefined) {
    const userId = req.body.userId;
    const dateTime = req.body.dateTime;
    console.log('this is req dot boooooooody in call in progress router:', dateTime, userId);

    const sqlText = `
      IF "date_time_ended" = NULL
    THEN
    UPDATE "call"
    SET "date_time_ended" = $1, "is_done_member" = true
    WHERE "member_id" = $2
    ELSE
    UPDATE "call"
    SET "is_done_member" = true;
    `;
    const sqlValues = [
      dateTime, userId
    ];

    pool.query(sqlText, sqlValues)
      .then((dbRes) => {
        res.sendStatus(201);
      })
      .catch((dbErr) => {
        console.log('put call end time member error', dbErr);
        res.sendStatus(500);
      })
  };
});






module.exports = router;
