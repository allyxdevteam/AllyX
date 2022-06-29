const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");
const e = require("express");
const { query } = require("express");

/**
 * GET route template
 */
router.get("/", rejectUnauthenticated, (req, res) => {
    let user = req.user.id

    let countQuery = `SELECT *
                    FROM "ally-application" 
                     WHERE user_id = $1`;
    let countValues = [user];
    pool.query(countQuery, countValues)
    .then((dbres)=>{
      console.log(`*********************************************************`, dbres.rowCount)
      if(dbres.rowCount === 0){
        res.send({Response_1: '', Response_2: '', Response_3: '', Response_4: '', is_complete: false})
      }
      else{
        console.log(dbres.rows)
        res.send(dbres.rows[0])
      }
    })
    .catch((err)=>{
      res.sendStatus(500)
    })
  
});

/**
 * POST route template
 */
router.post("/", rejectUnauthenticated, (req, res) => {
  let user = req.user.id;
  let answer_1 = req.body.answer1;
  let answer_2 = req.body.answer2;
  let answer_3 = req.body.answer3;
  let answer_4 = req.body.answer4;

  let sqlValues = [user, answer_1, answer_2, answer_3, answer_4];

  //For update
  let sqlQueryU = `UPDATE "ally-application"
                            SET answer_1= $2 , answer_2= $3 , answer_3= $4 , answer_4= $5
                            WHERE user_id = $1;`;
//For post
  let sqlQuery = `INSERT INTO "ally-application" ("user_id", "answer_1", "answer_2", "answer_3", "answer_4") 
                        VALUES ($1, $2, $3, $4, $5);`;
//For testing if the user already has a row
  let countQuery = `SELECT *
                    FROM "ally-application" 
                     WHERE user_id = $1`;
  let countValues = [user];

  let booly = req.body.done;





  pool
    .query(countQuery, countValues)
    .then((dbres) => {
     

      let usercount = Number(dbres.rowCount);



      if (usercount > 0) {
  
        pool
          .query(sqlQueryU, sqlValues)
          .then((result) => {
            console.log(result, "Good things happened and  we have updates");
            res.sendStatus(200);
          })
          .catch((dberr) => {
            console.log(dberr)
            res.sendStatus(500)
          });
          if(req.body.done === true){
            let sqlQueryD = `UPDATE "ally-application" 
                             SET is_complete= TRUE
                              WHERE user_id = $1;`;
            let sqlValueD = [user];
            pool
              .query(sqlQueryD, sqlValueD)
              .then((dbres)=>{
                console.log('DB DONE UPDATING', dbres)
              })
              .catch((dberr)=>{
                console.log('DB DONE WITH ERROR UPDATING', dberr)
        
              })
          }
      } else {

        pool
          .query(sqlQuery, sqlValues)
          .then((dbres) => {
            console.log("POSTED A NEW APP", dbres);
            if(req.body.done === true){
              let sqlQueryD = `UPDATE "ally-application" 
                                SET is_complete = TRUE
                                WHERE user_id = $1;`;
              let sqlValueD = [user];
              pool
                .query(sqlQueryD, sqlValueD)
                .then((dbres)=>{
                  console.log('DB  WITH DONE', dbres)
                })
                .catch((dberr)=>{
                  console.log('DB  WITH ERROR IN DONE', dberr)
                })
            }
            res.sendStatus(200);
          })
          .catch((dberr) => {
            console.log(dberr, "Something bad happened in posting a new app");
            res.sendStatus(500);
          });


          
      }
    })
    .catch((dberr) => {
      console.log(dberr);
      res.sendStatus(500);
    });
});

module.exports = router;
