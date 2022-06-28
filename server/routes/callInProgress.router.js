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





module.exports = router;
