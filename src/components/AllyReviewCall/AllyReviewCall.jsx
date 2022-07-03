import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Typography, Rating, TextField, Box, Button } from "@mui/material";
import ReportIcon from "@mui/icons-material/Report";

function AllyReviewCall() {
  useEffect(() => {
    dispatch({
      type: "FETCH_ONE_CALL",
      payload: { callId, user },
    });
  }, []);

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const callId = useSelector((store) => store.claimedCall.claimedCall);
  const user = useSelector((store) => store.user);
  const memberFirstName = useSelector(
    (store) => store.claimedCall.oneCallReducer.first_name
  );
  const memberId = useSelector(
    (store) => store.claimedCall.oneCallReducer.member_id
  );
  const oneCallReducer = useSelector(
    (store) => store.claimedCall.oneCallReducer
  );

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
        dispatch({
            type: 'ALLY_CALL_RATING',
            payload: {
            user,
            memberId,
            callId,
            rating,
            comment
            }
        })
        console.log('this is the oneCallReducer', oneCallReducer);
      setRating(0);
      setComment('');
      history.push('/');
    };

  return (
    <Box className="boxDefault" >
      <Box className="commentBox">
        <Typography variant="h4">
          How was your call with {memberFirstName}?
        </Typography>
        <Typography variant="h5" component="legend">
          Rating
        </Typography>
        <Rating
          type="rating"
          name="call-rating"
          value={rating}
          sx={{
            fontSize: "2rem",
          }}
          onChange={(event, newRating) => {
            setRating(newRating);
          }}
        />
        <Typography variant="h5" component="legend">
          Comment
        </Typography>
        <TextField
          type="comment"
          name="ally-review-comment"
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
            history.push(`/allyReportMisuse`);
          }}
        >
          Report Misuse
        </Button>
      </Box>
    </Box>
  );

}

export default AllyReviewCall;
