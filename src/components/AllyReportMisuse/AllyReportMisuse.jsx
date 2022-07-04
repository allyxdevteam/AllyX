import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2';

import { Button, Box, TextField, Typography } from "@mui/material";

function AllyReportMisuse() {
  const [misuseComments, setMisuseComments] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const claimedCallId = useSelector((store) => store.claimedCall.claimedCall);
  const claimedCallMember = useSelector(
    (store) => store.claimedCall.claimedCallMember
  );

  return (
    <>
      <Box display="flex" flexDirection="column" className="commentBox">
        <Typography variant="h4" align="center" sx={{ m: 2 }}>
          Please tell us what went wrong.
        </Typography>
        <TextField
          sx={{ m: 2 }}
          placeholder="describe what happened"
          onChange={(e) => {
            setMisuseComments(e.target.value);
          }}
          value={misuseComments}
        />
        <Button
          sx={{ m: 'auto' }}
          color="warning"
          
          variant="contained"
          onClick={() => {
            history.push("/");
            dispatch({
              type: "MARK_MEMBER_REPORTED",
              payload: { claimedCallMember },
            });
            dispatch({
              type: "ALLY_REPORT_MISUSE",
              payload: { claimedCallId, claimedCallMember, misuseComments },
            });
          }}
        >
          Report Problem
        </Button>
      </Box>
    </>
  );
}

export default AllyReportMisuse;
