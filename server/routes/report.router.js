const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');


router.get('/', rejectUnauthenticated, (req, res) => {
    if(req.user.is_admin){
    const sqlText = `
      SELECT * FROM "report"
    `;
    pool.query(sqlText)
      .then((dbRes) => {
        res.send(dbRes.rows);
      })
      .catch((dbErr) => {
        console.log('error getting reports', dbErr);
        res.sendStatus(500);
      })}
      else console.warn('403, admins only :)')
    }
  )

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
  if (req.user.is_admin) {
  const sqlText = `
    DELETE FROM "report"
      WHERE id=$1
  `;
  const sqlValues = [req.params.id];
  pool.query(sqlText, sqlValues)
    .then(
      res.sendStatus(204)
    )
    .catch((dbErr) => {
      console.log('error in DELETE /report/:id', dbErr);
      res.sendStatus(500);
    })
  } else {
    console.warn('only admins can delete reports, sorry!')
  }
})

module.exports = router;
