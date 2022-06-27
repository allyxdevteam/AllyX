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
    let user = req.user.id;
    let answer_1 = req.body.answer1;
    let answer_2 = req.body.answer2;
    let answer_3 = req.body.answer3;
    let answer_4 = req.body.answer1;


    
    const sqlQuery = `INSERT INTO "ally-application" ("user_id", "answer_1", "answer_2", "answer_3", "answer_4") 
                        VALUES ($1, $2, $3, $4, $5);`;
    const sqlValues = [user, answer_1, answer_2 , answer_3, answer_4,];
    pool.query (sqlQuery, sqlValues)
    .then((result) => { console.log(result); res.sendStatus(200) })
    .catch((err) => {
      console.log('Error in POST Ally app', err);
      res.sendStatus(500);})
})

module.exports = router;
