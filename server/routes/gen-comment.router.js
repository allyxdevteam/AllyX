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
  const sqlText = `
  INSERT INTO "general-comment" 
    (user_id, num_stars, comment)
    VALUES 
    ($1, $2, $3);
`;
const sqlValues = [
  req.user.id,
  req.body.rating,
  req.body.comment
];

pool.query(sqlText, sqlValues)
  .then((dbRes) => {
    res.sendStatus(201);
  })
  .catch((dbErr) => {
    console.log('add general comment error', dbErr);
    res.sendStatus(500);
  });
});

module.exports = router;
