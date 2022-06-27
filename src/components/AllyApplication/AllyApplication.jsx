import './AllyApplication.css'
import ArrowL from './ArrowL.png';
import ArrowR from './ArrowR.png';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Box, FormControl, LinearProgress } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { SaveOutlined } from '@mui/icons-material';

function AllyApplication() {
    ////
    const dispatch = useDispatch();
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

    ////////////////////////////////////////////////////
    // LIST OF REQUIRED RESPONSES KEPT AS REDUX STATE WE WILL POST ON SUBMIT
    ////////////////////////////////////////////////////
    const [response1, setResponse1] = useState('') // 
    const [response2, setResponse2] = useState('') // 
    const [response3, setResponse3] = useState('') // 
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
        setStep(0)
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
                answer1: response1,
                answer2: response2,
                answer3: response3,
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
                    { (X>=2) &&
                    
                    <Box>
                 
                   
                 
                    <Button onClick={postApp}>   <SaveOutlined  /> Save Progress</Button> 
                    </Box>
                    }
                </div>


                {(X === 1) &&
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




                {(X === 2) &&
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
                                value={response1}
                                onChange={(e) => {
                                    setResponse1(e.target.value);
                                }}
                            />
                        </div>

                        <div className="card-controls">

                            <div className="button-left">

                            </div>

                            {(response1.length > 0) &&
                                <div className="button-right">
                                    <Button fullWidth onClick={nextSlideAndHide}>Next</Button>
                                </div>
                            }
                        </div>
                    </div>

                }


                {(X === 3) &&

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
                                value={response2}
                                onChange={(e) => {
                                    setResponse2(e.target.value);
                                }}
                            />
                        </div>

                        <div className="card-controls">

                            <div className="button-left">

                            </div>

                            {(response2.length > 0) &&
                                <div className="button-right">
                                    <Button fullWidth onClick={nextSlideAndHide}>Next</Button>
                                </div>
                            }
                        </div>
                    </div>
            
                    
                }
                   {(X === 4) &&
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
                                value={response2}
                                onChange={(e) => {
                                    setResponse2(e.target.value);
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
                            {/* This is the top of the card */}
                            <div className="card-top">
                            </div>
                            {/* This is the middle */}
                            <div className="card-body">
                                
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

            </div>

        </>
    )
}
export default AllyApplication



// {(X === 3) &&
//     // This will have the requirements for social media. GET route for previous social media needed

//     <>
//         <div className="card-graphics">

//             <div className="card-top">
//                 <h1> Tell us a bit more about yourself </h1>
//             </div>

//             <div className="card-body">


//                 {/* Twitter Username */}
//                 <Box mt={2}>
//                     <FormControl fullWidth>
//                         <TextField
//                             id="outlined-textarea"
//                             label="Twitter Handle"

//                             placeholder="e.x. @HeyAllyxApp"
//                             multiline
//                             fullwidth
//                             color={(response2.length > 4 && response2.length < 25) ? null : "warning"}
//                             value={response2}
//                             onChange={(e) => {
//                                 setResponse2(e.target.value);
//                             }}
//                         />
//                     </FormControl>
//                 </Box>



//                 {/* Instagram Username */}
//                 <Box mt={2}>
//                     <FormControl fullWidth>

//                         <TextField
//                             id="outlined-textarea"
//                             label="Instagram Username"
//                             placeholder="e.x. @HeyAllyxApp"
//                             multiline
//                             fullwidth
//                             color={(response3.length > 4 && response3.length < 25) ? null : "warning"}
//                             value={response3}
//                             onChange={(e) => {
//                                 setResponse3(e.target.value);
//                             }}
//                         />

//                     </FormControl>
//                 </Box>


//                 {/* Facebook Account */}
//                 <Box mt={2}>
//                     <FormControl fullWidth>

//                         <TextField
//                             id="outlined-textarea"
//                             label="Link to facebook account"
//                             placeholder="e.x. aklsdjsadjaslkdja.com"
//                             multiline
//                             fullwidth
//                             color={(response3.length > 4 && response3.length < 25) ? null : "warning"}
//                             value={response3}
//                             onChange={(e) => {
//                                 setResponse3(e.target.value);
//                             }}
//                         />

//                     </FormControl>
//                 </Box>

//             </div>

//             <div className="card-controls">

//                 <div className="button-left">
//                     <Button onClick={prevSlide}>Back</Button>
//                 </div>

//                 {((response2.length > 5 && response2.length < 25) && (response3.length > 5 && response3.length < 25)) &&
//                     <div className="button-right">
//                         <button onClick={nextSlideAndHide}>Next</button>
//                     </div>
//                 }
//             </div>
//         </div>

//     </>
// }