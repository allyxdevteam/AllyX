import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import { Button, Box, TextField, Typography } from "@mui/material";

function AllyReportProblem() {
  const [problemComments, setProblemComments] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const claimedCallId = useSelector((store) => store.claimedCall.claimedCall);
  const claimedCallMember = useSelector(
    (store) => store.claimedCall.claimedCallMember
  );

  return (
   
      <Box display="flex" flexDirection="column" className="commentBox">
        <Typography variant="h4" align="center" sx={{ m: 2 }}>
          Please tell us what went wrong.
        </Typography>
        <TextField
          sx={{ m: 2 }}
          placeholder="describe what happened"
          onChange={(e) => {
            setProblemComments(e.target.value);
          }}
          value={problemComments}
        />
        <Button
          sx={{ m: "auto" }}
          color="warning"
          variant="contained"
          onClick={() => {
            dispatch({
              type: "MARK_MEMBER_REPORTED",
              payload: { claimedCallMember },
            });
            dispatch({
              type: "ALLY_REPORT_PROBLEM",
              payload: { claimedCallId, claimedCallMember, problemComments },
            });
            Swal.fire(
              "We have logged your report and will take action on it. If necessary, someone will follow up with you. Thank you for being an ally and taking the time to share your experience."
            );
            history.push("/");
          }}
        >
          Report Problem
        </Button>
      </Box>
   
  );
}

export default AllyReportProblem;
