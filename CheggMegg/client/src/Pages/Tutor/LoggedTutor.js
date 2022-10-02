import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
function LoggedTutor() {
  const api = "https://meggchegg.herokuapp.com/api/tutor/getallquestions";
  const [questions, setQuestions] = useState([]);
  const tutoremail = localStorage.getItem("email");
  const [questionId, setQuestionId] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const handler = () => {};
  useEffect(() => {
    axios
      .post(api, {
        tutoremail: tutoremail,
      })
      .then((res) => {
        setQuestions(res.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, [questions]);

  return (
    <>
      <h1 className="askQuestion">Available Questions to answer</h1>
      {loading ? (
        <>
          <div className="spinner">
            <Spinner animation="border" variant="primary" className="TempSpinner" />
          </div>
        </>
      ) : (
        <>
          {questions.length === 0 ? (
            <>
              {" "}
              <h1>No Questions</h1>{" "}
            </>
          ) : (
            <>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Question</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {questions.map((question) => (
                    <tr key={question._id}>
                      <td>{question.questiontitle}</td>
                      <td>
                        <Link to="/tutor/getquestion">
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => {
                              localStorage.setItem("question_id", question._id);
                            }}
                          >
                            View Question
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </>
      )}
    </>
  );
}

export default LoggedTutor;
