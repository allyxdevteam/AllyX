//react, redux, sagas------------------------------------------------------
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';





function AllyStartCall(){

    function handleStartCall(){
        
    }
   

    return(
        <>
        <button onClick={handleStartCall}>Start Call</button>
        <a href="tel:9178812930">Call Me!</a>
        </>
    )
}



export default AllyStartCall