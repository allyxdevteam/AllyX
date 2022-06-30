import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { Typography, Rating, TextField, Box, Button } from "@mui/material";

function MemberReviewCall() {
    // useEffect(() => {
    //     dispatch({
    //         type: 'FETCH_ONE_CALL',
    //         payload: callId
    //     })
    // }, [])

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const dispatch = useDispatch();
    const member = useSelector(store => store.claimedCallMember);

    const handleComment = (e) => {
      setComment(e.target.value);
    };
  
    const handleSubmit = (e) => {
      dispatch({
          type: 'ADD_CALL_RATING',
          payload: { member, rating, comment }
      })
      setRating(0);
      setComment('');
    };

    return (
    
    <Box sx={[{maxWidth: '35vw'},{m:'auto'}]}>
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
                history.push(`/memberReportAbuse`);
            }}
        >
            Report Abuse
        </Button>
    </Box>
    )
}

export default MemberReviewCall;