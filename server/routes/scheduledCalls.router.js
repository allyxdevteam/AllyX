const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');



router.post('/', rejectUnauthenticated, (req, res) => {
    const callTime = req.body.callTime;
    const memberId = req.body.user.id;
    const time = new Date(callTime);
    
    const sqlQuery = `INSERT INTO "requested-call" ("member_id", "time") VALUES ($1, $2);`;
    const sqlValues = [memberId, time];
    pool.query (sqlQuery, sqlValues)
    .then((result) => { console.log(result); res.sendStatus(200) })
    .catch((err) => {
      console.log('Error in POST scheduled call', err);
      res.sendStatus(500);})
})

module.exports = router;
