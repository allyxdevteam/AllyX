import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import {
  DatePicker
} from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

import { Box, FormControl, TextField, Button } from '@mui/material';


function RegisterForm() {



  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState(null);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [response1, setResponse1] = useState('') // Reason for becoming an ally
  const [response2, setResponse2] = useState('') // Twitter
  const [response3, setResponse3] = useState('') // Insta

  useEffect(() => {
    doneCheck()
  }, [email, phone, dob])


  const [emailDone, setEmailDone] = useState(false);
  const [phoneDone, setPhoneDone] = useState(false);
  const [dobDone, setDobDone] = useState(false)



  const errors = useSelector((store) => store.errors);

  const dispatch = useDispatch();



  //
  const doneCheck = () => {

    if (emailDone === true && phoneDone === true && dobDone === true) {
      showNext()
    }
    else {
      hideNext()
    }
  }
  //


  const [X, setX] = useState(1)
  const [showButton, setShowButton] = useState(true)




  //The star of the show
  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        email: email,
        dob: dob,
        phone: phone,
      },
    });




  };



  const showNext = () => {
    setShowButton(true)
  }

  //
  const hideNext = () => {
    setShowButton(false)
  }
  //
  const nextSlide = () => {
    setX(X + 1);
  }


  //VALIDATORS


  //email
  const ValidateEmail = (email) => {


    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.match(mailformat)) {
      setEmailDone(true)
    }
    else {
      setEmailDone(false)
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
    if ((phoneno.test(inputtxt) === true) && (phoneDone === false)) {
      //This allows us to take all spaces,dashes, periods, or dots before converting the result to a number
      let reducedPhone = inputtxt.toString().replace(/-|\s|\.|\(|\)|^$/g, "");


      setPhoneDone(true)
      //Setting phone triggers doneCheck to run in useEffect
      setPhone(Number(reducedPhone))
      return;
    }


    //IF input is desirable(digit, space, hyphen) update setPhone with inputtxt
    else if ((desirable.test(inputtxt) === true) && (phoneDone === false)) {
      setPhone(inputtxt);
      return;
    }

    //Failsafe allows empty string to trigger setPhone
    else if (inputtxt === '') {
      setPhone(inputtxt);
      setPhoneDone(false)
      return;
    }

    // Fixed backspace! You can now backspace FIRST ATTEMPT on a completed input. 
    //But wait, there's more! By adding != I was able to make you add a superfluous digit or symbol after as well. 
    //This is so that users can make seamless mistakes! Making great use of my time! -- Ian 
    else if ((inputtxt.length != phone.toString().length) && (desirable.test(inputtxt) === true)) {
      console.log('Backspace!')
      setPhone(inputtxt);
      setPhoneDone(false)
      return;
    }

    //Anything that has not triggered desirable or undesirable will be ignored and setPhoneDone is set to false. 
    //This causes issues  when backspacing on a completed number. Solution pending UPDATE: SOLUTION FOUND!!! Consult above
    console.log(inputtxt, ':has triggered the setting setPhoneDone to false')

    setPhoneDone(false);


  }


  //DOB 

  const validateDob = (e) => {


    let now = dayjs();

    if (now.diff(e, 'year') > 18) {
      setDob(e);

      setDobDone(true)
    }
    else {
      setDob(e);

      setDobDone(false)
    }
  };


  //
  return (
    <>


      <form className="formPanel" onSubmit={(e) => { registerUser }}>
        <h2>Register User</h2>
        


        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}






        {X === 1 &&

          <div>
            <h1></h1>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date of Birth"
                value={dob}
                inputFormat="MM/DD/YY"
                views={['year', 'month', 'day']}
                required
                onChange={(e) => { validateDob(e) }}
                renderInput={(params) => {
                  return <TextField fullWidth {...params} />;
                }} />
            </LocalizationProvider >


            <div>
              <Box mt={2}>
                <FormControl fullWidth>
                  <TextField
                    id="outlined-textarea"
                    label="email"
                    required
                    placeholder="heyallyx@allyx.com"
                    multiline
                    fullwidth
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); ValidateEmail(e.target.value) }}
                  />
                </FormControl>
              </Box>
            </div>



            <div>

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
                    onChange={(e) => { phonenumber(e.target.value) }}
                  />
                </FormControl>
              </Box>

            </div>


            <div>

              <Button disabled={!showButton} onClick={nextSlide}>Next</Button>
            </div>

            



          </div>

        }




        {X === 2 &&
          <div>

<div className="card-graphics">

<div className="card-top">
  <h4> Social Media (optional) </h4>
</div>

<div className="card-body">


  {/* Twitter Username */}
  <Box mt={2}>
    <FormControl fullWidth>
      <TextField
        id="outlined-textarea"
        label="Twitter URL"

        placeholder="e.x. @HeyAllyxApp"
        multiline
        fullwidth
        color={(response2.length > 0) ? null : "warning"}
        value={response2}
        onChange={(e) => {
          setResponse2(e.target.value);
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
        color={(response3.length > 0) ? null : "warning"}
        value={response3}
        onChange={(e) => {
          setResponse3(e.target.value);
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
        color={(response3.length > 0) ? null : "warning"}
        value={response3}
        onChange={(e) => {
          setResponse3(e.target.value);
        }}
      />

    </FormControl>
  </Box>

</div>

</div>

            <div>
              <label htmlFor="username">
                Username:
                <input
                  type="username"
                  name="username"
                  value={username}
                  required
                  onChange={(event) => setUsername(event.target.value)}
                />
              </label>
            </div>

            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={password}
                required
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>



            <div>
              <input className="btn" type="submit" name="submit" value="Register" />
            </div>


          </div>
        }


      </form>
    </>
  )
}

export default RegisterForm;
