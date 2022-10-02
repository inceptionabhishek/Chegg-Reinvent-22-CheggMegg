import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Button, Spinner } from "react-bootstrap";
import { Route, Routes, Link } from "react-router-dom";
import { Box } from "@mui/material";
import Slider from "@mui/material/Slider";
import { Grid, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
function Mycourse() {
  const [mycourse, setMyCourse] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:5000/api/courses/get/all", {
        email: localStorage.getItem("email"),
      })
      .then((res) => {
        setMyCourse(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container">
      <h1>My Notes</h1>
      <Grid container spacing={3}>
        {mycourse.map((currentnotes) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Box
                sx={{
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
                <img src={currentnotes.thumbnail} alt="desc" width="200px" />
                <p>
                  {" "}
                  Title : <i>{currentnotes.title}</i>
                  <br />
                  <p style={{ color: "yellow" }}>Description :</p>{" "}
                  <i>{currentnotes.desc}</i>
                  <br />
                  <div className="Delete-Btn">
                    <DeleteIcon />
                  </div>
                </p>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Mycourse;
