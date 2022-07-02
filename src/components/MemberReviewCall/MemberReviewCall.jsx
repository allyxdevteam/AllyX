import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { Typography, Rating, TextField, Box, Button } from "@mui/material";

function MemberReviewCall() {
    //need to change this dispatch, it will not work at all, make a new saga...
    useEffect(() => {
        dispatch({
            type: 'FETCH_ONE_CALL_MEMBER',
            payload: requestedCallId
        })
    }, []);

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const dispatch = useDispatch();

    const user = useSelector(store => store.user);
    const requestedCallId = useSelector(store => store.requestedCalls.requestedCall);

    const completedCall = useSelector(store => store.claimedCall.oneCallReducerMember);
    const allyFirstName = completedCall.first_name;
    const allyId = completedCall.ally_id;


    console.log('this is the completed call info:',completedCall);


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
        <Box sx={[{height: '80vh'},{width: '98vw'}, {margin: 'auto'}]}>
            <h1>member review page</h1>
            <Typography>How was your call with {allyFirstName}?</Typography>
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
                        dispatch({
                            type: 'ADD_CALL_RATING',
                            payload: {
                            user,
                            memberId,
                            callId,
                            rating,
                            comment
                            }
                        })
                        history.push(`/memberReportMisuse`);
                    }}
                >
                    Report Misuse
                </Button>
        </Box>
    )
}

export default MemberReviewCall;