//react, redux, sagas------------------------------------------------------
import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Button, Box, Typography } from "@mui/material";
import { Call, Cancel } from "@mui/icons-material";

function AllyStartCall() {
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();

  const claimedCallId = useSelector((store) => store.claimedCall.claimedCall);
  const claimedCallMember = useSelector(
    (store) => store.claimedCall.claimedCallMember
  );

  const memberId = params.memberId;
  const requestedCallId = params.requestedCallId;

  const date = new Date();
  const dateTime = date.toLocaleString();

  useEffect(() => {
    dispatch({
      type: "FETCH_CLAIMED_CALL",
      payload: { claimedCallId, memberId },
    });
  }, []);

  function cancelClaimCall() {
    dispatch({
      type: "CANCEL_CLAIMED_CALL",
      payload: { requestedCallId, memberId },
    });
    history.push("/home");
  }

  function handleStartCall() {
    dispatch({
      type: "PUT_CALL_STARTED_TIME",
      payload: { claimedCallId, dateTime },
    });
    history.push(`/allyCallInProgress/${memberId}`);
  }

  //generic PFP source: ByteDance, Public domain, via Wikimedia Commons

  return (
    <Box className="boxDefault">
      <Typography variant="h2" align="center" sx={[{ pt: "10vh" }, {mb:2}]}>
        You're calling {claimedCallMember.first_name}
      </Typography>
      <Box display='grid' alignItems="center" justifyContent="center" sx={[{ width: "40vw" }, {maxWidth: '300px'}, { m: "auto" }, {mb:2}]}>
        <img
          src={
            claimedCallMember.profile_pic
              ? claimedCallMember.profile_pic
              : "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
          }
          alt="profile picture"
        ></img>
      </Box>

      <Box display="grid" justifyItems="center">
        <Button
          startIcon={<Call />}
          color="primary"
          align="center"
          href={`tel:${claimedCallMember.phone_number}`}
          variant="contained"
          size="large"
          onClick={handleStartCall}
          sx={{ m: 2 }}
        >
          Start Call
        </Button>
        <Button
          startIcon={<Cancel />}
          variant="contained"
          size="large"
          color="error"
          onClick={cancelClaimCall}
          sx={{ m: 2 }}
        >
          Cancel
        </Button>
      </Box>
    </Box>
  );
}

export default AllyStartCall;
