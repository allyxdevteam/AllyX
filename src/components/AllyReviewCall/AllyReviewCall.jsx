import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { Typography, Rating, TextField, Box, Button } from "@mui/material";

function AllyReviewCall() {
    useEffect(() => {
        dispatch({
            type: 'FETCH_ONE_CALL',
            payload: { callId, user }
        })
    }, []);

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const dispatch = useDispatch();
    const callId = useSelector(store => store.claimedCall);
    const user = useSelector(store => store.user);

    const handleComment = (e) => {
      setComment(e.target.value);
    };
  
    const handleSubmit = (e) => {
      dispatch({
          type: 'ADD_GEN_COMMENT',
          payload: { rating, comment }
      })
      setRating(0);
      setComment('');
    };

    return (
    
    <Box sx={[{maxWidth: '35vw'},{m:'auto'}]}>
        <Typography>How was your call with {ally.first_name}?</Typography>
        <Typography component="legend">Rating</Typography>
        <Rating
            type="rating"
            name="general-rating"
            value={rating}
            onChange={(event, newRating) => {
                setRating(newRating);
            }}
        />
        <Typography component="legend">Comment</Typography>
        <TextField 
            type="comment"
            name="general-comment"
            value={comment}
            fullWidth 
            multiline 
            maxRows={4} 
            onChange={handleComment}
        />
        <Button variant="contained" sx={{m:1}} onClick={handleSubmit}>Submit</Button>
        <Button
            variant="contained"
            sx={{m:1}}
            onClick={() => {
                history.push(`/allyReportAbuse`);
            }}
        >
            Report Abuse
        </Button>
    </Box>
    )
}

export default AllyReviewCall;