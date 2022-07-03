import { useState } from "react";
import { useDispatch } from "react-redux";

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
      type: "ADD_GEN_COMMENT",
      payload: { rating, comment },
    });
    setRating(0);
    setComment("");
    Swal.fire(
      "Thank you! We take your feedback seriously. You are the best part of Allyx."
    );
    history.push("/");
  };

  return (
    <Box className="boxDefault">
      <Box sx={[{ pt: "5vh" }, { width: "80vw" }, { m: "auto" }]}>
        <Typography align="center" variant="h2">
          Use this form to give us feedback on your experience with Allyx, or
          send us ideas for what you'd like to see from us in the future.
        </Typography>

        <Typography align="center" variant="h4" color="text.secondary">
          If you'd like to make a media inquiry or want to be sure you hear
          back from us as soon as possible, send an email to hey @
          heyallyx.com.
        </Typography>
      </Box>
      <Box
        sx={[
          { m: "auto" },
          { mt: 2 },
          { maxWidth: "600px" },
          { width: "80vw" },
        ]}
      >
        <Typography variant="h5" component="legend">
          Rating
        </Typography>
        <Rating
          type="rating"
          name="general-rating"
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
          name="general-comment"
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
      </Box>
    </Box>
  );
}

export default GeneralComment;
