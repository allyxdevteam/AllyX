//react, redux, sagas------------------------------------------------------
import { useSelector } from 'react-redux';

//styling, mui ----------------------------------------------------------
import './LandingPage.css';
import { Box, Typography, Fade } from '@mui/material'



// CUSTOM COMPONENTS---------------------------------------------------

function LandingPage() {

  //variables that evaluate to something specific----------------------------------
  const user = useSelector((store) => store.user);

  return (
    <Box className="boxDefault">
      <Box sx={[{pt: '25vh'}, {ml: '18vw'}]}>
      <Fade in={true} timeout={2500}><Typography variant="h1">Welcome {user.first_name}</Typography></Fade>
      <Fade in={true} timeout={8000}><Typography variant="h2" color="text.secondary" sx={{ml:8}}>We're so glad you're here.</Typography></Fade>
    </Box>
  

    </Box>

  );
}

export default LandingPage;
