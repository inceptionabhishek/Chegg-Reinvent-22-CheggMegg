import React from "react";
import NavBarComp from "../components/NavBarComp";
import { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Button, Spinner } from "react-bootstrap";
import { Route, Routes, Link } from "react-router-dom";
import { Box } from "@mui/material";
import Slider from "@mui/material/Slider";
import { Grid, Typography } from "@mui/material";
import axios from "axios";
function Explore() {
  const avatars = [
    "https://media.giphy.com/media/XuBtcsV266vepmoEYG/giphy.gif",
  ];
  const [allusers, setAlluser] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:2000/user/get/all")
      .then((res) => {
        console.log(res);
        setAlluser(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <NavBarComp />
      <div className="Temp">
        <h2>All Students List</h2>
        <img
          src="https://media.giphy.com/media/XuBtcsV266vepmoEYG/giphy.gif"
          alt="student"
          height="200px"
        />
      </div>
      <Grid container spacing={3}>
        {allusers.map((curruser) => {
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
                  src={curruser.image}
                  alt=""
                  style={{
                    borderRadius: "50%",
                    height: "200px",
                    width: "200px",
                  }}
                />
                <br />
                <div className="User-Desc">
                  Name : {curruser.name}
                  <br />
                  contact : {curruser.email}
                  <p>
                    Total Assessment Taken : {curruser.Assessmenthistory.length}
                  </p>
                </div>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default Explore;
