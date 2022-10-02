import React from "react";
import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import UnsolvedQuestionsList from "../../Components/Student/UnsolvedQuestionsList";
function UnsolvedQuestions() {
  const email = localStorage.getItem("email");
  const [questions, setQuestions] = useState([]);
  const [fakedata, setFakedata] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const uri =
    "https://meggchegg.herokuapp.com/api/question/getunsolvedquestion";

  useEffect(() => {
    axios
      .post(uri, {
        email: email,
      })
      .then((res) => {
        setQuestions(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [questions]);

  return (
    <>
      {loading ? (
        <div className="spinner">
          <Spinner
            animation="border"
            variant="primary"
            className="TempSpinner"
          />
        </div>
      ) : (
        <>
          <h1 className="askQuestion">Unsolved Questions</h1>
          <br />
          <br />

          {questions.length === 0 ? (
            <div className="divquestionlist">
              <Typography variant="h5" component="h2">
                No Unsolved Questions
              </Typography>
            </div>
          ) : (
            questions.map((question) => {
              return (
                <UnsolvedQuestionsList
                  key={question._id}
                  title={question.questiontitle}
                  description={question.questiondescription}
                  image={question.questionimage}
                  question_id={question._id}
                />
              );
            })
          )}
        </>
      )}
    </>
  );
}

export default UnsolvedQuestions;
