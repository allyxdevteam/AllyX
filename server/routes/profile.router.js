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
            instagram_link = $8,
            average_stars = $9,
            is_ally = $10,
            is_admin = $11,
            is_reported = $12,
            is_active = $13,
            is_blocked = $14,
            delete_requested = $15
        WHERE id = $16;
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
        req.body.average_stars,
        req.body.is_ally,
        req.body.is_admin,
        req.body.is_reported,
        req.body.is_active,
        req.body.is_blocked,
        req.body.delete_requested,
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

//// NOTE: is rejectUnauthenticated enough here? do we want to make sure the user 
// running the query has admin level privileges? 
router.get('/', rejectUnauthenticated, (req, res) => {
  if(req.user.is_admin){
  const sqlText = `
    SELECT * FROM "user"
  `;
  pool.query(sqlText)
    .then((dbRes) => {
      res.send(dbRes.rows);
    })
    .catch((dbErr) => {
      console.log('error getting users', dbErr);
      res.sendStatus(500);
    })}
    else console.warn('403, admins only :)')
  }
)

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  if (req.user.is_admin) {
  const sqlText = `
    DELETE * FROM "user"
      WHERE id=$1
  `;
  const sqlValues = [req.params.id];
  pool.query(sqlText, sqlValues)
    .then(
      res.sendStatus(204)
    )
    .catch((dbErr) => {
      console.log('error in DELETE /user/:id', dbErr);
      res.sendStatus(500);
    })
  } else {
    console.warn('only admins can delete users, sorry!')
  }
})

module.exports = router;