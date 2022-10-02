import React from "react";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Button, Spinner } from "react-bootstrap";
import { Route, Routes, Link } from "react-router-dom";
import { Box } from "@mui/material";
import Slider from "@mui/material/Slider";
import { Grid, Typography } from "@mui/material";

function HomeDetails() {
  return (
    <>
      <div className="Heading">
        <div className="Heading-Text">
          Welcome <br />
          To
          <br /> CheggMegg - Assessment
        </div>
      </div>
      <br />
      <div className="Desc-Assessment">
        What we do ?
        <p className="Ans-WhatWeDo">
          Our Motive is to provide You with the best services in
          <ul>
            <li>Assessment</li>
            <li>Live Interaction(Chatting)</li>
            <li>Doubt Solving</li>
          </ul>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Box
                sx={{
                  height: "90%",
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
                  src="https://media.giphy.com/media/t5RMni2zWxBblot9mP/giphy.gif"
                  alt="student"
                  height="200px"
                />
                Assessment
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Box
                sx={{
                  height: "90%",
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
                  src="https://media.giphy.com/media/Zw4zyLZoaDcYs60k8E/giphy.gif"
                  alt="tutor"
                  height="200px"
                />
                <a
                  href="https://meggchegg.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Doubt Solving
                </a>
                <br />
                please click on the link above to ask doubts.
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Box
                sx={{
                  height: "90%",
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
                  src="https://media.giphy.com/media/UWyaZogug8tsphSgQH/giphy.gif"
                  alt="admin"
                  height="200px"
                />
                Live Chatting
              </Box>
            </Grid>
          </Grid>
        </p>
      </div>
    </>
  );
}

export default HomeDetails;
