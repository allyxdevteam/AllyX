const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/:memberId', (req, res) => {
    const memberId = req.params.memberId;
    const sqlQuery = 'SELECT "first_name", "phone_number", "profile_pic"  FROM "user" WHERE "is_active" = true AND "is_blocked" = false AND "id" = $1;';
    const sqlValues = [memberId];
    
    pool.query(sqlQuery, sqlValues)
      .then(result => {
        res.send(result.rows[0]);
      })
      .catch(err => {
        console.log('ERROR: fetch claimed call', err);
        res.sendStatus(500)
      })
  });

router.post('/', rejectUnauthenticated, async (req, res) => {
    const client = await pool.connect();
    const memberId = req.body.call.member_id;
    const allyId = req.body.user.id;
    const requestedCallTime = req.body.call.time
    
    try {
         await client.query('BEGIN')
         const sqlQuery = `INSERT INTO "call" ("member_id", "ally_id")
         VALUES ($1, $2)
         RETURNING id, member_id;`;
         const sqlValues = [memberId, allyId];
         const insertCallResults = await client.query(sqlQuery, sqlValues);
         
         const callId = insertCallResults.rows[0].id;
         const getClaimedCallIdQuery = `SELECT * FROM "call" WHERE "id" = $1;`;
         const getClaimedCallIdValues = [callId];
         await client.query(getClaimedCallIdQuery, getClaimedCallIdValues);

         const updateRequestedCallStatusQuery = `UPDATE "requested-call" SET "open" = false WHERE member_id = $1 AND time = $2`;
         const updateRequestedCallStatusValues = [memberId, requestedCallTime];
         await client.query(updateRequestedCallStatusQuery, updateRequestedCallStatusValues);


         await client.query('COMMIT')

         res.status(201).send({callId});
    } catch (error) {
        await client.query('ROLLBACK')
        console.log('Error POST /api/claimedCalls', error);
        res.sendStatus(500);
    } finally {
        client.release()
    }
});




module.exports = router;
