import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";

import { Box, FormControl, TextField, Button, Typography } from "@mui/material";

function RegisterForm() {


  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [response1, setResponse1] = useState(""); //
  const [response2, setResponse2] = useState(""); // Twitter
  const [response3, setResponse3] = useState(""); // Insta

  const [emailDone, setEmailDone] = useState('');
  const [phoneDone, setPhoneDone] = useState('');
  const [dobDone, setDobDone] = useState('');


  //PLEASE KEEP THIS UNDER THE STATES IT IS WATCHING
  useEffect(() => {
    doneCheck();
  }, [email, phone, dob]);
  const errors = useSelector((store) => store.errors);

  const dispatch = useDispatch();

  //Run on update of email, phone, and DOB
  const doneCheck = () => {
    console.log('In donecheck')
    if (emailDone === true && phoneDone === true && dobDone === true) {
      showNext();
      console.log('Done!')
    } else {
      console.log('Not Done :(')
      hideNext();
    }
  };
  // Slide controls
  const [X, setX] = useState(1);
  const [showButton, setShowButton] = useState(true);
  //Register user
  const registerUser = (event) => {
    event.preventDefault();
    console.log("hey its the register button");

    dispatch({
      type: "REGISTER",
      payload: {
        username: username,
        password: password,
        email: email,
        dob: dob,
        phone: phone,
      },
    });
  };
  //
  const showNext = () => {
    setShowButton(true);
  };
  //
  const hideNext = () => {
    setShowButton(false);
  };
  //
  const nextSlide = () => {
    setX(X + 1);
  };

  //VALIDATE EMAIL
  const ValidateEmail = (email) => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.match(mailformat)) {
      setEmail(email);

      setEmailDone(true);
    } else {
      setEmail(email);

      setEmailDone(false);
    }
  };

  //

  //VALIDATE PHONE NUMBER
  const phonenumber = (inputtxt) => {
    //phoneno filters to make sure that inputtxt beings with 3 digits 0-9 (parenthesis optional), optional dash/space, then 3 digits 0-9, optional dash/space, and finally
    //4 digits 0-9
    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    //Desirable is defined as as digit, space, slash, or parenthesis.
    let desirable = /[\d|\s|\-|\(|\)]$/;

    //IF the inputtext is a recognized  phone number we'll set the phone number as it and change phoneDone to true
    if (phoneno.test(inputtxt) === true && phoneDone === false) {
      //This allows us to take all spaces,dashes, periods, or dots before converting the result to a number
      let reducedPhone = inputtxt.toString().replace(/-|\s|\.|\(|\)|^$/g, "");

      setPhoneDone(true);
      //Setting phone triggers doneCheck to run in useEffect
      setPhone(Number(reducedPhone));
      return;
    }
    //IF input is desirable(digit, space, hyphen) update setPhone with inputtxt
    else if (desirable.test(inputtxt) === true && phoneDone === false) {
      setPhone(inputtxt);
      return;
    }

    //Failsafe allows empty string to trigger setPhone
    else if (inputtxt === "") {
      setPhone(inputtxt);
      setPhoneDone(false);
      return;
    }
    // Fixed backspace! You can now backspace FIRST ATTEMPT on a completed input.
    //But wait, there's more! By adding != I was able to make you add a superfluous digit or symbol after as well.
    //This is so that users can make seamless mistakes! Making great use of my time! -- Ian
    else if (
      inputtxt.length != phone.toString().length &&
      desirable.test(inputtxt) === true
    ) {
      console.log("Backspace!");
      setPhone(inputtxt);
      setPhoneDone(false);
      return;
    }

    //Anything that has not triggered desirable or undesirable will be ignored and setPhoneDone is set to false.
    //This causes issues  when backspacing on a completed number. Solution pending UPDATE: SOLUTION FOUND!!! Consult above
    console.log(inputtxt, ":has triggered the setting setPhoneDone to false");

    setPhoneDone(false);
  };

  //VALIDATE

  const validateDob = (e) => {
    let now = dayjs();
    if (now.diff(e, "year") > 18) {
      setDob(e);
      setDobDone(true);
    } else {
      setDob(e);
      setDobDone(false);
    }
  };
  //
  return (
    <>
      <h1>Registration</h1>

      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}

      {X === 1 && (
        <>
          <Typography>Information (required)</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              error={!emailDone}
              label="Date of Birth"
              value={dob}
              inputFormat="MM/DD/YY"
              views={["year", "month", "day"]}
              required
              onChange={(e) => {
                validateDob(e);
              }}
              renderInput={(params) => {
                return <TextField fullWidth {...params} />;
              }}
            />
          </LocalizationProvider>

          <Box mt={2}>
            <FormControl fullWidth>
              <TextField
                autoComplete="on"
                id="outlined-textarea"
                label="email"
                helperText={!emailDone && "please enter a valid email" }
                required
                placeholder="heyallyx@allyx.com"
                multiline
                fullwidth
                value={email}
                onChange={(e) => {
                  ValidateEmail(e.target.value);
                }}
                error={(emailDone === false)}
                errorText="please insert valid email"
              />
            </FormControl>
          </Box>

          <Box mt={2}>
            <FormControl fullWidth>
              <TextField
                id="outlined-textarea"
                label="Phone"
                placeholder="(905)123-5678"
                required
                multiline
                fullwidth
                value={phone}
                onChange={(e) => {
                  phonenumber(e.target.value);
                }}
              />
            </FormControl>
          </Box>

         
        </>
      )}

      {/* Name Information */}
      {X === 1 && (
        <>
          <Typography>Name (required)</Typography>

          <Box mt={2}>
            <FormControl fullWidth>
              <TextField
                id="outlined-textarea"
                label="First Name (Required)"
                required
                fullwidth
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </FormControl>
          </Box>

          <Box mt={2}>
            <FormControl fullWidth>
              <TextField
                id="outlined-textarea"
                label="Last Name (optional)"
                multiline
                fullwidth
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </FormControl>
          </Box>

          <Typography>Social Media (optional)</Typography>

          {/* Twitter Username */}

          <Box mt={2}>
            <FormControl fullWidth>
              <TextField
                id="outlined-textarea"
                label="Twitter URL"
                placeholder=""
                multiline
                fullwidth
                color={response1.length > 0 ? null : "warning"}
                value={response1}
                onChange={(e) => {
                  setResponse(e.target.value);
                }}
              />
            </FormControl>
          </Box>

          {/* Instagram Username */}
          <Box mt={2}>
            <FormControl fullWidth>
              <TextField
                id="outlined-textarea"
                label="Instagram URL"
                placeholder="e.x. @HeyAllyxApp"
                multiline
                fullwidth
                color={response2.length > 0 ? null : "warning"}
                value={response2}
                onChange={(e) => {
                  setResponse2(e.target.value);
                }}
              />
            </FormControl>
          </Box>

          {/* Facebook Account */}
          <Box mt={2}>
            <FormControl fullWidth>
              <TextField
                id="outlined-textarea"
                label="Facebook URL"
                placeholder="e.x. aklsdjsadjaslkdja.com"
                multiline
                fullwidth
                color={response3.length > 0 ? null : "warning"}
                value={response3}
                onChange={(e) => {
                  setResponse3(e.target.value);
                }}
              />
            </FormControl>
          </Box>

          <Button disabled={!showButton} onClick={nextSlide}>
            Next
          </Button>
        </>
      )}

      {X === 1 && (
        <>
          <input
            type="username"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />

          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />

          <Button onClick={registerUser}>register</Button>
        </>
      )}
    </>
  );
}

export default RegisterForm;
