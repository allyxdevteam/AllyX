const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.put('/:id', rejectUnauthenticated, (req, res) => {
    const sqlText = `
        UPDATE "user"
            SET is_active = NOT is_active
            WHERE id = $1;
    `;
    const sqlValues =[
        req.params.id
    ];
    pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      res.sendStatus(200);
    })
    .catch((dbErr) => {
      console.log('UPDATE database error', dbErr);
      res.sendStatus(500);
    });
})

module.exports = router;