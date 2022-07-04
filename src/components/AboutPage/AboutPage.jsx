import React from 'react';

import './AboutPage.css';
import { Box, Typography } from '@mui/material';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <Box className="boxDefault">
      <Typography>
        Team Allyx:
      </Typography>
      <Box
        display="inline-block"
      >
        <Box>
          <img
            src="/images/Chris.jpg"
            alt="Chris Boyd"
            width="20%"
          />
          <Typography>
            Chris
          </Typography>
          <Typography>
            https://www.linkedin.com/in/chris-boyd-1695ba8/
          </Typography>
        </Box>
        <Box
          display="inline-block"
        >
          <img
            src="/images/Ian.jpg"
            alt="Ian Larsen"
            width="20%"
          />
          <Typography>
            Ian
          </Typography>
        </Box>
        <Typography>
          https://www.linkedin.com/in/ian-larsen-505824154/
        </Typography>
        <Box
          display="inline-block"
        >
            <img
            src="/images/Meir.jpg"
            alt="Meir Sedlis"
            width="112.195px"
            height="74.805px"
        />
        <Typography>
          Meir
        </Typography>
        <Typography>
          https://www.linkedin.com/in/meirsedlis/
        </Typography>
        </Box>
        <Box
          display="inline-block"
        >
            <img
              src="/images/Joe.jpeg"
              alt="Joe Anthony-Brown"
              width="112.195px"
              height="74.805px"
            />
        <Typography>
          Joe
        </Typography>
        <Typography>
          https://www.linkedin.com/in/joe-anthony-brown/
        </Typography>
        </Box>
    </Box>
      <div>
      <Typography
        variant="h4"
        gutterBottom
      >
        Technologies used:
      </Typography>
      <Typography
        variant="subtitle2"
        gutterBottom
      >
        React
      </Typography>
      <Typography
        variant="subtitle2"
        gutterBottom
      >
        React-Redux
      </Typography>
      <Typography
        variant="subtitle2"
        gutterBottom
      >
        Redux-Saga
      </Typography>
      <Typography
        variant="subtitle2"
        gutterBottom
      >
        Node.js
      </Typography>
      <Typography
        variant="subtitle2"
        gutterBottom
      >
        PostgreSQL
      </Typography>
      <Typography
        variant="subtitle2"
        gutterBottom
      >
        MUI
      </Typography>
      <Typography
        variant="subtitle2"
        gutterBottom
      >
        Cloudinary
      </Typography>
      </div>
      <Typography
        variant="h4"
        gutterBottom
      >
        Thank you to:
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
      >
        Alexandra Edmonson
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
      >
        The Dahl Cohort
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
      >
        Matt Black
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
      >
        Prime Digital Academy
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
      >
        Friends and family
      </Typography>
    </Box>
  );
}

export default AboutPage;
