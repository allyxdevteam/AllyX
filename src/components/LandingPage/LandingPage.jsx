//react, redux, sagas------------------------------------------------------
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//styling, mui ----------------------------------------------------------
import './LandingPage.css';
import { Box, Typography, Fade } from '@mui/material'


// CUSTOM COMPONENTS---------------------------------------------------
import ImageUploader from '../ImageUploader/ImageUploader';
import ConditionalAllyButton from './Components/ConditionalAllyButton';


function LandingPage() {

  //variables that are react functions---------------------------------
  const history = useHistory();
  const dispatch = useDispatch();

  //variables that evaluate to something specific----------------------------------
  const profileImage = useSelector((store) => store.profileImage)
  const user = useSelector((store) => store.user);


  //local state---------------------------------------------------------

  //other functions-----------------------------------------------------------
  

  return (
    <Box className="boxDefault">
      <Box sx={[{mt: '25vh'}, {ml: '18vw'}]}>
      <Fade in={true} timeout={2500}><Typography variant="h1">Welcome {user.first_name}</Typography></Fade>
      <Fade in={true} timeout={8000}><Typography variant="h2" color="text.secondary" sx={{ml:8}}>We're so glad you're here.</Typography></Fade> 
      </Box>

    </Box>

  );
}

export default LandingPage;
