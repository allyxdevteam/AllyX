const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.put('/', rejectUnauthenticated, (req, res) => {

  const callId = req.body.callId;
  const dateTime = req.body.dateTime;

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

router.put('/end/ally/:callId', rejectUnauthenticated, async (req, res) => {

  const client = await pool.connect();
  const callId = req.body.callId;
  const dateTime = req.body.dateTime;

  try {

    await client.query('BEGIN')

    const sqlQueryDateTimeEnded = `SELECT "date_time_ended" FROM "call" WHERE "id" = $1;`;
    const sqlValuesDateTimeEnded = [callId];
    const dateTimeEndedResults = await client.query(sqlQueryDateTimeEnded, sqlValuesDateTimeEnded);

    const dateTimeEnded = dateTimeEndedResults.rows[0].id;

    const sqlQueryPutDateEnded = `
    UPDATE "call"
    SET "date_time_ended" = $1, "is_done_ally" = true
    WHERE "id" = $2;
  `;
    const sqlValuesPutDateEnded = [
      dateTime, callId
    ];

    const sqlQueryDontPutDateEnded = `
    UPDATE "call"
    SET "is_done_ally" = true
    WHERE "id" = $1;
  `;
    const sqlValuesDontPutDateEnded = [
      callId
    ];

    if (dateTimeEnded === undefined) {
      await client.query(sqlQueryPutDateEnded, sqlValuesPutDateEnded)
    }

    else {
      await client.query(sqlQueryDontPutDateEnded, sqlValuesDontPutDateEnded)
    }

    await client.query('COMMIT')

    res.sendStatus(201);

  } catch (error) {
    await client.query('ROLLBACK')
    console.log('Error POST end call ally', error);
    res.sendStatus(500);
  } finally {
    client.release()
  }
});

router.put('/end/member/:requestedCallId', rejectUnauthenticated, async (req, res) => {

  const client = await pool.connect();
  const requestedCallId = req.body.requestedCallId;
  const dateTime = req.body.dateTime;

  try {

    await client.query('BEGIN')

    const sqlQueryDateTimeEnded = `SELECT "date_time_ended" FROM "call" WHERE "requested_call_id" = $1;`;
    const sqlValuesDateTimeEnded = [requestedCallId];
    const dateTimeEndedResults = await client.query(sqlQueryDateTimeEnded, sqlValuesDateTimeEnded);

    const dateTimeEnded = dateTimeEndedResults.rows[0].id;


    const sqlQueryPutDateEnded = `
    UPDATE "call"
    SET "date_time_ended" = $1, "is_done_member" = true 
    FROM "requested-call"
    WHERE "call".requested_call_id = "requested-call".id AND "requested-call".id = $2;
  `;
    const sqlValuesPutDateEnded = [
      dateTime, requestedCallId
    ];

    const sqlQueryDontPutDateEnded = `
    UPDATE "call"
    SET "is_done_member" = true 
    FROM "requested-call"
    WHERE "call".requested_call_id = "requested-call".id AND "requested-call".id = $1;
  `;
    const sqlValuesDontPutDateEnded = [
      requestedCallId
    ];

    if (dateTimeEnded === undefined) {
      await client.query(sqlQueryPutDateEnded, sqlValuesPutDateEnded)
    }

    else {
      await client.query(sqlQueryDontPutDateEnded, sqlValuesDontPutDateEnded)
    }

    await client.query('COMMIT')

    res.sendStatus(201);

  } catch (error) {
    await client.query('ROLLBACK')
    console.log('Error POST end call member', error);
    res.sendStatus(500);
  } finally {
    client.release()
  }
});

//added user to the variables here
router.get('/:callId', rejectUnauthenticated, (req, res) => {
  const user = req.user;
  const callId = req.params.callId;


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
})

router.get('/member/:requestedCallId', rejectUnauthenticated, (req, res) => {

  const requestedCallId = req.params.requestedCallId;


  const sqlQuery = `
  SELECT call.id AS call_id, call.member_id, call.ally_id, "user".first_name
  FROM "call"
  JOIN "user" on "user".id = call.ally_id
  WHERE call.requested_call_id = $1;
      `;
  const sqlValues = [requestedCallId]
  pool.query(sqlQuery, sqlValues)
    .then((dbRes) => {
      res.send(dbRes.rows[0]);
    })

})






module.exports = router;
