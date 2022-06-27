import React from 'react';

import './AboutPage.css';
import Typography from '@mui/material/Typography';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container" id="about-page">
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
        CSS Bootstrap
      </Typography>
      <Typography
        variant="subtitle2"
        gutterBottom
      >
        MUI
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
    </div>
  );
}

export default AboutPage;
