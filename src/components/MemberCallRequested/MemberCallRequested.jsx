import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Typography, Box, Button } from "@mui/material";
import { Cancel, Done } from "@mui/icons-material";

function MemberCallRequested() {
  const history = useHistory();
  const dispatch = useDispatch();

  const requestedCallId = useSelector(
    (store) => store.requestedCalls.requestedCall
  );

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
        
      <Typography variant="h2"sx={{m:3}}>Your call has been requested!</Typography>

      <Typography variant="h4" color="text.secondary" sx={[{m:3}, {ml:8}]}>You may cancel this call if you wish.</Typography>

      <Typography variant="h4" sx={[{m:3}, {ml:8}]}>
        When the call is complete please hit the <strong>Call Complete</strong> button and leave
        a review.
      </Typography>

      <Typography variant="h4" color="text.secondary" sx={[{m:3}, {ml:8}]}>
        Thanks for using Allyx! We hope you're having a great night!
      </Typography>
      <Box sx={[{ml:'40vw'}]}>
      <Button startIcon={<Cancel />} color="error" onClick={cancelCallMember} variant="contained" sx={{m:1}}>Cancel Call</Button>
      <Button startIcon={<Done />} onClick={callCompleteMember} variant="contained" sx={{m:1}}>Call Complete</Button>
      </Box>
    </Box>
  );
}

export default MemberCallRequested;
