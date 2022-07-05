import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Box, FormControl, LinearProgress, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { SaveOutlined, Done } from "@mui/icons-material";
import Swal from "sweetalert2";

function AllyApplication() {
  // const timer = setInterval(fetchApp, 2000);

  const [showButton, setShowButton] = useState(true);

  const dispatch = useDispatch();

  // const fetchApp = () => {
  //   dispatch({
  //     type: "FETCH_ALLY_APP",
  //   });
  // };

  ////

  useEffect(() => {
    dispatch({
      type: "FETCH_ALLY_APP",
    });
  }, []);

  const history = useHistory();
  ////
  const user = useSelector((store) => store.user);
  ////

  /////////////////////////////////////////////
  //Is the unit finished or not?
  //////////////////////////////////////////////

  const res1 = useSelector((store) => store.allyApp.answer_1);
  const res2 = useSelector((store) => store.allyApp.answer_2);
  const res3 = useSelector((store) => store.allyApp.answer_3);
  const res4 = useSelector((store) => store.allyApp.answer_4);
  const isdone = useSelector((store) => store.allyApp.is_complete);

  //////////////////////////////////////////////
  //Standard Slide Functions
  /////////////////////////////////////////////

  // Use this if the next slide has a conditional next button

  /////////////////////////////////////////////////
  //save and POST to server via dispatch
  /////////////////////////////////////////////////
  const postApp = () => {
    dispatch({
      type: "CREATE_ALLY_APP",
      payload: {
        answer1: res1,
        answer2: res2,
        answer3: res3,
        answer4: res4,
        done: false,
      },
    });
    Swal.fire({
      title: "Application Saved",
    });
  };

  /////////////////////////////////////////////////
  //Submit all and change
  /////////////////////////////////////////////////
  const submitApp = () => {
    dispatch({
      type: "CREATE_ALLY_APP",
      payload: {
        answer1: res1,
        answer2: res2,
        answer3: res3,
        answer4: res4,
        done: true,
      },
    });
    Swal.fire({
      title: "Application Submitted",
    });
    history.push("/home");
  };

  //

  /////////////////////////////////////////////////
  return (
    <div>
      <Box className="boxDefault">
        <Typography align="center" variant="h1" sx={{ mb: 2 }}>
          Apply to be an ally!
        </Typography>

        <Typography sx={{ mb: 1 }} variant="h5" align="center">
          Tell us why you'd like to become an ally!
        </Typography>
        <TextField
          sx={{ mb: 2 }}
          id="outlined-textarea"
          label=""
          placeholder=""
          multiline
          fullWidth
          value={res1}
          onChange={(e) => {
            dispatch({
              type: "EDIT_ANSWER_1",
              payload: e.target.value,
            });
          }}
        />
        <Typography sx={{ mb: 1 }} variant="h5" align="center">
          How did you find out about Allyx?
        </Typography>
        <TextField
          sx={{ mb: 2 }}
          id="outlined-textarea"
          label=""
          placeholder=""
          multiline
          fullWidth
          value={res2}
          onChange={(e) => {
            dispatch({
              type: "EDIT_ANSWER_2",
              payload: e.target.value,
            });
          }}
        />

        <Typography sx={{ mb: 2 }} variant="h5" align="center" color="text.secondary">
          Allyx is fun, but safety is a priority and sometimes requires allies
          to handle challenging conversations with callers.
        </Typography>
        <Typography sx={{ mb: 1 }} variant="h5" align="center">
          In what way(s) have you prepared for, or what experience do you have
          working in areas related to safety or women's safety, if any?
        </Typography>

        <TextField
          sx={{ mb: 2 }}
          id="outlined-textarea"
          label=""
          placeholder=""
          multiline
          fullWidth
          value={res3}
          onChange={(e) => {
            dispatch({
              type: "EDIT_ANSWER_3",
              payload: e.target.value,
            });
          }}
        />

        <Typography sx={{ mb: 1 }} variant="h5" align="center">
          Have you used a safety app or volunteered with a safety app
          previously? <i>(phone line, chat, text line, in-person, etc?)</i>
        </Typography>

        <TextField
          sx={{ mb: 2 }}
          id="outlined-textarea"
          label=""
          placeholder=""
          multiline
          fullWidth
          value={res4}
          onChange={(e) => {
            dispatch({
              type: "EDIT_ANSWER_4",
              payload: e.target.value,
            });
          }}
        />
        <Typography
          align="center"
          color="text.secondary"
          variant="h6"
          sx={{ mb: 1 }}
        >
          <i>
            Please make sure you've linked to at least once social media account
            in your profile. We can't approve this application until you do.
          </i>
        </Typography>
        <Box justifyContent="center" display="flex">
          <Button
            variant="contained"
            size="large"
            sx={{ m: 2 }}
            onClick={postApp}
          >
            <SaveOutlined /> Save Progress
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{ m: 2 }}
            onClick={submitApp}
          >
            <Done /> Submit Application
          </Button>
        </Box>
      </Box>
    </div>
  );
}
export default AllyApplication;
