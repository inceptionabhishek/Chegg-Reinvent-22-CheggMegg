import axios from "axios";
import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Route, Routes } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import { Link } from "@mui/material";
import thumbpic from "../Images/thumbpic.jpg";
import Chip from "@mui/material/Chip";
import BlogLists from "./BlogLists";

function CardComponentForTopTutor(props) {
  const toptutor = props.Data;

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={6} xl={2}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={2}
          m={1}
          bgcolor="background.paper"
          boxShadow={3}
          height="350px"
        >
          <img
            src={toptutor[4].profileimage}
            alt=""
            className="image-thumbnail"
          ></img>
          <Stack spacing={2}>
            <Typography variant="h6">Name : {toptutor[0].name}</Typography>
            <Typography variant="body2">Questions Solved :20</Typography>
            <Stack spacing={2} direction="row">
              <i>Top Rated in :</i>{" "}
              <Chip
                label="C++"
                variant="outlined"
                color="primary"
                size="small"
              />
              <Chip
                label="Java"
                variant="outlined"
                color="primary"
                size="small"
              />
              <Chip
                label="Html/css"
                variant="outlined"
                color="primary"
                size="small"
              />
            </Stack>
          </Stack>
          <Typography variant="h5"></Typography>
        </Box>
      </Grid>

      <Grid item xs={12} sm={6} md={4} lg={6} xl={2}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={2}
          m={1}
          bgcolor="background.paper"
          boxShadow={3}
          height="350px"
        >
          <img
            src={toptutor[1].profileimage}
            alt=""
            className="image-thumbnail"
          ></img>
          <Stack spacing={2}>
            <Typography variant="h6">Name : {toptutor[1].name}</Typography>
            <Typography variant="body2">Questions Solved :12</Typography>
            <Stack spacing={2} direction="row">
              <i>Top Rated in :</i>{" "}
              <Chip
                label="Physics"
                variant="outlined"
                color="primary"
                size="small"
              />
              <Chip
                label="Chemistry"
                variant="outlined"
                color="primary"
                size="small"
              />
              <Chip
                label="Maths"
                variant="outlined"
                color="primary"
                size="small"
              />
            </Stack>
          </Stack>
          <Typography variant="h5"></Typography>
        </Box>
      </Grid>
    </>
  );
}

export default CardComponentForTopTutor;
