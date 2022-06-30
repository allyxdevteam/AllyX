import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {Button, Typography} from '@mui/material';


function AllyCallInProgress(){

    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();

    const claimedCallId = useSelector(store => store.claimedCall.claimedCall);
    const claimedCallMember = useSelector(store => store.claimedCall.claimedCallMember);

    const memberId = params.memberId

    const date = new Date();
    const dateTime = date.toLocaleString();

    function handleCompleteCall(){
        dispatch({
            type: 'PUT_CALL_ENDED_TIME_ALLY',
            payload: {claimedCallId, dateTime}
        })
        history.push('/allyReviewCall');
    }


    return(
        <>
        <Typography>Call in progress!</Typography>
        <Button onClick={handleCompleteCall}>Call Complete</Button>
        </>
    )
}

export default AllyCallInProgress