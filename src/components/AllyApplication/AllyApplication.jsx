import "./AllyApplication.css";
import ArrowL from "./ArrowL.png";
import ArrowR from "./ArrowR.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Box, FormControl, LinearProgress } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { SaveOutlined } from "@mui/icons-material";

function AllyApplication() {
const timer = setInterval(fetchApp, 2000);

  const [X, setX] = useState(0);
  const [showButton, setShowButton] = useState(true);

  const dispatch = useDispatch();

  const fetchApp = async () => {
    if(X === 0){
        dispatch({
            type: "FETCH_ALLY_APP",
          });
          setX(1)
          clearInterval(timer)
          
    }
    else if(X === 6){
    dispatch({
      type: "FETCH_ALLY_APP",
    });

    }
    else {
        clearInterval(timer)
        return;

    }
  
    
  
  };

  ////

  useEffect(() => {

    const timer = setInterval(fetchApp, 2000);
    return () => {
      clearInterval(timer);
    };
  }, [X]);

  const history = useHistory();
  ////
  const user = useSelector((store) => store.user);
  ////

  /////////////////////////////////////////////
  //Is the unit finished or not?
  //////////////////////////////////////////////

  const res1 = useSelector((store) => store.allyApp.answer_1);
  const res2 = useSelector((store) => store.allyApp.answer_2);
  const res3 = useSelector((store) => store.allyApp.answer_3);
  const res4 = useSelector((store) => store.allyApp.answer_4);
  const isdone = useSelector((store) => store.allyApp.is_complete);

  //////////////////////////////////////////////
  //Standard Slide Functions
  /////////////////////////////////////////////

  // Use this if the next slide has a conditional next button
  const nextSlideAndHide = () => {
    setX(X + 1);
    setShowButton(false);
  };

  /////////////////////////////////////////////////
  //save and POST to server via dispatch
  /////////////////////////////////////////////////
  const postApp = () => {
    dispatch({
      type: "CREATE_ALLY_APP",
      payload: {
        answer1: res1,
        answer2: res2,
        answer3: res3,
        answer4: res4,
        done: false
      },
    });
  };

  /////////////////////////////////////////////////
  //Submit all and change
  /////////////////////////////////////////////////
  const submitApp = () => {
    dispatch({
      type: "CREATE_ALLY_APP",
      payload: {
        answer1: res1,
        answer2: res2,
        answer3: res3,
        answer4: res4,
        done: true,
      },
    });
    nextSlideAndHide();
  };

  //

  /////////////////////////////////////////////////
  return (
    <>
      { (isdone != undefined)   ?

        <>
        <div className="card-float">
          {(isdone === false) ? 
            <>
              {/* Progress bar appears at the top at all times */}
              <div className="progress-bar">
                {X != 6 ? (
                  <Box mb={2}>
                    <LinearProgress
                      variant="determinate"
                      value={((X - 1) / 5) * 100}
                    />
                  </Box>
                ) : (
                  <>
                    <h1>Processing...</h1>
                  </>
                )}

                {X >= 0 && X < 6 && (
                  <Box>
                    <Button onClick={postApp}>
                      {" "}
                      <SaveOutlined /> Save Progress
                    </Button>
                  </Box>
                )}
              </div>

              {X === 1 && (
                //This will display the initial CTA for becoming an ally.
                <div className="card-graphics">
                  <div className="card-top">
                    <h1>Apply to become an ally! </h1>
                    <h5>Please have a valid social media account registered and be prepared to answer four short prompts</h5> {/* TODO: Link to FAQ/About Page */}
                  </div>

                  <div className="card-body">
                    <Button fullWidth onClick={nextSlideAndHide}>
                      Get Started!
                    </Button>
                  </div>

                  <div className="card-controls">
                    <div className="button-left"></div>

                    <div className="button-right"></div>
                  </div>
                </div>
              )}

              {X === 2 && (
                <div className="card-graphics">
                  <div className="card-top">
                    <h3>Tell us why you'd like to become an ally!</h3>
                  </div>

                  <div className="card-body">
                    <TextField
                      id="outlined-textarea"
                      label=""
                      placeholder=""
                      multiline
                      fullWidth
                      value={res1}
                      onChange={(e) => {
                        dispatch({
                          type: "EDIT_ANSWER_1",
                          payload: e.target.value,
                        });
                      }}
                    />
                  </div>

                  <div className="card-controls">
                    <div className="button-left"></div>

                    <div className="button-right">
                      <Button fullWidth onClick={nextSlideAndHide}>
                        Next
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              {X === 3 && (
                <div className="card-graphics">
                  <div className="card-top">
                    <h3>How did you find out about Allyx?</h3>
                  </div>

                  <div className="card-body">
                    <TextField
                      id="outlined-textarea"
                      label=""
                      placeholder=""
                      multiline
                      fullWidth
                      value={res2}
                      onChange={(e) => {
                        dispatch({
                          type: "EDIT_ANSWER_2",
                          payload: e.target.value,
                        });
                      }}
                    />
                  </div>

                  <div className="card-controls">
                    <div className="button-left"></div>

                    <div className="button-right">
                      <Button fullWidth onClick={nextSlideAndHide}>
                        Next
                      </Button>
                    </div>
                  </div>
                </div>
              )}
              {X === 4 && (
                <>
                  <div className="card-graphics">
                    {/* This is the top of the card */}
                    <div className="card-top">
                      <Box fullWidth sx={{ display: "flex" }}>
                        <h5>
                          Allyx is fun, but safety is a priority and sometimes
                          requires allies to handle challenging conversations
                          with callers. In what way(s) have you prepared for, or
                          what experience do you have working in areas related
                          to safety or women's safety, if any?
                        </h5>
                      </Box>
                    </div>
                    {/* This is the middle */}
                    <div className="card-body">
                      <TextField
                        id="outlined-textarea"
                        label=""
                        placeholder=""
                        multiline
                        fullWidth
                        value={res3}
                        onChange={(e) => {
                          dispatch({
                            type: "EDIT_ANSWER_3",
                            payload: e.target.value,
                          });
                        }}
                      />
                    </div>
                    {/* This is where our controls (back+next) are */}
                    <div className="card-controls">
                      <div className="button-left"></div>

                      <div className="button-right">
                        <Button fullWidth onClick={nextSlideAndHide}>
                          Next
                        </Button>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {X === 5 && (
                <>
                  <div className="card-graphics">
                    {/* This is the top of the card */}
                    <div className="card-top">
                      <Box fullWidth sx={{ display: "flex" }}>
                        <h5>
                          Have you used a safety app or volunteered with a
                          safety app previously? (phone line, chat, text line,
                          in-person, etc?)
                        </h5>
                      </Box>
                    </div>
                    {/* This is the middle */}
                    <div className="card-body">
                      <TextField
                        id="outlined-textarea"
                        label=""
                        placeholder=""
                        multiline
                        fullWidth
                        value={res4}
                        onChange={(e) => {
                          dispatch({
                            type: "EDIT_ANSWER_4",
                            payload: e.target.value,
                          });
                        }}
                      />
                    </div>
                    {/* This is where our controls (back+next) are */}
                    <div className="card-controls">
                      <div className="button-left"></div>

                      <div className="button-right">
                        <Button onClick={submitApp}>Submit Application</Button>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {X === 6 && isdone === true ? (
                <>
                  <div className="card-graphics">
                    {/* This is the top of the card */}
                    <div className="card-top">
                      <Box fullWidth sx={{ display: "flex" }}>
                        <h5>Application Complete!</h5>
                      </Box>
                    </div>
                    {/* This is the middle */}
                    <div className="card-body">
                      <h1></h1>
                    </div>
                    {/* This is where our controls (back+next) are */}
                    <div className="card-controls">
                      <div className="button-left"></div>

                      <div className="button-right"></div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="card-graphics">
                    {/* This is the top of the card */}
                    <div className="card-top">
                      <Box fullWidth sx={{ display: "flex" }}>
                        <h5>Application Incomplete</h5>
                      </Box>
                    </div>
                    {/* This is the middle */}
                    <div className="card-body">
                      <h1></h1>
                    </div>
                    {/* This is where our controls (back+next) are */}
                    <div className="card-controls">
                      <div className="button-left"></div>

                      <div className="button-right"></div>
                    </div>
                  </div>
                </>
              )}
            </>
           : 
            
              <>
                <div className="card-graphics">
                  {/* This is the top of the card */}
                  <div className="card-top">
                    <Box fullWidth sx={{ display: "flex" }}>
                      <h1>Application Pending Approval </h1>
                    </Box>
                  </div>
                  {/* This is the middle */}
                  <div className="card-body">
                    <h1>Check back in soon!</h1>
                  </div>
                  {/* This is where our controls (back+next) are */}
                  <div className="card-controls">
                    <div className="button-left"></div>

                    <div className="button-right"></div>
                  </div>
                </div>
              </>
            
          }
        </div>
        </>
        :
        <>
        <div className="card-float">
        <div className="card-graphics">
                  {/* This is the top of the card */}
                  <div className="card-top">
                    <Box fullWidth sx={{ display: "flex" }}>
                      <h1>Loading...</h1>
                    </Box>
                  </div>
                  {/* This is the middle */}
                  <div className="card-body">
                  <h1>We're waiting for our server to give us cool data!</h1>

                  </div>
                  {/* This is where our controls (back+next) are */}
                  <div className="card-controls">
                    <div className="button-left">

                    </div>

                    <div className="button-right">

                    </div>
                  </div>
                </div>

        </div>
        </>
      }
    </>
  );
}
export default AllyApplication;