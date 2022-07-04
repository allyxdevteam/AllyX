import {
  Logout,
  Phone,
  Assessment,
  AccountCircle,
  ContactPhone,
  Info,
  Home,
  AssignmentTurnedIn,
  Feedback,
  MenuIcon
} from "@mui/icons-material";

import {
  BottomNavigation,
  BottomNavigationAction,
  Badge,
  Menu,
  MenuItem
} from "@mui/material";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CallSpeedDial from "./CallSpeedDial";

function bottomNav() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "FETCH_REQUESTED_CALLS",
    });
  }, []);

  const user = useSelector((store) => store.user);
  const requestedCalls = useSelector(
    (store) => store.requestedCalls.requestedCalls
  );

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <>
      <BottomNavigation
        fullWidth="true"
        sx={[
          { position: "absolute", bottom: 0, left: 0, right: 0 },
          { maxHeight: "25vh" },
        ]}
        showLabels="true"
      >
        <BottomNavigationAction
          label="Logout"
          icon={<Logout />}
          onClick={handleLogout}
        />

        <BottomNavigationAction
          label="Home"
          icon={<Home />}
          onClick={() => history.push("/home")}
        />

        <BottomNavigationAction
          label="About"
          icon={<Info />}
          onClick={() => history.push("/about")}
        />

        <BottomNavigationAction
          label="Feedback"
          icon={<Feedback />}
          onClick={() => history.push("/comment")}
        />

        <BottomNavigationAction
          label="Profile"
          icon={<AccountCircle />}
          onClick={() => history.push("/profile")}
        />

        {user.is_admin && (
          <BottomNavigationAction
            label="Admin Dashboard"
            icon={<Assessment />}
            onClick={() => history.push("/admin")}
          />
        )}

        {user.is_ally ? (
          <BottomNavigationAction
            label="Requested Calls"
            icon={
              <Badge
                badgeContent={requestedCalls.length}
                color="primary"
                label="Requested Calls"
              >
                <ContactPhone />
              </Badge>
            }
            onClick={() => history.push("/allyRequestedCalls")}
          />
        ) : (
          <BottomNavigationAction
            label="Apply to be an Ally"
            icon={<AssignmentTurnedIn />}
            onClick={console.log("yay")}
          />
        )}

        <BottomNavigationAction
          sx={[{ mr: 2 }, { ml: 2 }]}
          label=""
          //INSERT SPEED DIAL COMP HERE AS AN ICON
          icon={<CallSpeedDial />}
        />
      </BottomNavigation>
    </>
  );
}

export default bottomNav;
