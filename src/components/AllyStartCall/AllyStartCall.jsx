//react, redux, sagas------------------------------------------------------
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {Button} from '@mui/material';




function AllyStartCall() {

    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();

    const claimedCallId = useSelector(store => store.claimedCall.claimedCall);
    const claimedCallMember = useSelector(store => store.claimedCall.claimedCallMember);

    const memberId = params.memberId
    const requestedCallId = params.requestedCallId

    const date = new Date();
    const dateTime = date.toLocaleString();

    useEffect(() => {
        dispatch({
            type: 'FETCH_CLAIMED_CALL',
            payload: { claimedCallId, memberId }
        })
    }, []);

    function cancelClaimCall(){
        dispatch({
            type: 'CANCEL_CLAIMED_CALL',
            payload: {requestedCallId, memberId}
        })
        history.push('/home');
    }

    function handleStartCall() {
        dispatch({
            type: 'PUT_CALL_STARTED_TIME',
            payload: {claimedCallId, dateTime}
        })
        history.push(`/allyCallInProgress/${memberId}`)
    }


    return (
        <>
            <img src={claimedCallMember.profile_pic} alt="profile pic"></img>
            <a href={`tel:${claimedCallMember.phone_number}`} onClick={handleStartCall}>Call {claimedCallMember.first_name}</a>
            <Button onClick={cancelClaimCall}>Cancel</Button>

        </>
    )
}



export default AllyStartCall