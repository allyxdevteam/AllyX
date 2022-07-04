import ArrowL from "./ArrowL.png";
import ArrowR from "./ArrowR.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Box, FormControl, LinearProgress, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { SaveOutlined } from "@mui/icons-material";
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
      <Box className='boxDefault'>
        <Typography variant="h1">Apply to become an ally! </Typography>

        <Typography variant="h4">
          Please have a valid social media account registered and be prepared to
          answer four short prompts{" "}
        </Typography>
        <Box>
          <Button onClick={postApp}>
            <SaveOutlined /> Save Progress
          </Button>
        </Box>
        {/* TODO: Link to FAQ/About Page */}
        <h3>Tell us why you'd like to become an ally!</h3>
        <TextField
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
        <h3>How did you find out about Allyx?</h3>
        <TextField
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
        <Box fullWidth sx={{ display: "flex" }}>
          <h5>
            Allyx is fun, but safety is a priority and sometimes requires allies
            to handle challenging conversations with callers. In what way(s)
            have you prepared for, or what experience do you have working in
            areas related to safety or women's safety, if any?
          </h5>
        </Box>
        {/* This is the middle */}
        <TextField
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
        {/* This is where our controls (back+next) are */}
        <Box fullWidth sx={{ display: "flex" }}>
          <h5>
            Have you used a safety app or volunteered with a safety app
            previously? (phone line, chat, text line, in-person, etc?)
          </h5>
        </Box>
        {/* This is the middle */}
        <TextField
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
        {/* This is where our controls (back+next) are */}
        <Button onClick={submitApp}>Submit Application</Button>
      </Box>
    </div>
  );
}
export default AllyApplication;
