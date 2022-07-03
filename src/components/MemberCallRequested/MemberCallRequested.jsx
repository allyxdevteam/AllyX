import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Typography, Rating, TextField, Box, Button } from "@mui/material";

function MemberCallRequested() {
  const history = useHistory();
  const dispatch = useDispatch();

  const requestedCallId = useSelector(
    (store) => store.requestedCalls.requestedCall
  );
  const date = new Date();
  const dateTime = date.toLocaleString();

  function cancelCallMember() {
    console.log("in cancelCallMember");
  }

  function callCompleteMember() {
    console.log("in callCompleteMember");
    dispatch({
      type: "PUT_CALL_ENDED_TIME_MEMBER",
      payload: { requestedCallId, dateTime },
    });

    history.push("/memberReviewCall");
  }

  return (
    <Box className="boxDefault">
        <Box>
      <Typography variant="h4">Your call has been requested!</Typography>

      <Typography variant="h5">You may cancel this call if you wish.</Typography>

      <Typography variant="h5">
        When the call is complete please hit the <strong>Call Complete</strong> button and leave
        a review.
      </Typography>

      <Typography variant="h6">
        Thanks for using Allyx! We hope you're having a great night!
      </Typography>

      <Button onClick={cancelCallMember}>Cancel Call</Button>
      <Button onClick={callCompleteMember}>Call Complete!</Button>
      </Box>
    </Box>
  );
}

export default MemberCallRequested;
