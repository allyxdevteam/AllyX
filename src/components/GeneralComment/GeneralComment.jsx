import { Typography, Rating } from "@mui/material";

function GeneralComment() {
  return;
  <>
    <Typography component="legend">Rating</Typography>
    <Rating
      name="simple-controlled"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  </>;
}

export default GeneralComment;
