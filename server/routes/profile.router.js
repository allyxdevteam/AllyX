const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/:id', (req, res) => {
  if (req.isAuthenticated()) {
  const sqlText = `
    SELECT * FROM "user"
      WHERE id=$1
  `;
  const sqlValues = [req.params.id];
  pool.query(sqlText, sqlValues)
    .then((dbRes) => {
      const theProfile = dbRes.rows[0];
      res.send(theProfile);
    })
    .catch((dbErr) => {
      console.log('error in GET /user/:id', dbErr);
      res.sendStatus(500);
    })
  }
})

router.put('/:id', (req, res) => {
  if (req.isAuthenticated()) {
    console.log('*********************************************', req.body);
    const sqlText = `
    UPDATE "user"
        SET
            first_name = $1,
            last_name = $2,
            phone_number = $3,
            email = $4,
            city = $5,
            facebook_link = $6,
            twitter_link = $7,
            instagram_link = $8
        WHERE id = $9;
    `;
    const sqlValues = [
        req.body.first_name,
        req.body.last_name,
        req.body.phone_number,
        req.body.email,
        req.body.city,
        req.body.facebook_link,
        req.body.twitter_link,
        req.body.instagram_link,
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
  }
});

module.exports = router;