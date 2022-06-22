//react, redux, sagas------------------------------------------------------
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//styling, mui ----------------------------------------------------------
import './LandingPage.css';


// CUSTOM COMPONENTS---------------------------------------------------
import RegisterForm from '../RegisterForm/RegisterForm';
import AllyApplication from '../AllyApplication/AllyApplication';

function LandingPage() {

  //variables that are react functions---------------------------------
  const history = useHistory();
  const dispatch = useDispatch();

  //variables that evaluate to something----------------------------------
  const user = useSelector((store) => store.user);
  console.log('this is the user:', user);

  const date = new Date();
  const dateTime = date.toLocaleString();
  console.log('this is the time', dateTime);

  //local state---------------------------------------------------------
  const [heading, setHeading] = useState('Welcome');


  //other functions-----------------------------------------------------------
  const onLogin = (event) => {
    history.push('/login');
  };

  function handleRequestCall() {
    console.log('in handleRequestCall');
    dispatch({
      type: "POST_REQUESTED_CALL",
      payload: {dateTime, user}
  })

  }

  function handleScheduleCall() {
    console.log('in handleScheduleCall');
  }

  return (
    <div className="container">
      <h2>{heading}</h2>

      <button onClick={handleRequestCall}>Request a call</button>

      <button onClick={handleScheduleCall}>Schedule a call</button>



      <div className="grid-col grid-col_4">
        <RegisterForm />

        <center>
          <h4>Already a Member?</h4>
          <button className="btn btn_sizeSm" onClick={onLogin}>
            Login
          </button>
        </center>
      </div>
      <AllyApplication />
    </div>

  );
}

export default LandingPage;
