import React from "react";
import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import SolvedQuestionsListForTutor from "./SolvedQuestionsListForTutor";
function TutorSolvedQuestions() {
  const tempimage =
    "https://res.cloudinary.com/dkeiewkz6/image/upload/v1646113532/rkvgtstl4xdqcey0x8lr.png";
  const [solvedQuestions, setSolvedQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .post("https://meggchegg.herokuapp.com/api/solved/view/tutor", {
        tutoremail: localStorage.getItem("email"),
      })
      .then((res) => {
        setSolvedQuestions(res.data.data);
       
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, []);

  return (
    <>
      <h1 className="askQuestion">Total Questions Solved By you : </h1>
      <br />
      <br />
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
          {solvedQuestions.length === 0 ? (
            <>
              <Typography variant="h5" className="details-desciptions">
                You have not solved any questions yet.
              </Typography>
            </>
          ) : (
            <>
              {solvedQuestions.map((question) => (
                <SolvedQuestionsListForTutor
                  id={question._id}
                  title={question.questionTitle}
                  image={question.questionImage}
                  description={question.questionDescription}
                  tutoremail={question.tutoremail}
                  tutorans={question.tutorans}
                  student={question.studentemail}
                />
              ))}
            </>
          )}
        </>
      )}
    </>
  );
}

export default TutorSolvedQuestions;
