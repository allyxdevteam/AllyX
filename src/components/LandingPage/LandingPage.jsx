//react, redux, sagas------------------------------------------------------
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//styling, mui ----------------------------------------------------------
import './LandingPage.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import {
  DatePicker
} from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers-pro';



// CUSTOM COMPONENTS---------------------------------------------------
import RegisterForm from '../RegisterForm/RegisterForm';
import AllyApplication from '../AllyApplication/AllyApplication';

function LandingPage() {

  //variables that are react functions---------------------------------
  const history = useHistory();
  const dispatch = useDispatch();

  //variables that evaluate to something specific----------------------------------
  const user = useSelector((store) => store.user);
  console.log('this is the user:', user);

  const date = new Date();
  const dateTime = date.toLocaleString();
  console.log('this is the time', dateTime);
  console.log(date.toLocaleDateString());

  //local state---------------------------------------------------------
  const [heading, setHeading] = useState('Welcome');
  const [callTime, setCallTime] = useState(dateTime);



  //other functions-----------------------------------------------------------
  const onLogin = (event) => {
    history.push('/login');
  };

  function handleRequestCall() {
    console.log('in handleRequestCall');
    user.id ?
      dispatch({
        type: "POST_REQUESTED_CALL",
        payload: { dateTime, user }
      })

      :
      history.push('/login')

  }

  function handleScheduleCall() {
    console.log('in handleScheduleCall');
    console.log('this is the set date and time:', callTime);

    const newDate = new Date(callTime);
    const chosenTime = newDate.getTime();

    console.log('chosen time',chosenTime);
    console.log('current time',new Date().getTime());


      if(user.id===undefined){history.push('/login')}

      else if(chosenTime >= new Date().getTime( )) {

        dispatch({
          type: "POST_SCHEDULED_CALL",
          payload: { callTime, user }
        })
      }

      else{alert('no!')}
  }


  return (
    <div className="container">
      <h2>{heading}</h2> 

      <button onClick={handleRequestCall}>Request a call</button>



      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                disablePast = {true}
                //disableIgnoringDatePartForTimeValidation = {true}
                //minDateTime = {dateTime}
                value={callTime}

                // inputFormat="MM/YY"
                // views={['year', 'month',]}

                onChange={(e) => { 
                  //set up a ternary here to set the call time to the current time if "e" is earlier than the current time.
                  setCallTime(e) }}
                renderInput={(params) => {
                  return <TextField {...params} />;
                }} 
                
                />



            </LocalizationProvider > */}
      <button onClick={handleScheduleCall}>Schedule a call</button>


      <input type="datetime-local"
        onChange={(e) => {
          //set up a ternary here to set the call time to the current time if "e" is earlier than the current time.
          setCallTime(e.target.value)
          console.log(callTime);
        }}
      // renderInput={(params) => {
      //   return <TextField {...params} />;
      // }} 
      ></input>







      <center>
        <h4>Already a Member?</h4>
        <button onClick={onLogin}>
          Login
        </button>
      </center>

      <AllyApplication />
    </div>

  );
}

export default LandingPage;
