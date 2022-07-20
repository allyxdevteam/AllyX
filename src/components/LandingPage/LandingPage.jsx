//react, redux, sagas------------------------------------------------------
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';



//styling, mui ----------------------------------------------------------
import './LandingPage.css';
import { Box, Typography, Fade, Button } from '@mui/material'



// CUSTOM COMPONENTS---------------------------------------------------

function LandingPage() {
  const history = useHistory();

  //variables that evaluate to something specific----------------------------------
  const user = useSelector((store) => store.user);


  return (
    <Box className="boxDefault">
      <Box sx={[{pt: '25vh'}, {ml: '18vw'}]}>
        <Fade in={true} timeout={2500}><Typography variant="h1">Welcome {user.first_name}</Typography></Fade>
        <Fade in={true} timeout={6000}><Typography variant="h2" color="text.secondary" sx={{ml:8}}>We're so glad you're here.</Typography></Fade> 
      </Box>
      
      { !user.id && (
        <Box display="grid" justifyContent="center">
          <Fade in={true} timeout={10000}>
            <Button sx={{ m: 3 }} variant="contained" size="medium" onClick={() => {history.push('/login')}}>
              Login / Register
            </Button>
          </Fade> 
        </Box>
      )}

    </Box>

  );
}

export default LandingPage;
