import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import DisableAccount from "../DisableAccount/DisableAccount";
import AllyApplicationStatus from "../AllyApplicationStatus/AllyApplicationStatus";
import ImageUploader from "./ImageUploader/ImageUploader";

import dayjs from "dayjs";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import { Box, Button, Typography } from "@mui/material";

import swal from "sweetalert";

function Profile() {
  useEffect(() => {
    dispatch({
      type: "FETCH_ALLY_APPLICATION",
      payload: user.id,
    });
  }, []);

  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const formattedDate = dayjs(user.dob).format("MM/DD/YYYY");

  return (
    <Box
      className="boxDefault"
      display="flex"
      flexDirection="column"
      justifyItems="center"
      sx={[{ pb: "10vh" }, { m: "auto" }]}
    >
      <Box
        display="grid"
        alignItems="center"
        justifyContent="center"
        sx={[
          { width: "40vw" },
          { maxWidth: "300px" },
          { m: "auto" },
          { mb: 2 },
        ]}
      >
        <img
          src={
            user.profile_pic
              ? user.profile_pic
              : "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
          }
          alt="profile picture"
        ></img>
      </Box>

      <Typography variant="h5" align="center">{user.first_name}</Typography>
      <Typography variant="h5" align="center">{user.last_name}</Typography>
      <Typography variant="h5" align="center">{user.username}</Typography>
      <Typography variant="h5" align="center">{user.average_stars}</Typography>
      <Typography variant="h5" align="center">{user.phone_number}</Typography>
      <Typography variant="h5" align="center">{user.email}</Typography>
      <Typography variant="h5" align="center">Birthday: {formattedDate}</Typography>

      <Box
      display="grid"
      alignItems="center"
      justifyContent="center"
      sx={[
        { width: "35vw" },
        { m: "auto" },
      ]}>
      <Button
        variant="outlined"
        sx={[{maxWidth: '35vw'}, { m: 1 }]}
        onClick={() => {
          history.push(`/profile/${user.id}`);
        }}
      >
        Update Profile
      </Button>

      <AllyApplicationStatus />

      
      <Button
        color="warning"
        variant="contained"
        sx={[ {maxWidth: '35vw'}, { m: 1 }]}
        onClick={() => {
          swal({
            title: "Are you sure?",
            text: "You cannot recover your account, once deleted.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then((deleteRequested) => {
            if (deleteRequested) {
              swal({
                text: "You have requested your account be deleted. A member of admin will be in contact.",
                icon: "success",
              });
              dispatch({
                type: "REQUEST_DELETE",
                payload: user.id,
              });
            }
          });
        }}
      >
        Request Delete
      </Button>
      </Box>
      {/* <DisableAccount /> */}
    </Box>
  );
}

export default Profile;
