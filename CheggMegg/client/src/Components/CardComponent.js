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
import img1 from "../Images/img1.jpg";
import Chip from "@mui/material/Chip";
function CardComponent(props) {
  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={2}
          m={1}
          height="350px"
          bgcolor="background.paper"
          boxShadow={3}
        >
          <img
            src={props.image}
            className="image-thumbnail"
            alt="Thumbnail"
          ></img>
          <Typography variant="h5">
            <Chip label={props.Title} color="primary" />
          </Typography>
          <Typography variant="h6">
            We have best Teachers for the {props.Title} subject.
          </Typography>
        </Box>
      </Grid>
    </>
  );
}

export default CardComponent;
