import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { Typography, Rating, TextField, Box, Button } from "@mui/material";


function MemberCallRequested(){

    function cancelCallMember(){
        console.log('in cancelCallMember');
    }

    function callCompleteMember(){
        console.log('in callCompleteMember');

    }

    return(
        <>
        <Typography>Your call has been requested! You may cancel this call if you wish.
            When the call is complete please hit the Call Complete button and leave a review.
            Thanks for using Allyx! We hope you're having a great night!
        </Typography>

        <Button onClick={cancelCallMember}>Cancel Call</Button>
        <Button onClick={callCompleteMember}>Call Complete!</Button>

        </>
    )
}


export default MemberCallRequested;