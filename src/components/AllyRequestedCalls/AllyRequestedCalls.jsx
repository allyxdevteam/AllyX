import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function AllyRequestedCalls(){

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({
            type: 'FETCH_REQUESTED_CALLS',
        })
    }, []);

    const requestedCalls = useSelector(store => store.requestedCalls)


    function handleClaimCall(){
        console.log('in claim call');
    }

    return(
        <ul>
            {requestedCalls.map((call) => {
               return(<li key={call.id}>
                {call.time}
               <button onClick={handleClaimCall}>Claim Call</button>
               </li>)
            })}
        </ul>
    )
}


export default AllyRequestedCalls