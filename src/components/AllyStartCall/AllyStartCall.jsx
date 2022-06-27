//react, redux, sagas------------------------------------------------------
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';





function AllyStartCall(){

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({
            type: 'FETCH_CLAIMED_CALL',
        })
    }, []);

    function handleStartCall(){

    }
   

    return(
        <>
        <button onClick={handleStartCall}>Start Call</button>
        <a href="tel:6123109601">Call Me!</a>
        </>
    )
}



export default AllyStartCall