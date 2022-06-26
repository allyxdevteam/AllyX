import React from 'react';

import Typography from '@mui/material/Typography';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <Typography variant="h5" gutterBottom>
        Allyx is built with the love and support of our volunteer Allies.
        While the work they do is invaluable, they are not emergency responders.
        If you find yourself in crisis, here are some resources you can reach out to:
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
      >
        National Sexual Assault Hotline (RAINN)
      </Typography>
      <Typography
        variant="subtitle2"
        gutterBottom
      >
        Website: <a href="https://www.rainn.org">rainn.org</a>
      </Typography>
      <Typography
        variant="subtitle2"
        gutterBottom
      >
        Phone: <a href="tel:8006564673">1-800-656-HOPE</a>
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
      >
        National Suicide Prevention Lifeline
      </Typography>
      <Typography
        variant="subtitle2"
        gutterBottom
      >
        Website: <a href="http://www.suicidepreventionlifeline.org">suicidepreventionlifeline.org</a>
      </Typography>
      <Typography
        variant="subtitle2"
        gutterBottom
      >
        Phone: <a href="tel:">1-800-273-8255</a>
      </Typography>
      
    </div>
  );
}

export default InfoPage;
