import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import dayjs from 'dayjs';
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button,
  Typography,
  Avatar,
  Card,
} from "@mui/material/";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

function RequestedCallItem({ call }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((store) => store.user);
  const memberId = call.member_id;
  const requestedCallId = call.id;
  const [picture, setPicture] = useState(null);


  useEffect(() => grabProfilePic(), []);

  function grabProfilePic() {
    if (call.profile_pic) {
      setPicture(call.profile_pic);
    }
  }

  function handleClaimCall() {
    if (call.open === true) {
      dispatch({
        type: "POST_CLAIMED_CALL",
        payload: { call, user },
      });
      dispatch({
        type: "FETCH_REQUESTED_CALLS",
      });
      history.push(`/allyStartCall/${memberId}/${requestedCallId}`);
    } else {
      alert("this call has already been claimed");
    }
  }

  const formattedTime = dayjs.utc(call.time).local().format('hh:mm A on dddd, MMMM D');

  console.log("picture", picture);

  return (
    <Card sx={{m:2}}>
    <ListItem key={call.id}>
      <ListItemAvatar>
        <Avatar aria-label="requester avatar" srcSet={picture} />
      </ListItemAvatar>
      <ListItemText
        primary={<Typography aria-label="requester first name" variant="h4">{call.first_name}</Typography>}
        secondary={<Typography color="text.secondary" variant="h6">wants a call at {formattedTime}</Typography>}
      />
      <Button variant="contained" aria-label="claim call button" onClick={handleClaimCall} startIcon={<AddIcCallIcon />}>Claim Call</Button>
    </ListItem>
    </Card>
  );
}

export default RequestedCallItem;
