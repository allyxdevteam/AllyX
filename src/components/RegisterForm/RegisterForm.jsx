import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import {
  DatePicker
} from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';

function RegisterForm() {



  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState(new Date());

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

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
  ///


  const [X, setX] = useState(1)
  const [showButton, setShowButton] = useState(true)

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
  }; // end registerUser
  const showNext = () => {
    setShowButton(false)
  }

  const hideNext = () => {
    setShowButton(true)
  }
  //
  const nextSlide = () => {
    setX(X + 1);
  }







  //

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




  //NUMBER
  const phonenumber = (inputtxt) => {


    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})\d/;
    let desirable = /\d|\s|\-$/;
    let undesirable = /\W$/

    //IF the inputtext is a recognized  phone number we'll set the phone number as it and change phoneDone to true
    if (phoneno.test(inputtxt) === true) {

      console.log('WE ARE SENDING THIS AS OUR NUMBER', )
      let reducedPhone = inputtxt.toString().replace(/-|\s|\.|\^$/g, "");

      setPhone(Number(reducedPhone))
      setPhoneDone(true)
      return;
    }
    //IF input is desirable(digit, space, hyphen) update setPhone with inputtxt
    else if ((desirable.test(inputtxt)=== true ) ) {
      console.log('Input is desirable')
      setPhone(inputtxt);      
    }
    else if (undesirable.test(inputtxt) === true){
      alert('undesirable')
    }
    // Allows empty string to trigger setPhone
    else if(inputtxt === ''){
      setPhone(inputtxt);
      setPhoneDone(false)
    }
    
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
            <h1>Date of Birth</h1>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={dob}

                inputFormat="MM/YY"
                views={['year', 'month',]}

                onChange={(e) => { validateDob(e) }}
                renderInput={(params) => {
                  return <TextField {...params} />;
                }} />



            </LocalizationProvider >




            <div>
              <h1> email </h1>
            </div>

            <div>
              <input value={email} onChange={(e) => { setEmail(e.target.value); ValidateEmail(e.target.value) }}></input>
            </div>




            <div>
              <h1>phone number </h1>
            </div>

            <div>
              <input value={phone} onChange={(e) => { phonenumber(e.target.value) }}></input>
            </div>


            <div>
              <button disabled={showButton} onClick={nextSlide}>Next</button>
            </div>


          </div>

        }


        {X === 2 &&
          <div>
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


        {X === 3

        }

      </form>
    </>
  )
}

export default RegisterForm;
