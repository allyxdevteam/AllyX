import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Call, Schedule } from "@mui/icons-material/";
import {
  Box,
  Backdrop,
  SpeedDial,
  SpeedDialAction,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Tooltip
} from "@mui/material";

function CallSpeedDial() {
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  // speed dial config
  const [openSpeedDial, setOpenSpeedDial] = useState(false);
  const handleOpenSpeedDial = () => setOpenSpeedDial(true);
  const handleCloseSpeedDial = () => setOpenSpeedDial(false);

  const actions = [
    { icon: <Call />, name: "Now", onClick: handleRequestCall },
    { icon: <Schedule />, name: "Later", onClick: openScheduleDialog },
  ];

  // dialog config
  const [open, setOpen] = useState(false);
  const handleCloseDialog = () => setOpen(false);
  
  const date = new Date();
  const dateTime = date.toLocaleString();
  console.log("this is the time", dateTime);
  console.log(date.toLocaleDateString());

  const [callTime, setCallTime] = useState(dateTime);


  function handleRequestCall() {
    console.log("in handleRequestCall");
    user.id
      ? dispatch({
          type: "POST_REQUESTED_CALL",
          payload: { dateTime, user },
        })
      : history.push("/login");
  }

  function handleScheduleCall() {
    console.log("in handleScheduleCall");
    console.log("this is the set date and time:", callTime);

    const newDate = new Date(callTime);
    const chosenTime = newDate.getTime();

    console.log("chosen time", chosenTime);
    console.log("current time", new Date().getTime());

    if (chosenTime >= new Date().getTime()) {
      dispatch({
        type: "POST_SCHEDULED_CALL",
        payload: { callTime, user },
      });
    } else {
      alert("no!");
    }
    setOpen(false);
  }

  // checks if a user is logged in
  // if not, redirects to log in, if so opens schedule dialog
  function openScheduleDialog() {
    if (user.id === undefined) {
      history.push("/login");
    } else setOpen(true);
  }

  return (
    <Box sx={{ height: 330, transform: "translateZ(0px)", flexGrow: 1 }}>
      <Backdrop open={openSpeedDial} />
      <Tooltip title="Call Me" placement="top">
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<Call />}
        onClose={handleCloseSpeedDial}
        onOpen={handleOpenSpeedDial}
        open={openSpeedDial}
      >
        {actions.map((action) => (
          <SpeedDialAction
            ariaLabel={action.name}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={action.onClick}
          />
        ))}
      </SpeedDial>
      </Tooltip>
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>Select a time you'd like to be called</DialogTitle>
        <DialogContent>
          <Box>
          <input
            ariaLabel="Date time selection for scheduled call"
            type="datetime-local"
            onChange={(e) => {
              setCallTime(e.target.value);
              console.log(callTime);
            }}
          ></input>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button ariaLabel="schedule" onClick={handleScheduleCall}>Schedule</Button>
          <Button ariaLabel="cancel"onClick={handleCloseDialog}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default CallSpeedDial;
