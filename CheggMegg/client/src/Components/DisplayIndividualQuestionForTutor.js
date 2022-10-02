import React, { useState, useEffect } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Button, Form } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function DisplayIndividualQuestionForTutor() {
  const [question, setQuestion] = useState({});
  const [answer, setAnswer] = useState("");
  const [goodAlert, setGoodAlert] = useState(false);
  const question_id = localStorage.getItem("question_id");
  const [loading, setLoading] = useState(true);
  const uri = "https://meggchegg.herokuapp.com/api/question/getquestion";
  useEffect(() => {
    axios
      .post(uri, {
        question_id: question_id,
      })
      .then((res) => {
        setQuestion(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [question]);
  const api = "https://meggchegg.herokuapp.com/api/solved/add/tutor";
  const answerQuestionHandler = async (e) => {
    e.preventDefault();
    if (question.status === true) {
      alert("Question already solved");
    } else {
      setLoading(true);
      await axios
        .post(api, {
          id: question_id,
          questionTitle: question.questiontitle,
          questionDescription: question.questiondescription,
          questionImage: question.questionimage,
          studentemail: question.studentwhoaskedemail,
          tutoremail: localStorage.getItem("email"),
          tutorans: answer,
        })
        .then((res) => {
          setGoodAlert(true);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
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
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3>{question.questiontitle}</h3>
                  </div>
                  <div className="card-body">
                    <p>{question.questiondescription}</p>
                    <img
                      src={question.questionimage}
                      alt="question"
                      width="400px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="askQuestion">Add Your Answer!</Form.Label>
            <Form.Control
              as="textarea"
              onChange={(e) => setAnswer(e.target.value)}
              rows={3}
            />
          </Form.Group>
          <Link to="/tutor/question">
            <Button variant="primary" onClick={answerQuestionHandler}>
              Submit
            </Button>
          </Link>
          {goodAlert === true ? (
            <>
              <div class="w3-panel w3-green">
                <h3>Answered Successfully! </h3>
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
}

export default DisplayIndividualQuestionForTutor;
