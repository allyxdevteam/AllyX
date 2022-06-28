//react, redux, sagas------------------------------------------------------
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';





function AllyStartCall(){

    const dispatch = useDispatch();
    const params = useParams();

    const claimedCallId = useSelector(store => store.claimedCall.claimedCall);
    const claimedCallMember = useSelector(store => store.claimedCall.claimedCallMember);

    const memberId = params.memberId

    useEffect(()=>{
        dispatch({
            type: 'FETCH_CLAIMED_CALL',
            payload: {claimedCallId, memberId}
        })
    }, []);

    function handleStartCall(){
        console.log('this is the claimed call member info:', claimedCallMember);
    }
   

    return(
        <>
        <img src={claimedCallMember.profile_pic} alt="profile pic"></img>
        <a href={`tel:${claimedCallMember.phone_number}`} onClick={handleStartCall}>Call {claimedCallMember.first_name}</a>
        </>
    )
}



export default AllyStartCall