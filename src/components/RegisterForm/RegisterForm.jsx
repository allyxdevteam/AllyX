import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import {
  DatePicker
} from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import { red } from '@mui/material/colors';

function RegisterForm() {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(0);
  const [dob, setDob] = useState(new Date());
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');


  const errors = useSelector((store) => store.errors);

  const dispatch = useDispatch();

  //


  const doneCheck = () => {
    if (ValidateEmail(email) === true && phonenumber(phone.value) === true && validateDob(dob) === true) {
      console.log('Hello this is good! We have everything done correctly!')
      return true
    }
    else return false;
  }

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
  const ValidateEmail = (inputText) => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
      showNext()
      return true
    }
    else {
      hideNext()
      return false;
    }
  };

//number
  const phonenumber = (inputtxt) => {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (inputtxt.match(phoneno)) {
      let reducedPhone = inputtxt.replace(/-|\s/g, "")

      console.log(`you did it!!!!`, Number(reducedPhone))
      setPhone(Number(reducedPhone))
      return true;
    }
    else {
      setPhone(inputtxt)
      return false;
    }
  }
//
  const validateDob = (e) => {
    doneCheck()
    let now = dayjs();
 
    if (now.diff(e, 'year') > 18) {
      setDob(e);
      return true;
    }
    else {
      setDob(e);

      return false;
    }
  };

  //
  return (
    <>


      <form className="formPanel" onSubmit={(e) => { registerUser(e) }}>
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

                onChange={(e)=>{validateDob(e)}}
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





              <div>
                <button disabled={showButton} onClick={nextSlide}>Next</button>
              </div>


            </div>
            <div>
              <h1>phone number </h1>
            </div>

            <div>
              <input value={phone} onChange={(e) => { phonenumber(e.target.value) }}></input>
            </div>

            <div>





              <div>
                <button disabled={showButton} onClick={nextSlide}>Next</button>
              </div>


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
