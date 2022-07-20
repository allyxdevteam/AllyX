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

import Swal from 'sweetalert2';

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

  // Local state that will store a user's "schedule ahead"
  // time string:
  const [callTime, setCallTime] = useState('');


  function handleRequestCall() {
    console.log("in handleRequestCall");
    user.id
      ? dispatch({
          type: "POST_REQUESTED_CALL",
          payload: { user },
        }, history.push("/memberRequestedCall"))
      : history.push("/login");
  }

  function handleScheduleCall() {
    // Create a Date object from the user's chosen call time.
    // This Date object is timezone-aware, based on the timezone
    // of the user's device.
    const newDate = new Date(callTime);
      // console.log(newDate) spits out something like:
      // Mon Aug 15 2022 06: 40: 00 GMT - 0500(Central Daylight Time)
      // Note that this 👆 is timezone-aware.

    // Convert the timezone-aware Date object into a string
    // representation of the UTC datetime:
    const newDateInUTC = newDate.toISOString();
      // console.log(newDateInUTC) spits out something like:
      // 2022-08-15T11:40:00.000Z
      // Note that the "Z" at the end of this string is a shorthand for
      // noting that this is a UTC timestamp.

    if (newDate >= new Date()) {
      Swal.fire('Your call has been scheduled');
      dispatch({
        type: "POST_SCHEDULED_CALL",
        payload: { newDateInUTC, user },
      });
    } else {
      Swal.fire('You cannot schedule calls for the past');
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
            aria-label="Date time selection for scheduled call"
            type="datetime-local"
            onChange={(e) => {
              console.log('callTime will become:', e.target.value)
              setCallTime(e.target.value);
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
