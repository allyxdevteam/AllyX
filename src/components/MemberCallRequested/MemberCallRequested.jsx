import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

import { Typography, Box, Button } from "@mui/material";
import { Cancel, Done } from "@mui/icons-material";

function MemberCallRequested() {
  const history = useHistory();
  const dispatch = useDispatch();

  const newDate = new Date();
  const dateTime = newDate.toLocaleString();

  const requestedCallId = useSelector(
    (store) => store.requestedCalls.requestedCall
  );

  function cancelCallMember() {
  
    dispatch({
      type: "CANCEL_CLAIMED_CALL",
      payload: requestedCallId,
    });
    Swal.fire("We removed your call from the queue. Thanks for using Allyx!");
    history.push("/home");
  }

  function callCompleteMember() {
    console.log("in callCompleteMember");
    Swal.fire({
      title: "Just checking...",
      text: "did you already talk to your ally?",
      icon: "question",
      showConfirmButton: true,
      confirmButtonText: "yes",
      showDenyButton: true,
      denyButtonText: "no",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: "PUT_CALL_ENDED_TIME_MEMBER",
          payload: { requestedCallId, dateTime },
        });

        history.push("/memberReviewCall");
      } else if (result.isDenied) {
        Swal.fire(
          "Phew! Glad we asked. Please click call complete again after you finish your call."
        );
      }
    });
  }

  return (
    <Box className="boxDefault">
      <Typography align="center" variant="h2" sx={[{ m: 2 }, { mt: "15vh" }]}>
        Your call has been requested!
      </Typography>

      <Typography align="center" variant="h4" sx={[{ m: 3 }]}>
        You may cancel this call if you wish.
      </Typography>

      <Typography
        align="center"
        color="text.secondary"
        variant="h4"
        sx={[{ m: 3 }]}
      >
        When the call is complete please hit the <i>Call Complete</i> button and
        leave a review.
      </Typography>

      <Typography align="center" variant="h4" sx={[{ m: 3 }]}>
        Thanks for using Allyx! We hope you're having a great night!
      </Typography>
      <Box display="grid" justifyContent="center">
        <Button
          startIcon={<Done />}
          onClick={callCompleteMember}
          size="large"
          variant="contained"
          sx={{ m: 2 }}
        >
          Call Complete
        </Button>
        <Button
          startIcon={<Cancel />}
          color="error"
          onClick={cancelCallMember}
          size="large"
          variant="contained"
          sx={{ m: 2 }}
        >
          Cancel Call
        </Button>
      </Box>
    </Box>
  );
}

export default MemberCallRequested;
