import { useState } from "react";
import { useDispatch } from 'react-redux';

import { Typography, Rating, TextField, Box, Button } from "@mui/material";
import React from "react";

function GeneralComment() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();

    // sets the comment variable with the content of the textfield
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
      </Box>
   
  );
}

export default GeneralComment;
