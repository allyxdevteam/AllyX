//react, redux, sagas------------------------------------------------------
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//styling, mui ----------------------------------------------------------
import './LandingPage.css';


// CUSTOM COMPONENTS---------------------------------------------------
import ImageUploader from '../ImageUploader/ImageUploader';
import ConditionalAllyButton from './Components/ConditionalAllyButton';
import CallSpeedDial from "../Nav/Components/CallSpeedDial";

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
      history.push('/memberRequestedCall/:requestedCallId')
      )

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
      <h2>Welcome {user.username}</h2> 

      <ConditionalAllyButton user={user}/>
      {/* <button onClick={handleGoToAllyPage}>go to Ally Requested Calls/ become an Ally</button> */}

      <button onClick={handleRequestCall}>Request a call</button>

      <button onClick={handleScheduleCall}>Schedule a call</button>

     
      <input type="datetime-local"
        onChange={(e) => {
          setCallTime(e.target.value)
          console.log(callTime);
        }}
      ></input>

      <ImageUploader/>

      <img src={profileImage} alt=''/>

    </div>

  );
}

export default LandingPage;
