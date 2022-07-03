import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <Box className="commentBox">
      <Typography align="center" variant="h2">Login</Typography>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <Box display="grid" justifyContent="center">
        <label htmlFor="username">
          <TextField
            type="text"
            label="username"
            name="username"
            required
            value={username}
            sx={{m:2}}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>

        <label htmlFor="password">
          <TextField
            type="password"
            name="password"
            label="password"
            
            required
            sx={{m:2}}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>

        <Button sx={{m:2}} variant="contained" size="large" onClick={login}>Submit</Button>
      </Box>
    </Box>
  );
}

export default LoginForm;
