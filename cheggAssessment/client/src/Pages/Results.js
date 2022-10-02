import React from "react";
import NavBarCompWithLogin from "../components/NavBarCompWithLogin";
import Homepage from "./AssessmentDetails/Homepage";
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
function Results() {
  const [assessmentResults, setAssessmentResults] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:2000/user/get/data", {
        email: localStorage.getItem("user"),
      })
      .then((res) => {
        console.log(res.data.data.Assessmenthistory);

        setAssessmentResults(res.data.data.Assessmenthistory);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <NavBarCompWithLogin />
      <h3>Assessment Results</h3>
      <Grid container spacing={3}>
        {assessmentResults.map((current) => {
          return (
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
                  height="110px"
                />
                You scored {current.score} ,
                <Link to={`/assessment/`}>
                  <button className="submit-btn">Try again</button>
                </Link>
                Assessment Id : {current.id}
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default Results;
