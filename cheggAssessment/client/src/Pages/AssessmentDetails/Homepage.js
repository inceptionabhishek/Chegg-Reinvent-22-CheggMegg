import React from "react";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Route, Routes, Link } from "react-router-dom";
import { Box } from "@mui/material";
import Slider from "@mui/material/Slider";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

function Homepage() {
  const data = [
    {
      Name: "Class 1",
      ID: "1",
    },
    {
      Name: "Class 2",
      ID: "2",
    },
    {
      Name: "Class 3",
      ID: "3",
    },
    {
      Name: "Class 4",
      ID: "4",
    },
    {
      Name: "Class 5",
      ID: "5",
    },
    {
      Name: "Class 6",
      ID: "6",
    },
    {
      Name: "Class 7",
      ID: "7",
    },
    {
      Name: "Class 8",
      ID: "8",
    },
    {
      Name: "Class 9",
      ID: "9",
    },
    {
      Name: "Class 10",
      ID: "10",
    },
    {
      Name: "Class 11",
      ID: "11",
    },
    {
      Name: "Class 12",
      ID: "12",
    },
  ];
  return (
    <div className="Class-Selection">
      <br />

      <div className="Temp">
        <h3>SELECT YOUR CLASS</h3>
      </div>
      <Grid container spacing={3}>
        {data.map((curr, id) => {
          return (
            <>
              <Grid item xs={12} sm={12} md={4} lg={4}>
                <Box
                  sx={{
                    height: "100%",
                    width: "100%",

                    display: "inline-block",
                    p: 1,
                    mx: 1,
                    borderRadius: 2,
                    fontSize: "0.875rem",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                  p={2}
                  width="100%"
                  m={1}
                  bgcolor="#DFF6FF"
                  boxShadow={3}
                  className="postbody"
                >
                  <div>
                    <div className="Cont">
                      <img
                        src="https://media.giphy.com/media/XSmHWLpvdycR6xukzC/giphy.gif"
                        alt="student"
                        height="200px"
                      />
                      <div class="centered">{curr.Name}</div>
                    </div>
                    <Link to={`/assessment/${curr.ID}`}>
                      <button className="submit-btn">Visit</button>
                    </Link>
                  </div>
                </Box>
              </Grid>
            </>
          );
        })}
      </Grid>
    </div>
  );
}

export default Homepage;
