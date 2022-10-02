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
import axios from "axios";
import { Link } from "react-router-dom";

function UnsolvedQuestionsList(props) {
  const handler = () => {
    localStorage.setItem("question_id", props.question_id);
  };
  const apidelete =
    "https://meggchegg.herokuapp.com/api/students/deletequestion";
  const HandlerDelete = () => {
    axios
      .post(apidelete, {
        id: props.question_id,
      })
      .then((res) => {
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const HandlerUpdate = () => {
    localStorage.setItem("question_title", props.title);
    localStorage.setItem("question_description", props.description);
    localStorage.setItem("question_image", props.image);
    localStorage.setItem("Update_question_id", props.question_id);
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
          sx={{ width: 1 }}
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
            {props.title}
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
          <Link to="/student/getquestion">
            <Button variant="contained" color="primary" onClick={handler}>
              View Question
            </Button>
          </Link>
          <Button
            variant="outlined"
            color="error"
            className="btn"
            onClick={HandlerDelete}
          >
            Delete
          </Button>
          <Link to="/students/updatequestion">
            <Button
              variant="outlined"
              color="success"
              className="btn"
              onClick={HandlerUpdate}
            >
              Update
            </Button>
          </Link>
        </Box>
      </Grid>
    </div>
  );
}

export default UnsolvedQuestionsList;
