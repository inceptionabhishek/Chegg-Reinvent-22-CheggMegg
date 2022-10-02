import React from "react";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Button, Spinner } from "react-bootstrap";
import { Route, Routes, Link } from "react-router-dom";
import { Box } from "@mui/material";
import Slider from "@mui/material/Slider";
import Footer from "../../Components/Footer";
import { Grid, Typography } from "@mui/material";
function Loginauth() {
  return (
    <>
      <h1 className="text-center">Login</h1>
      <div className="postdisplay">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box
              sx={{
                height: "100%",
                width: "90%",
                display: "inline-block",
                p: 1,
                mx: 1,
                borderRadius: 2,
                fontSize: "0.875rem",
                fontWeight: "700",
                textAlign: "center",
              }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              p={2}
              width="90%"
              m={1}
              bgcolor="background.red"
              boxShadow={3}
              className="postbody"
            >
              <img
                src="https://media.giphy.com/media/dxUWcK9sYNsAE323kY/giphy.gif"
                alt="student"
                height="300px"
              />
              <Link to="/signin/student">
                <Typography variant="h6">Student</Typography>
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box
              sx={{
                height: "100%",
                width: "90%",
                display: "inline-block",
                p: 1,
                mx: 1,
                borderRadius: 2,
                fontSize: "0.875rem",
                fontWeight: "700",
                textAlign: "center",
              }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              p={2}
              width="90%"
              m={1}
              bgcolor="background.red"
              boxShadow={3}
              className="postbody"
            >
              <img
                src="https://media.giphy.com/media/uWzYKSRpgkWKfoSbmX/giphy.gif"
                alt="tutor"
                height="300px"
              />
              <Link to="/signin/tutor">
                <Typography variant="h6">Tutor</Typography>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box
              sx={{
                height: "100%",
                width: "90%",
                display: "inline-block",
                p: 1,
                mx: 1,
                borderRadius: 2,
                fontSize: "0.875rem",
                fontWeight: "700",
                textAlign: "center",
              }}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              p={2}
              width="90%"
              m={1}
              bgcolor="background.red"
              boxShadow={3}
              className="postbody"
            >
              <img
                src="https://media.giphy.com/media/nIytbhDFEppTVqRICY/giphy.gif"
                alt="admin"
                height="300px"
              />
              <Link to="/signin/admin">
                <Typography variant="h6">Admin</Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </div>
     
    </>
  );
}

export default Loginauth;
