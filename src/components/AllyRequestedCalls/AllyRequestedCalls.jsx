import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import RequestedCallItem from '../RequestedCallItem/RequestedCallItem';

function AllyRequestedCalls(){

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({
            type: 'FETCH_REQUESTED_CALLS',
        })
    }, []);

    const requestedCalls = useSelector(store => store.requestedCalls);
    const user = useSelector(store => store.user);


    

    return(
        <ul>
            {requestedCalls.map((call) => {
                
               return(
               
                <RequestedCallItem key={call.id} call={call} />
                
                )
               
            })}
        </ul>
    )
}


export default AllyRequestedCalls