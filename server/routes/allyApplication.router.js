const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/:id', rejectUnauthenticated, (req, res) => {
    const sqlText = `
        SELECT * FROM "ally-application"
            WHERE user_id=$1;
        `;
    const sqlValues = [req.user.id];
    pool.query(sqlText, sqlValues)
      .then((dbRes) => {
        res.send(dbRes.rows[0]);
      })
      .catch((dbErr) => {
        console.log('error in GET /allyApplication/:id', dbErr);
        res.sendStatus(500);
      })
})

module.exports = router;