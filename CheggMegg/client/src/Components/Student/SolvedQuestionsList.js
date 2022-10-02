import React from "react";
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
import { Link } from "react-router-dom";
import axios from "axios";

function SolvedQuestionsList(props) {

  const saveinLocal = () => {
    localStorage.setItem("StudentView.Title", props.title);
    localStorage.setItem("StudentView.Description", props.description);
    localStorage.setItem("StudentView.Image", props.image);
    localStorage.setItem("StudentView.TutorEmail", props.tutoremail);
    localStorage.setItem("StudentView.TutorAns", props.tutorans);
  };
  return (
    <div className="divquestionlist">
      <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={2}
          m={3}
          bgcolor="background.paper"
          boxShadow={3}
        >
          <Typography
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
            }}
            variant="body1"
          >
            <b>{props.title}</b>
          </Typography>

          <img
            src={props.image}
            alt="question"
            className="questionimage"
            width="200px"
          />
          <Typography
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
            }}
            variant="body1"
          >
            {props.description}
          </Typography>
          <Link to="/student/viewanswer">
            <button className="submit-btn" onClick={saveinLocal}>
              View Answers
            </button>
          </Link>
        </Box>
      </Grid>
    </div>
  );
}

export default SolvedQuestionsList;
