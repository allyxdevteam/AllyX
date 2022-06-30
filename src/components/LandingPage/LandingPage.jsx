//react, redux, sagas------------------------------------------------------
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//styling, mui ----------------------------------------------------------
import './LandingPage.css';
import { Button } from '@mui/material';


// CUSTOM COMPONENTS---------------------------------------------------
import ImageUploader from '../ImageUploader/ImageUploader';

function LandingPage() {

  //variables that are react functions---------------------------------
  const history = useHistory();
  const dispatch = useDispatch();

  //variables that evaluate to something specific----------------------------------
  const profileImage = useSelector((store) => store.profileImage)
  const user = useSelector((store) => store.user);
  console.log('this is the user:', user);
  console.log('this is the profile image url:', profileImage);

  const date = new Date();
  const dateTime = date.toLocaleString();
  console.log('this is the time', dateTime);
  console.log(date.toLocaleDateString());

  //local state---------------------------------------------------------
  const [callTime, setCallTime] = useState(dateTime);



  //other functions-----------------------------------------------------------
  

  function handleRequestCall() {
    console.log('in handleRequestCall');
    user.id ?
      (dispatch({
        type: "POST_REQUESTED_CALL",
        payload: { dateTime, user }
      }), 
      
      history.push('/memberCallRequested'))
      
      

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

        history.push('/memberCallRequested')

      }

      

      else{alert('no!')}
  }

  function handleGoToAllyPage(){
    history.push('/allyRequestedCalls')
  }


  return (
    <div className="container">
      <h2>Welcome {user.username}</h2> 

      <Button onClick={handleGoToAllyPage}>go to Ally Requested Calls/ become an Ally</Button>

      <Button onClick={handleRequestCall}>Request a call</Button>

      <Button onClick={handleScheduleCall}>Schedule a call</Button>


      <input type="datetime-local"
        onChange={(e) => {
          setCallTime(e.target.value)
          console.log(callTime);
        }}
      ></input>

      <img src={profileImage} alt=''/>

    </div>

  );
}

export default LandingPage;
