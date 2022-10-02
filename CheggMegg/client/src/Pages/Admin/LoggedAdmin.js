import React from "react";
import { Grid, Typography, Chip, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import axios from "axios";
function LoggedAdmin() {
  const [studentsize, setStudentsize] = useState(0);
  const [tutorsize, setTutorsize] = useState(0);
  const [totalQuestionasked, setTotalQuestionasked] = useState(0);
  const [totalQuestionsAnswers, setTotalQuestionsAnswers] = useState(0);
  const [loading, setLoading] = useState(true);
  // Api for studentsize = 'http://localhost:5000/admin/totalStudents'
  // Api for tutorsize = 'http://localhost:5000/admin/totalTutors'
  // Api for TotalQuestionsasked = 'http://localhost:5000/admin/totalquestions'
  // Api for Total QuestionsSolvedAsked = 'http://localhost:5000/admin/solvedquestioncount'

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  useEffect(() => {
    axios
      .get("https://meggchegg.herokuapp.com/admin/totalStudents")
      .then((res) => {
        setStudentsize(res.data.count);
      });
    axios
      .get("https://meggchegg.herokuapp.com/admin/totalTutors")
      .then((res) => {
        setTutorsize(res.data.count);
      });
    axios
      .get("https://meggchegg.herokuapp.com/admin/totalquestions")
      .then((res) => {
        setTotalQuestionasked(res.data.count);
      });
    axios
      .get("https://meggchegg.herokuapp.com/admin/solvedquestioncount")
      .then((res) => {
        setTotalQuestionsAnswers(res.data.count);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <>
          <div className="spinner">
            <Spinner
              animation="border"
              variant="primary"
              className="TempSpinner"
            />
          </div>
        </>
      ) : (
        <>
          <div className="adminStats">
            <h2>Hello, Admin!</h2>
          </div>
          <div className="adminStats">
            <p>Here are some stats for CheggClone</p>
          </div>
          <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
            padding="2px"
          >
            <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={2}
                m={1}
                bgcolor="background.paper"
                boxShadow={3}
              >
                <Typography variant="h5">
                  <Chip label="Stats For Students" color="primary" />
                </Typography>
                <Typography variant="h6">
                  Total Students : {studentsize}
                </Typography>
                <Typography variant="h8" style={{ color: "grey" }}>
                  Total Questions Asked by them : {totalQuestionasked}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={2}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                p={2}
                m={1}
                bgcolor="background.paper"
                boxShadow={3}
              >
                <Typography variant="h5">
                  <Chip label="Stats For Tutors" color="primary" />
                </Typography>
                <Typography variant="h6">Total Tutor : {tutorsize}</Typography>
                <Typography variant="h8" style={{ color: "grey" }}>
                  Total Questions Solved by them : {totalQuestionsAnswers}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}

export default LoggedAdmin;
