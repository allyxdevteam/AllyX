const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.post('/ally', rejectUnauthenticated, (req, res) => {
    const sqlText = `
    INSERT INTO "report" (reviewer_id, recipient_id, call_id, comment)
	    VALUES ($1, $2, $3, $4);
    `;
    const sqlValues = [
        req.user.id,
        req.body.claimedCallMember,
        req.body.claimedCallId,
        req.body.abuseComments
    ];
    pool.query(sqlText, sqlValues)
    .then((dbRes) => {
    res.sendStatus(201);
  })
  .catch((dbErr) => {
    console.log('INSERT database error', dbErr);
    res.sendStatus(500);
  });
})