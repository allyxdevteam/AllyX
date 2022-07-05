import React from 'react';

import './AboutPage.css';
import { Box, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <Box className="boxDefault">
      <Typography
        variant="h4"
        gutterBottom
        sx={{ textAlign: 'center' }}
      >
        Team Allyx:
      </Typography>
        <Card 
          sx={{ display: 'inline-block', width: '25%' }} >
          <CardHeader
            title="Chris"
            sx={{ textAlign: 'center' }} />
          <CardMedia
            sx={{ display: 'flex', justifyContent: 'center'}}
          >
          <img
            src="/images/Chris.jpg"
            alt="Chris Boyd"
            width="100%"
          />
          </CardMedia>
          <CardContent
            sx={{ textAlign: 'center' }}
          >
            <a href="https://www.linkedin.com/in/chris-boyd-1695ba8/">
              linkedin.com/in/chris-boyd-1695ba8/
            </a>
          </CardContent>
        </Card>
        <Card 
          sx={{ display: 'inline-block', width: '25%'}}
        >
          <CardHeader
            title="Ian"
            sx={{ textAlign: 'center' }}
          />
          <CardMedia
            sx={{ display: 'flex', justifyContent: 'center'}}
          >
            <img
              src="/images/Ian.jpg"
              alt="Ian Larsen"
              width="100%"
            />
          </CardMedia>
          <CardContent
            sx={{ textAlign: 'center' }}
          >
            <Typography href="https://www.linkedin.com/in/ian-larsen-505824154/">
              linkedin.com/in/ian-larsen-505824154/
            </Typography>
          </CardContent>
        </Card>
        <Card 
          sx={{ display: 'inline-block', width: '25%' }}
        >
          <CardHeader
            title="Meir"
            sx={{ textAlign: 'center' }}
          />
          <CardMedia
            sx={{ display: 'flex', justifyContent: 'center'}}
          >
            <img
              src="/images/Meir.jpg"
              alt="Meir Sedlis"
              width="100%"
            />
          </CardMedia>
          <CardContent
            sx={{ textAlign: 'center' }}
          >
            <Typography href="https://www.linkedin.com/in/meirsedlis/">
              linkedin.com/in/meirsedlis/
            </Typography>
          </CardContent>
        </Card>
        <Card 
          sx={{ display: 'inline-block', width: '25%' }}
        >
          <CardHeader
            title="Joe"
            sx={{ textAlign: 'center' }}
          />
          <CardMedia
            sx={{ display: 'flex', justifyContent: 'center'}}
          >
          <img
            src="/images/Joe.jpeg"
            alt="Joe Anthony-Brown"
            width="100%"
          />
          </CardMedia>
          <CardContent sx={{ textAlign: 'center' }} >
            <Typography href="https://www.linkedin.com/in/joe-anthony-brown/">
              linkedin.com/in/joe-anthony-brown/
            </Typography>
          </CardContent>
        </Card>
          <Grid
            container
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              mt: '16px'
          }} >
            <Grid item spacing={6}>
              <Box
                textAlign="center"
              >
                <Typography
                  variant="h5"
                  gutterBottom
                >
                  Technologies used:
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                >
                  React
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                >
                  React-Redux
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                >
                  Redux-Saga
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                >
                  Node.js
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                >
                  PostgreSQL
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                >
                  MUI
                </Typography>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                >
                  Cloudinary
                </Typography>
            </Box>
          </Grid>
          <Grid item spacing={6}>
            <Box
              textAlign="center"
            >
            <Typography
              variant="h5"
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
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutPage;
