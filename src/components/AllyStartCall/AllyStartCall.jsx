//react, redux, sagas------------------------------------------------------
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';





function AllyStartCall(){

    const dispatch = useDispatch();
    const params = useParams();

    const claimedCallId = useSelector(store => store.claimedCall);
    const memberId = params.memberId

    useEffect(()=>{
        dispatch({
            type: 'FETCH_CLAIMED_CALL',
            payload: {claimedCallId, memberId}
        })
    }, []);

    function handleStartCall(){
        console.log('this is the call id:', claimedCallId);
        console.log('this is member id:', memberId);
    }
   

    return(
        <>
        <button onClick={handleStartCall}>Start Call</button>
        <a href="tel:6123109601">Call Me!</a>
        </>
    )
}



export default AllyStartCall