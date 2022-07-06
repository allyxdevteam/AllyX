import React from "react";

import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
  CardActionArea,
} from "@mui/material";


function AboutPage() {
  return (
    <Box className="boxDefault">
      <Typography variant="h2" gutterBottom align='center'>
        Development Team:
      </Typography>
      <Box display="flex" justifyContent="space-around">
        <Card
          sx={{
            display: "inline-block",
            width: "12%",
            maxHeight: "37vh",
            margin: 2,
            backgroundColor: "#ff897a",
          }}
        >
          <CardActionArea href="http://www.linkedin.com/in/chris-t-boyd">
            <CardHeader
              title="Chris"
              className="card-header"
              sx={{
                textAlign: "center",
                backgroundColor: "#ff897a",
                padding: 1,
              }}
            />
            <CardMedia sx={{ display: "flex", justifyContent: "center" }}>
              <img src="/images/Chris.jpg" alt="Chris Boyd" width="100%" />
            </CardMedia>
          </CardActionArea>
        </Card>

        <Card
          sx={{
            display: "inline-block",
            width: "12%",
            maxHeight: "37vh",
            margin: 2,
            backgroundColor: "#ff897a",
          }}
        >
          <CardActionArea href="https://www.linkedin.com/in/ian-larsen1337/">
            <CardHeader
              title="Ian"
              className="card-header"
              sx={{
                textAlign: "center",
                backgroundColor: "#ff897a",
                padding: 1,
              }}
            />
            <CardMedia sx={{ display: "flex", justifyContent: "center" }}>
              <img src="/images/Ian.jpg" alt="Ian Larsen" width="100%" />
            </CardMedia>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            display: "inline-block",
            width: "12%",
            maxHeight: "37vh",
            margin: 2,
            backgroundColor: "#ff897a",
          }}
        >
          <CardActionArea href="https://www.linkedin.com/in/meirsedlis/">
            <CardHeader
              title="Meir"
              className="card-header"
              sx={{
                textAlign: "center",
                backgroundColor: "#ff897a",
                padding: 1,
              }}
            />
            <CardMedia sx={{ display: "flex", justifyContent: "center" }}>
              <img src="/images/Meir.jpg" alt="Meir Sedlis" width="100%" />
            </CardMedia>
          </CardActionArea>
        </Card>
        <Card
          sx={{
            display: "inline-block",
            width: "12%",
            maxHeight: "37vh",
            margin: 2,
            backgroundColor: "#ff897a",
          }}
        >
          <CardActionArea href="https://www.linkedin.com/in/joe-anthony-brown/">
            <CardHeader
              title="Joe"
              className="card-header"
              sx={{
                textAlign: "center",
                backgroundColor: "#ff897a",
                padding: 1,
              }}
            />
            <CardMedia sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src="/images/Joe.jpeg"
                alt="Joe Anthony-Brown"
                width="100%"
              />
            </CardMedia>
          </CardActionArea>
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
              Technologies:
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
              Thank you:
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
