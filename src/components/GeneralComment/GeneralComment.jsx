import { useState } from "react";

import { Typography, Rating, TextField, Box } from "@mui/material";
import React from "react";

function GeneralComment() {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");


  const handleComment = (e) => {
    setComment(e.target.value);
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
        fullWidth 
        multiline 
        maxRows={4} 
        onChange={handleComment} 
      />
      </Box>
   
  );
}

export default GeneralComment;
