const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


router.post('/', rejectUnauthenticated, async (req, res) => {
    const client = await pool.connect();
    const memberId = req.body.call.member_id;
    const allyId = req.body.user.id;
    const requestedCallTime = req.body.call.time
    
    try {
        console.log('this is the req dot boooooody', req.body);
         await client.query('BEGIN')
         const sqlQuery = `INSERT INTO "call" ("member_id", "ally_id")
         VALUES ($1, $2)
         RETURNING id;`;
         const sqlValues = [memberId, allyId];
         const insertCallResults = await client.query(sqlQuery, sqlValues);
         const callId = insertCallResults.rows[0].id;

         const updateRequestedCallStatusQuery = `UPDATE "requested-call" SET "open" = false WHERE member_id = $1 AND time = $2`;
         const updateRequestedCallStatusValues = [memberId, requestedCallTime];
         await client.query(updateRequestedCallStatusQuery, updateRequestedCallStatusValues);


         await client.query('COMMIT')
         res.sendStatus(201);
    } catch (error) {
        await client.query('ROLLBACK')
        console.log('Error POST /api/claimedCalls', error);
        res.sendStatus(500);
    } finally {
        client.release()
    }
});




module.exports = router;
