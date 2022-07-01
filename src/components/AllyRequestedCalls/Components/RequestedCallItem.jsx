import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button,
  Typography,
  Avatar,
  Divider,
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

  console.log("picture", picture);

  return (
    <ListItem key={call.id}>
      <ListItemAvatar>
        <Avatar ariaLabel="requester avatar" srcSet={picture} />
      </ListItemAvatar>
      <ListItemText
        primary={<Typography ariaLabel="requester first name" variant="h6">{call.first_name}</Typography>}
        secondary={<Typography>wants a call at {call.time}</Typography>}
      />
      <Button variant="outlined" ariaLabel="claim call button" onClick={handleClaimCall} startIcon={<AddIcCallIcon />}>Claim Call</Button>
    </ListItem>
  );
}

export default RequestedCallItem;
