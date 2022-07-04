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
  Menu as MenuIcon,
} from "@mui/icons-material";

import {
  BottomNavigation,
  BottomNavigationAction,
  Badge,
  Menu,
  MenuItem,
  ListItemIcon,
  Box
} from "@mui/material";

import { useEffect, useState } from "react";
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

  //configure menu--------------------------------
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //----------------------------------------------

  return (
    <>
      <BottomNavigation
        fullWidth="true"
        sx={[
          { position: "sticky", bottom: 0, left: 0, right: 0 },
          {zIndex: 100},
          { maxHeight: "25vh" },
          { bgcolor: "#ffc9c9" },
        ]}
        showLabels="true"
      >
        <BottomNavigationAction
          label="Menu"
          icon={<MenuIcon />}
          onClick={handleClick}
          aria-controls={open ? "menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        />
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          transformOrigin={{ horizontal: "left", vertical: "bottom" }}
          anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        >
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            Log Out
          </MenuItem>

          <MenuItem onClick={() => history.push("/about")}>
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            About
          </MenuItem>

          <MenuItem onClick={() => history.push("/comment")}>
            <ListItemIcon>
              <Feedback />
            </ListItemIcon>
            Feedback
          </MenuItem>

          <MenuItem onClick={() => history.push("/profile")}>
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            Profile
          </MenuItem>
        </Menu>


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

        {user.is_admin && (
          <BottomNavigationAction
            label="Admin Dashboard"
            icon={<Assessment />}
            onClick={() => history.push("/admin")}
          />
        )}

<BottomNavigationAction
  icon={<CallSpeedDial />}
/>

      </BottomNavigation>
    </>
  );
}

export default bottomNav;
