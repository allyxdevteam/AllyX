import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Call, Schedule } from "@mui/icons-material/";
import { Box, Backdrop, SpeedDial, SpeedDialAction } from "@mui/material";

function CallSpeedDial() {

  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const date = new Date();
  const dateTime = date.toLocaleString();
  console.log('this is the time', dateTime);
  console.log(date.toLocaleDateString());

  const [callTime, setCallTime] = useState(dateTime);

  const actions = [
    { icon: <Call />, name: "Call Now", onClick: handleRequestCall },
    { icon: <Schedule />, name: "Schedule Call", onClick: handleScheduleCall },
  ];

  function handleRequestCall() {
    console.log('in handleRequestCall');
    user.id ?
      dispatch({
        type: "POST_REQUESTED_CALL",
        payload: { dateTime, user }
      })

      :
      history.push('/login')

  }

  function handleScheduleCall() {
    console.log('in handleScheduleCall');
    console.log('this is the set date and time:', callTime);

    const newDate = new Date(callTime);
    const chosenTime = newDate.getTime();

    console.log('chosen time',chosenTime);
    console.log('current time',new Date().getTime());


      if(user.id===undefined){history.push('/login')}

      else if(chosenTime >= new Date().getTime( )) {

        dispatch({
          type: "POST_SCHEDULED_CALL",
          payload: { callTime, user }
        })
      }

      else{alert('no!')}
  }

  return (
    <Box sx={{ height: 330, transform: "translateZ(0px)", flexGrow: 1 }}>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<Call />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={action.onClick}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}

export default CallSpeedDial;
