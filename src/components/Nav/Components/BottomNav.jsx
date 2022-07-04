import { Logout, Phone } from "@mui/icons-material";
import {
  BottomNavigation,
  BottomNavigationAction,
  Avatar,
} from "@mui/material";

import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CallSpeedDial from "./CallSpeedDial";

function bottomNav() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const handleProfileClick = () => {
    history.push("/profile");
  };
  return (
    <>
      <BottomNavigation
        sx={[
          { position: "absolute", bottom: 0, left: 0, right: 0 },
          { maxHeight: "20vh" },
        ]}
        showLabels='true'
      >
    
          <BottomNavigationAction
            label="Logout"
            icon={<Logout />}
            onClick={handleLogout}
          />


        <BottomNavigationAction
          label=""
          //INSERT SPEED DIAL COMP HERE AS AN ICON
          icon={<CallSpeedDial />}
        />

        
          <BottomNavigationAction
            label=""
            icon={<Avatar />}
            onClick={handleProfileClick}
          />

          {}

      </BottomNavigation>
    </>
  );
}

export default bottomNav;
