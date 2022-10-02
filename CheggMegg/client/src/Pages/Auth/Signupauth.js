import React from "react";

import { Nav, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import LockIcon from "@mui/icons-material/Lock";
import { Grid, Typography,Box } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
function Signupauth() {
  return (
    <>
      <h1 className="text-center">Sign Up</h1>
      <div className="postdisplay">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} lg={6}>
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
              <Link to="/signup/student">
                <Typography variant="h6">Student</Typography>
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={6}>
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
              <Link to="/signup/tutor">
                <Typography variant="h6">Tutor</Typography>
              </Link>
            </Box>
          </Grid>
         
        </Grid>
      </div>
    </>
  );
}

export default Signupauth;
