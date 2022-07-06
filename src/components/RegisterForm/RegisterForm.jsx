import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import Swal from "sweetalert2";
import {
  Box,
  FormControl,
  TextField,
  Button,
  Typography,
  Grid,
  Container,
} from "@mui/material";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState(null);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [emailDone, setEmailDone] = useState("");
  const [phoneDone, setPhoneDone] = useState("");
  const [dobDone, setDobDone] = useState("");
  const [firstNameDone, setFirstNameDone] = useState("");

  //PLEASE KEEP THIS UNDER THE STATES IT IS WATCHING
  useEffect(() => {
    doneCheck();
  }, [email, phone, dob]);
  const errors = useSelector((store) => store.errors);

  const dispatch = useDispatch();

  //Run on update of email, phone, and DOB
  const doneCheck = () => {
    if (
      emailDone === true &&
      phoneDone === true &&
      dobDone === true &&
      firstNameDone === true
    ) {
      return true;
    } else {
      return false;
    }
  };

  //Register user
  const registerUser = (event) => {
    event.preventDefault();
    if (doneCheck() === true) {
      dispatch({
        type: "REGISTER",
        payload: {
          username: username,
          password: password,
          email: email,
          dob: dob,
          phone: phone,
          firstname: firstName,
          lastname: lastName,
          instagram: instagram,
          twitter: twitter,
          facebook: facebook,
        },
      });
    } else {
      Swal.fire({
        title: "Registration Error",
        html:
          `Please insert the following required fields:` +
          ` ${emailDone != true ? "<b>Email</b>" : ""}` +
          ` ${phoneDone != true ? "<b>Phone</b>" : ""}` +
          ` ${dobDone != true ? "<b>Birthday</b>" : ""}` +
          ` ${firstNameDone != true ? "<b>First Name</b>" : ""}`,
      });
    }
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
      setPhone(inputtxt);
      setPhoneDone(false);
      return;
    }

    //Anything that has not triggered desirable or undesirable will be ignored and setPhoneDone is set to false.
    //This causes issues  when backspacing on a completed number. Solution pending UPDATE: SOLUTION FOUND!!! Consult above
    console.log(inputtxt, ":has triggered the setting setPhoneDone to false");

    setPhoneDone(false);
  };

  const handleNameChange = (e) => {
    setFirstName(e);
    if (e <= 2) {
      setFirstNameDone(false);
    } else {
      setFirstNameDone(true);
    }
  };

  //VALIDATE DOB

  const validateDob = (e) => {
    let now = dayjs();
    if (now.diff(e, "year") >= 18) {
      setDob(e);
      setDobDone(true);
    } else {
      setDob(e);
      setDobDone(false);
    }
  };

  return (
    <Container className="boxDefault">
      <Typography variant="h1" align="center" sx={{ p: 2 }}>
        Registration
      </Typography>
      <Grid
        container
        rowSpacing={2}
        columns={{ xs: 12 }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}
        <Grid item display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ m: 1 }}>
          <Typography align="center" variant="h5">
            Name
          </Typography>
          <FormControl>
            <TextField
              InputProps={{ sx: [{ fontSize: "1.5rem" }, { margin: 1 }] }}
              InputLabelProps={{ style: { fontSize: "1.5rem" } }}
              id="outlined-textarea"
              label="First Name"
              required
              error={firstNameDone === false}
              helperText={
                firstNameDone === false && "Please enter your first name"
              }
              value={firstName}
              onChange={(e) => {
                handleNameChange(e.target.value);
              }}
            />
          </FormControl>

          <FormControl>
            <TextField
              InputProps={{ sx: [{ fontSize: "1.5rem" }, { margin: 1 }] }}
              InputLabelProps={{ style: { fontSize: "1.5rem" } }}
              id="outlined-textarea"
              label="Last Name"
              type="lastname"
              name="lastname"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </FormControl>
        </Grid>
        <Grid item display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ m: 1 }}>
          <Typography align="center" variant="h5">
            About You
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              InputProps={{ sx: [{ fontSize: "1.5rem" }, { margin: 1 }] }}
              InputLabelProps={{ style: { fontSize: "1.5rem" } }}
              label="Birthday"
              value={dob}
              inputFormat="MM/DD/YYYY"
              views={["year", "month", "day"]}
              required
              onChange={(e) => {
                validateDob(e);
              }}
              renderInput={(params) => {
                return (
                  <TextField
                    InputProps={{ sx: [{ fontSize: "1.5rem" }, { margin: 1 }] }}
                    InputLabelProps={{ style: { fontSize: "1.5rem" } }}
                    {...params}
                    required
                    error={dobDone === false}
                  />
                );
              }}
            />
          </LocalizationProvider>
          <FormControl>
            <TextField
              InputProps={{ sx: [{ fontSize: "1.5rem" }, { margin: 1 }] }}
              InputLabelProps={{ style: { fontSize: "1.5rem" } }}
              autoComplete="on"
              id="outlined-textarea"
              label="Email"
              required
              placeholder="heyallyx@allyx.com"
              value={email}
              onChange={(e) => {
                ValidateEmail(e.target.value);
              }}
              error={emailDone === false}
            />
          </FormControl>
          <FormControl>
            <TextField
              InputProps={{ sx: [{ fontSize: "1.5rem" }, { margin: 1 }] }}
              InputLabelProps={{ style: { fontSize: "1.5rem" } }}
              id="outlined-textarea"
              label="Phone Number"
              placeholder="(905)123-5678"
              error={phoneDone === false}
              required
              value={phone}
              onChange={(e) => {
                phonenumber(e.target.value);
              }}
            />
          </FormControl>
        </Grid>

        <Grid item display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ m: 1 }}>
          <Typography align="center" variant="h5">
            Login Info
          </Typography>

          <FormControl>
            <TextField
              InputProps={{ sx: [{ fontSize: "1.5rem" }, { margin: 1 }] }}
              InputLabelProps={{ style: { fontSize: "1.5rem" } }}
              required
              id="outlined-textarea"
              label="Username"
              placeholder=""
              type="username"
              name="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </FormControl>
          <FormControl>
            <TextField
              InputProps={{ sx: [{ fontSize: "1.5rem" }, { margin: 1 }] }}
              InputLabelProps={{ style: { fontSize: "1.5rem" } }}
              required
              id="outlined-textarea"
              label="Password"
              placeholder=""
              type="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        onClick={registerUser}
        sx={{ m: "auto", display: "flex" }}
      >
        register
      </Button>
    </Container>
  );
}

export default RegisterForm;
