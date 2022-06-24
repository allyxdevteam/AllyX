const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');


/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
 router.post('/', rejectUnauthenticated, (req, res) => {
    const dateTime = req.body.dateTime;
    const memberId = req.body.user.id;

    
    const sqlQuery = `INSERT INTO "requested-call" ("member_id", "time") VALUES ($1, $2);`;
    const sqlValues = [memberId, dateTime];
    pool.query (sqlQuery, sqlValues)
    .then((result) => { console.log(result); res.sendStatus(200) })
    .catch((err) => {
      console.log('Error in POST requested call', err);
      res.sendStatus(500);})
})

module.exports = router;
