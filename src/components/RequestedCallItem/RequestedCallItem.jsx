import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import dayjs from 'dayjs';

function RequestedCallItem( {call} ){

    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(store => store.user);
    const memberId = call.member_id;
    const requestedCallId = call.id;


    function handleClaimCall(){
        if(call.open===true){
        dispatch({
            type: 'POST_CLAIMED_CALL',
            payload: {call, user}
        })
        dispatch({
            type: 'FETCH_REQUESTED_CALLS',
        })
        history.push(`/allyStartCall/${memberId}/${requestedCallId}`)
        }
        else{
            alert('this call has already been claimed')
        }
    }

    
    return(
        <li key={call.id}>
        {dayjs(call.time).format('MMMM D hh:mm A')}
        <button onClick={handleClaimCall}>Claim Call</button>
        </li>
    )
    
}

export default RequestedCallItem