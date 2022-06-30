import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {Button, Typography} from '@mui/material';


function MemberCallRequested(){

    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();

    const user = useSelector((store) => store.user)

    const date = new Date();
    const dateTime = date.toLocaleString();

    function cancelCallRequest(){
            console.log('in cancel call request');
    }

    function handleCompleteCall(){
        dispatch({
            type: 'PUT_CALL_ENDED_TIME_MEMBER',
            payload: {user, dateTime}
        })
        history.push('/memberReviewCall');
    }


    return(
        <>
        <Typography>Your call has been requested, you should be receiving a call soon, 
            or close to whenever it was scheduled. You may cancel this request if you wish.
            When your call is complete please press the Call Complete button below.
            Don't forget to leave a review after your call! Thanks for using Allyx!</Typography>
        <Button onClick={cancelCallRequest}>Cancel Request</Button>
        <Button onClick={handleCompleteCall}>Call Complete</Button>

        </>
    )
}

export default MemberCallRequested