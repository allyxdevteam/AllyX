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
        req.body.claimedCallMember.id,
        req.body.claimedCallId,
        req.body.problemComments
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

router.put('/ally', rejectUnauthenticated, (req, res) => {
  const sqlText = `
  UPDATE "user"
	SET
		is_reported = TRUE
	WHERE id = $1;
  `;
  sqlValue = [req.body.claimedCallMember.id];
  pool.query(sqlText, sqlValue)
    .then((dbRes) => {
    res.sendStatus(201);
  })
  .catch((dbErr) => {
    console.log('INSERT database error', dbErr);
    res.sendStatus(500);
  });
})

router.post('/member', rejectUnauthenticated, (req, res) => {
  console.log('this is req in member reportProblem', req.body);
  const sqlText = `
  INSERT INTO "report" (reviewer_id, recipient_id, call_id, comment)
    VALUES ($1, $2, $3, $4);
  `;
  const sqlValues = [
      req.user.id,
      req.body.allyId,
      req.body.requestedCallId,
      req.body.problemComments
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

router.put('/member', rejectUnauthenticated, (req, res) => {
const sqlText = `
UPDATE "user"
SET
  is_reported=TRUE
WHERE id = $1;
`;
sqlValues = [req.body.allyId];
pool.query(sqlText, sqlValues)
  .then((dbRes) => {
  res.sendStatus(201);
})
.catch((dbErr) => {
  console.log('INSERT database error', dbErr);
  res.sendStatus(500);
});
})

module.exports = router;