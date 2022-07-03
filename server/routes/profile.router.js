const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/:id', rejectUnauthenticated, (req, res) => {
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
})

router.put('/:id', rejectUnauthenticated, (req, res) => {
    console.log('*********************************************', req.body);
    const updatedProfileInfo = req.body.updatedProfile;
    const updatedProfilePic = req.body.updatedImage;
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
            delete_requested = $15,
            profile_pic = $16
        WHERE id = $17;
    `;
    const sqlValues = [
      updatedProfileInfo.first_name,
      updatedProfileInfo.last_name,
      updatedProfileInfo.phone_number,
      updatedProfileInfo.email,
      updatedProfileInfo.city,
      updatedProfileInfo.facebook_link,
      updatedProfileInfo.twitter_link,
      updatedProfileInfo.instagram_link,
      updatedProfileInfo.average_stars,
      updatedProfileInfo.is_ally,
      updatedProfileInfo.is_admin,
      updatedProfileInfo.is_reported,
      updatedProfileInfo.is_active,
      updatedProfileInfo.is_blocked,
      updatedProfileInfo.delete_requested,
      updatedProfilePic,
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
});


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
    DELETE FROM "user"
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