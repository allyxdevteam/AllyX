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

    return(
        <ul>
            <li>call</li>
        </ul>
    )
}


export default AllyRequestedCalls