import React from 'react';

import { Box, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <Box className="boxDefault">
      <Typography
        variant="h1"
        gutterBottom
        sx={{ textAlign: 'center' }}
      >
        Team Allyx:
      </Typography>
        <Card 
          sx={{
            display: 'inline-block',
            width: '25%'
        }} >
          <CardHeader
            title="Chris"
            className="card-header"
            sx={{
              textAlign: 'center', 
              backgroundColor: '#ff897a'
            }} />
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
            sx={{
              textAlign: 'center', 
              backgroundColor: '#ff897a' 
            }} >
            <Typography
              variant="h5"
              href="https://www.linkedin.com/in/chris-boyd-1695ba8/"
            >
              linkedin.com/in/chris-boyd-1695ba8/
            </Typography>
          </CardContent>
        </Card>
        <Card 
          sx={{ display: 'inline-block', width: '25%'}}
        >
          <CardHeader
            title="Ian"
            className="card-header"
            sx={{
              textAlign: 'center', 
              backgroundColor: '#ff897a' 
            }} />
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
            sx={{
              textAlign: 'center', 
              backgroundColor: '#ff897a' 
            }} >
            <Typography
              variant="h5"
              href="https://www.linkedin.com/in/ian-larsen-505824154/"
            >
              linkedin.com/in/ian-larsen-505824154/
            </Typography>
          </CardContent>
        </Card>
        <Card 
          sx={{ display: 'inline-block', width: '25%' }}
        >
          <CardHeader
            title="Meir"
            className="card-header"
            sx={{
              textAlign: 'center', 
              backgroundColor: '#ff897a' 
            }} />
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
            sx={{
              textAlign: 'center', 
              backgroundColor: '#ff897a' 
            }} >
            <Typography
              variant="h5"
              href="https://www.linkedin.com/in/meirsedlis/"
            >
              linkedin.com/in/meirsedlis/
            </Typography>
          </CardContent>
        </Card>
        <Card 
          sx={{ display: 'inline-block', width: '25%' }}
        >
          <CardHeader
            title="Joe"
            className="card-header"
            sx={{
              textAlign: 'center', 
              backgroundColor: '#ff897a' 
            }} />
          <CardMedia
            sx={{ display: 'flex', justifyContent: 'center'}}
          >
          <img
            src="/images/Joe.jpeg"
            alt="Joe Anthony-Brown"
            width="100%"
          />
          </CardMedia>
          <CardContent
            sx={{
              textAlign: 'center', 
              backgroundColor: '#ff897a' 
            }} >
          <Typography
              variant="h5"
              href="https://www.linkedin.com/in/joe-anthony-brown/"
            >
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
                  variant="h1"
                  gutterBottom
                >
                  Technologies used:
                </Typography>
                <Typography
                  variant="h4"
                  gutterBottom
                >
                  React
                </Typography>
                <Typography
                  variant="h4"
                  gutterBottom
                >
                  React-Redux
                </Typography>
                <Typography
                  variant="h4"
                  gutterBottom
                >
                  Redux-Saga
                </Typography>
                <Typography
                  variant="h4"
                  gutterBottom
                >
                  Node.js
                </Typography>
                <Typography
                  variant="h4"
                  gutterBottom
                >
                  PostgreSQL
                </Typography>
                <Typography
                  variant="h4"
                  gutterBottom
                >
                  MUI
                </Typography>
                <Typography
                  variant="h4"
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
              variant="h1"
              gutterBottom
            >
              Thank you to:
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
            >
              Alexandra Edmonson
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
            >
              The Dahl Cohort
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
            >
              Matt Black
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
            >
              Prime Digital Academy
            </Typography>
            <Typography
              variant="h4"
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
