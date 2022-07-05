import React from "react";

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <Box className="boxDefault">
      <Typography variant="h2" gutterBottom sx={{ textAlign: "center" }}>
        Team Allyx:
      </Typography>
      <Box  display='flex' justifyContent = 'space-around'>
      <Card
        sx={{
          display: "inline-block",
          width: "12%",
          maxHeight: "37vh",
          margin: 2,
        }}
      >
        <CardHeader
          title="Chris"
          className="card-header"
          sx={{
            textAlign: "center",
            backgroundColor: "#ff897a",
            padding: 1
          }}
        />
        <CardMedia sx={{ display: "flex", justifyContent: "center" }}>
          <img src="/images/Chris.jpg" alt="Chris Boyd" width="100%" />
        </CardMedia>
        <CardContent
          sx={{
            textAlign: "center",
            backgroundColor: "#ff897a",
          }}
        >
          <Typography sx={{wordWrap: 'break-word'}}
            variant='h6'
            href="http://www.linkedin.com/in/chris-t-boyd"
          >
            linkedin.com/in/chris-t-boyd
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          display: "inline-block",
          width: "12%",
          maxHeight: "37vh",
          margin: 2,
        }}
      >
        <CardHeader
          title="Ian"
          className="card-header"
          sx={{
            textAlign: "center",
            backgroundColor: "#ff897a",
            padding: 1
          }}
        />
        <CardMedia sx={{ display: "flex", justifyContent: "center" }}>
          <img src="/images/Ian.jpg" alt="Ian Larsen" width="100%" />
        </CardMedia>
        <CardContent
          sx={{
            textAlign: "center",
            backgroundColor: "#ff897a",
          }}
        >
          <Typography sx={{wordWrap: 'break-word'}}
            variant='h6'
            href="https://www.linkedin.com/in/ian-larsen1337/"
          >
            linkedin.com/in/ian-larsen1337/
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          display: "inline-block",
          width: "12%",
          maxHeight: "37vh",
          margin: 2,
        }}
      >
        <CardHeader
          title="Meir"
          className="card-header"
          sx={{
            textAlign: "center",
            backgroundColor: "#ff897a",
            padding: 1
          }}
        />
        <CardMedia sx={{ display: "flex", justifyContent: "center" }}>
          <img src="/images/Meir.jpg" alt="Meir Sedlis" width="100%" />
        </CardMedia>
        <CardContent
          sx={{
            textAlign: "center",
            backgroundColor: "#ff897a",
          }}
        >
          <Typography sx={{wordWrap: 'break-word'}}
            variant='h6'
            href="https://www.linkedin.com/in/meirsedlis/"
          >
            linkedin.com/in/meirsedlis/
          </Typography>
        </CardContent>
      </Card>
      <Card
        sx={{
          display: "inline-block",
          width: "12%",
          maxHeight: "37vh",
          margin: 2,
        }}
      >
        <CardHeader
          title="Joe"
          className="card-header"
          sx={{
            textAlign: "center",
            backgroundColor: "#ff897a",
            padding: 1
          }}
        />
        <CardMedia sx={{ display: "flex", justifyContent: "center" }}>
          <img src="/images/Joe.jpeg" alt="Joe Anthony-Brown" width="100%" />
        </CardMedia>
        <CardContent
          sx={{
            textAlign: "center",
            backgroundColor: "#ff897a",
          }}
        >
          <Typography sx={{wordWrap: 'break-word'}}
            variant='h6'
            href="https://www.linkedin.com/in/joe-anthony-brown/"
          >
            linkedin.com/in/joe-anthony-brown/
          </Typography>
        </CardContent>
      </Card>
      </Box>
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          mt: "16px",
        }}
      >
        <Grid item spacing={3}>
          <Box textAlign="center">
            <Typography variant="h3" gutterBottom>
              Technologies used:
            </Typography>
            <Typography variant="h6" gutterBottom>
              React
            </Typography>
            <Typography variant="h6" gutterBottom>
              React-Redux
            </Typography>
            <Typography variant="h6" gutterBottom>
              Redux-Saga
            </Typography>
            <Typography variant="h6" gutterBottom>
              Node.js
            </Typography>
            <Typography variant="h6" gutterBottom>
              PostgreSQL
            </Typography>
            <Typography variant="h6" gutterBottom>
              MUI
            </Typography>
            <Typography variant="h6" gutterBottom>
              Cloudinary
            </Typography>
          </Box>
        </Grid>
        <Grid item spacing={6}>
          <Box textAlign="center">
            <Typography variant="h3" gutterBottom>
              Thank you to:
            </Typography>
            <Typography variant="h6" gutterBottom>
              Alexandra Edmonson
            </Typography>
            <Typography variant="h6" gutterBottom>
              The Dahl Cohort
            </Typography>
            <Typography variant="h6" gutterBottom>
              Matt Black
            </Typography>
            <Typography variant="h6" gutterBottom>
              Prime Digital Academy
            </Typography>
            <Typography variant="h6" gutterBottom>
              Friends and family
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutPage;
