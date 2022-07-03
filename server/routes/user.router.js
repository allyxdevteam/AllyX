const dayjs = require('dayjs');
const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const dob = req.body.dob; 
  const email = req.body.email;
  const phone = Number(req.body.phone);
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const twitter = req.body.twitter;
  const facebook = req.body.facebook;
  const instagram = req.body.instagram
  console.log(`*****************************************************HAHAHAHAH***************`, dob, phone, email)


  const queryText = `INSERT INTO "user" (username, password, email, phone_number, DOB, first_name, last_name, twitter_link, facebook_link, instagram_link)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id;`;
  pool
    .query(queryText, [username, password, email, phone, dob, firstname, lastname, twitter, facebook, instagram])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

router.put('/', rejectUnauthenticated, (req, res) => {
  console.log('************************************************', req);
  const sqlText = `
  UPDATE "user"
      SET
          is_active = false,
          delete_requested = true
      WHERE id = $1;
  `;
  const sqlValues = [
    req.user.id
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
