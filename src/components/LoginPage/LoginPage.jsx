import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

import {Typography, Button, Box, Fade, Card} from '@mui/material';

function LoginPage() {
  const history = useHistory();

  return (
    <Box className="boxDefault">
      <Box sx={{pt:'10vh'}}>
      <LoginForm />

      <Box display="grid" justifyContent="center">
        <Button
        variant="outlined"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Register
        </Button>
      </Box>
      <Fade in="true" timeout={30000}>
      <Typography align='center' color="text.secondary" sx={{pt:4}}>If something seems wrong, send us an email at hey @heyallyx.com and we'll help you fix it.</Typography>
      </Fade>
      </Box>
    </Box >
  );
}

export default LoginPage;
