import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Typography, Rating, TextField, Box, Button } from "@mui/material";
import ReportIcon from "@mui/icons-material/Report";

function MemberReviewCall() {
  //need to change this dispatch, it will not work at all, make a new saga...
  useEffect(() => {
    dispatch({
      type: "FETCH_ONE_CALL_MEMBER",
      payload: requestedCallId,
    });
  }, []);

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const requestedCallId = useSelector(
    (store) => store.requestedCalls.requestedCall
  );

  const completedCall = useSelector(
    (store) => store.claimedCall.oneCallReducerMember
  );
  const allyFirstName = completedCall.first_name;
  const allyId = completedCall.ally_id;

  console.log("this is the completed call info:", completedCall);

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    dispatch({
      type: "MEMBER_CALL_RATING",
      payload: {
        user,
        allyId,
        requestedCallId,
        rating,
        comment,
      },
    });
    history.push("/");
    setRating(0);
    setComment("");
  };

  return (
    <Box className="boxDefault">
      <Box className="commentBox">
        <Typography variant="h4">
          How was your call with {allyFirstName}?
        </Typography>
        <Typography variant="h5" component="legend">Rating</Typography>
        <Rating
          type="rating"
          name="call-rating"
          sx={{
            fontSize: "2rem",
          }}
          value={rating}
          onChange={(event, newRating) => {
            setRating(newRating);
          }}
        />
        <Typography variant="h5" component="legend">Comment</Typography>
        <TextField
          type="comment"
          name="call-comment"
          value={comment}
          fullWidth
          multiline
          maxRows={4}
          onChange={handleComment}
        />
        <Button
          size="large"
          variant="contained"
          sx={{ m: 2 }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Button
          size="large"
          variant="contained"
          startIcon={<ReportIcon />}
          color="warning"
          sx={{ m: 2 }}
          onClick={() => {
            history.push("/memberReportMisuse");
          }}
        >
          Report Misuse
        </Button>
      </Box>
    </Box>
  );
}

export default MemberReviewCall;
