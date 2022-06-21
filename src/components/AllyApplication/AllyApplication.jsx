import './AllyApplication.css'
import ArrowL from './ArrowL.png';
import ArrowR from './ArrowR.png';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { LinearProgress } from '@mui/material';

function AllyApplication() {
    const dispatch = useDispatch();
    const history = useHistory();
    ////
    const user = useSelector(store => store.user)
    ////
    const [X, setX] = useState(1)
    const [showButton, setShowButton] = useState(true)
    const [step, setStep] = useState(0);
    /////////////////////////////////////////////
    //Is the unit finished or not?
    //////////////////////////////////////////////
    const [isFinished, setIsFinished] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)

    ////////////////////////////////////////////////////
    // LIST OF REQUIRED RESPONSES WE WILL POST ON SUBMIT
    ////////////////////////////////////////////////////
    const [response1, setResponse1] = useState('')



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
    }

    const handleNextStep = () => {
        setStep(X + 1)
    }

    const prevSlide = () => {
        setX(X - 1)
        setStep(0)
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
    ///




    ///////////////////////////////////////////////////////////////////////////////////////////////////
    //!!!!!!!!! BIG TEMP FIX: Cant make the step threshold for each NEXT button to appear modular yet. 
    //Each unique .touch div needs to have its own unique onClick function to check if the step count is 
    // above a threshold, then change showButton to true
    ///////////////////////////////////////////////////////////////////////////////////////////////////
    const onSlideThreeClick = () => {
        setStep(step + 1)
        if (step >= 2) {
            setShowButton(true)
            finalSlideCheck(); //only on the slide before the final
        }

        if (step >= 3) {
            setShowButton(false)
            setX(Slide + 1)

        }
    }
    //vvv these are for one step slides so that our users can progress to next 
    const onSlideClick = () => {
        setX(X + 1)
    }


    ////////////////////////////////////////////////////////////////////////
    //Function to run in the slide before the last slide to see if everything has been completed.
    //If all inputs are filled, set the state of isFinished to true
    ///////////////////////////////////////////////////////////////////////
    //
    const finalSlideCheck = () => {
        if (response1 != '') {
            setIsFinished(true)
        }
        else {
            return false;
        }

    }
    /////////////////////////////////////////////////
    //Finish and POST to server via dispatch
    /////////////////////////////////////////////////
    const handleFinish = () => {
        setIsSubmit(true)
        //Object To Map
        let arrayToMap = [{ response: response1, prompt: `Hello ${user.nickname}, how are you today?` }, { response: 'This is a fake response', prompt: 'This is a fake prompt' }]

        //dispatch
        dispatch({
            type: 'POST_UNIT_RESPONSE',
            payload: { arrays: arrayToMap, moduleNumber: 1, unitNumber: 1 }
        })

        //history.push
        setTimeout(() => { history.push('/user') }, 3000)
    }
    /////////////////////////////////////////////////
    return (
        <>

            <div className="card-float">
                <div className='progress-bar'>
                    <h1>Progress: {(X/4)*100}</h1>
                    <LinearProgress
                        variant="determinate"
                        value={(X / 4) * 100}
                    />
                </div>
                {(X === 1) &&
                    <div className="card-graphics">
                        <div className="card-top">
                            <h1> Please enter your X </h1>
                        </div>

                        <div className="card-body">
                            <input value={response1} onChange={(e) => {setResponse1(e.target.value); ValidateEmail(e.target.value) }}></input>
                        </div>

                        <div className="card-controls">

                            <div className="button-left">

                            </div>

                            {(showButton === true && response1 != '') &&
                                <div className="button-right">
                                    <button onClick={nextSlideAndHide}>Next</button>
                                </div>
                }
                        </div>
                    </div>

                }




                {(X === 2) &&
                    <>
                        <div className="card-graphics">
                            <div className="card-top">
                                <h1> Hello {user.nickname}, how are you today? </h1>
                            </div>

                            <div className="card-body">
                                <input value={response1} onChange={(e) => { showNext(); setResponse1(e.target.value); }}></input>
                            </div>

                            <div className="card-controls">

                                <div className="button-left">
                                    <img src={ArrowL} onClick={prevSlide}></img>
                                </div>

                                {(showButton === true && response1 != '') &&
                                    <div className="button-right">
                                        <img src={ArrowR} onClick={nextSlideAndHide}></img>
                                    </div>
                                }
                            </div>
                        </div>

                    </>
                }



                {(X === 3) &&

                    <>
                        <div className="card-graphics">
                            <div className="card-top">
                                <h1> Hello {user.nickname}, how are you today? </h1>
                            </div>

                            <div className="card-body">
                                <input value={response1} onChange={(e) => { showNext(); setResponse1(e.target.value); }}></input>
                            </div>

                            <div className="card-controls">

                                <div className="button-left">
                                    <img src={ArrowL} onClick={prevSlide}></img>
                                </div>

                                {(showButton === true && response1 != '') &&
                                    <div className="button-right">
                                        <img src={ArrowR} onClick={nextSlideAndHide}></img>
                                    </div>
                                }
                            </div>
                        </div>

                    </>
                }


                {(X === 4) &&

                    <>
                        <div className="card-graphics">
                            <div className="touch" onClick={onSlideThreeClick}>

                                <div className="card-top">
                                    <h1> Hi I'm the fourth slide, the slide before the last</h1>
                                </div>


                                <div className="card-body">

                                    {(step >= 0) ?

                                        <>
                                            <h2>Interact with me</h2>

                                        </>
                                        :
                                        <>

                                        </>
                                    }
                                    {(step >= 1) ?

                                        <div className="step-appear">
                                            <h2>You found me!</h2>

                                        </div>
                                        :
                                        <>

                                        </>
                                    }
                                    {(step >= 3) ?

                                        <div className="step-bounce">
                                            <h2>You found me too!</h2>

                                        </div>
                                        :
                                        <>

                                        </>
                                    }
                                </div>



                                <div className="card-controls">

                                    <div className="button-left">
                                        <img src={ArrowL} onClick={prevSlide}></img>
                                    </div>
                                    {(showButton === true) &&
                                        <div className="button-right">
                                            <img src={ArrowR} onClick={() => { nextSlide(); finalSlideCheck(); }}></img>
                                        </div>
                                    }

                                </div>
                            </div>

                        </div>
                    </>
                }

                {(X === 4) &&

                    <>
                        <div className="card-top">
                            <h1> Hi I'm the fifth and final slide</h1>
                        </div>

                        <div className="card-body">
                            <h2>Your first response was {response1}</h2>
                        </div>

                        <div className="card-controls">
                            <div className="button-left">
                                <img src={ArrowL} onClick={prevSlide}></img>
                            </div>
                            {
                                isFinished != false ?
                                    <>
                                        <div className="button-right">
                                        </div>
                                    </> :
                                    <>
                                        <h1>You aren't done!</h1>
                                    </>
                            }
                        </div>
                    </>
                }
            </div>

        </>
    )
}
export default AllyApplication