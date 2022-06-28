import './AllyApplication.css'
import ArrowL from './ArrowL.png';
import ArrowR from './ArrowR.png';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Box, FormControl, LinearProgress } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { SaveOutlined } from '@mui/icons-material';

function AllyApplication() {

    ////
    const dispatch = useDispatch();   
     useEffect(()=>{
        dispatch({
            type:'FETCH_ALLY_APP'
        })
    },[])
    const history = useHistory();
    ////
    const user = useSelector(store => store.user)
    ////
    const [X, setX] = useState(1)
    const [showButton, setShowButton] = useState(true)
    /////////////////////////////////////////////
    //Is the unit finished or not?
    //////////////////////////////////////////////
    const [isFinished, setIsFinished] = useState(false)

    const res1 = useSelector((store)=> store.allyApp.answer_1) ;
    const res2 = useSelector((store)=> store.allyApp.answer_2) ;
    const res3 = useSelector((store)=> store.allyApp.answer_3) ;
    const res4 = useSelector((store)=> store.allyApp.answer_4) ;



    ///////////////////////////////////////////////
    //Check if valid input functions
    ///////////////////////////////////////////////
    function ValidateEmail(inputText) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (inputText.match(mailformat)) {
            showNext()
            return true
        }
        else {

            hideNext()
            return false;
        }
    }
    //////////////////////////////////////////////
    //Standard Slide Functions
    /////////////////////////////////////////////
    const nextSlide = () => {
        setX(X + 1);
        setStep(0)
        hideNext()
    }



    // Use this if the next slide has a conditional next button
    const nextSlideAndHide = () => {
        setX(X + 1)
        setShowButton(false)
    }
    //Call this function to show a conditionally rendered next button
    const showNext = () => {
        setShowButton(true)
    }
    const hideNext = () => {
        setShowButton(false)
    }

  
    
    /////////////////////////////////////////////////
    //save and POST to server via dispatch
    /////////////////////////////////////////////////
     const postApp = ()=>{
        dispatch({
            type:'CREATE_ALLY_APP',
            payload: {
                answer1: res1,
                answer2: res2,
                answer3: res3,
                answer4: res4,
            }
        })
     }  
    /////////////////////////////////////////////////
    //edit and save as redux state  via dispatch
    /////////////////////////////////////////////////
    ()=>{
        dispatch({
            type:'EDIT_ALLY_APP',
            payload: {}
        })
    }
    /////////////////////////////////////////////////
    //Submit all and change 
    /////////////////////////////////////////////////
    const submitApp = ()=>{
        dispatch({
            type:'CREATE_ALLY_APP',
            payload: {
                answer1: res1,
                answer2: res2,
                answer3: res3,
                answer4: res4,
                done: true,
            }
        })
     }  
  
    /////////////////////////////////////////////////
    return (
        <>

            <div className="card-float">


                {/* Progress bar appears at the top at all times */}
                <div className='progress-bar'>
                    <Box mb={2}>
                        <LinearProgress
                            variant="determinate"
                            
                            value={((X-1) / 5) * 100}
                        />
                    </Box>
                    { (X>=0) &&
                    
                    <Box>
                 
                   
                 
                    <Button onClick={postApp}>   <SaveOutlined  /> Save Progress</Button> 
                    </Box>
                    }
                </div>


                {true &&
                    //This will display the initial CTA for becoming an ally. 
                    <div className="card-graphics">
                        <div className="card-top">
                            <h1>Apply to become an ally! </h1>
                            <h5>Learn More!</h5>  {/* TODO: Link to FAQ/About Page */}
                        </div>

                        <div className="card-body">
                                    <Button fullWidth onClick={nextSlideAndHide}>Get Started!</Button>
                        </div>


                        <div className="card-controls">
                            <div className="button-left">

                            </div>

                                <div className="button-right">
                                </div>
                        
                        </div>
                    </div>

                }




                {true &&
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
                                        type: 'EDIT_ANSWER_1',
                                        payload: e.target.value
                                    })
                                }}
                            />
                        </div>

                        <div className="card-controls">

                            <div className="button-left">

                            </div>

                           
                                <div className="button-right">
                                    <Button fullWidth onClick={nextSlideAndHide}>Next</Button>
                                </div>
                            
                        </div>
                    </div>

                }


                {true &&

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
                                        type: 'EDIT_ANSWER_2',
                                        payload: e.target.value
                                    })
                                }}
                            />
                        </div>

                        <div className="card-controls">

                            <div className="button-left">

                            </div>

                           
                                <div className="button-right">
                                    <Button fullWidth onClick={nextSlideAndHide}>Next</Button>
                                </div>
                            
                        </div>
                    </div>
            
                    
                }
                   {true &&
                    <>
                    <div className="card-graphics">
                            {/* This is the top of the card */}
                            <div className="card-top">
                            <Box fullWidth sx={{ display: 'flex' }}>
                                <h5>Allyx is fun, but safety is a priority and sometimes requires allies to handle challenging conversations with callers. In what way(s) have you prepared for, or what experience do you have working in areas related to safety or women's safety, if any?</h5>
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
                                        type: 'EDIT_ANSWER_3',
                                        payload: e.target.value
                                    })
                                }}
                            />
                                
                            </div>
                            {/* This is where our controls (back+next) are */}
                            <div className="card-controls">

                                <div className="button-left">
                                </div>

                             
                                <div className="button-right">
                                </div>
                                
                            </div>
                    </div>
                    </>
                }


                {true &&
                    <>
                    <div className="card-graphics">
                            {/* This is the top of the card */}
                            <div className="card-top">
                            <Box fullWidth sx={{ display: 'flex' }}>
                                <h5>Have you used a safety app or volunteered with a safety app previously? (phone line, chat, text line, in-person, etc?)</h5>
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
                                        type: 'EDIT_ANSWER_4',
                                        payload: e.target.value
                                    })
                                }}
                            />
                                
                            </div>
                            {/* This is where our controls (back+next) are */}
                            <div className="card-controls">

                                <div className="button-left">
                                </div>

                             
                                <div className="button-right">
                                </div>
                                
                            </div>
                    </div>
                    </>
                }

                {(X === 5) &&

                   <>
                    <div className="card-graphics">
                            <div className="card-top">
                            </div>

                            <div className="card-body">
                                
                            </div>

                            <div className="card-controls">

                                <div className="button-left">
                                </div>

                             
                                <div className="button-right">
                                </div>
                                
                            </div>
                    </div>
                   </>
                }
                <Button onClick={submitApp}>Submit Application</Button>

            </div>

        </>
    )
}
export default AllyApplication