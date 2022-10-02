import React from "react";
import FormControl from "@mui/material/FormControl";
import { useState, useEffect } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import Modal from "react-bootstrap/Modal";
function AddAssessment() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [Answers, setAnswers] = useState([
    {
      Answer: "",
      iscorrect: ",",
    },
    {
      Answer: "",
      iscorrect: ",",
    },
    {
      Answer: "",
      iscorrect: ",",
    },
    {
      Answer: "",
      iscorrect: ",",
    },
  ]);
  const [assessmentTitle, setAssessmentTitle] = useState("");
  const [assessmentclass, setassessmentClass] = useState("");
  const [assessementSubject, setAssessmentSubject] = useState("");
  const [Questions, setQuestions] = useState([]);
  return (
    <>
      <div className="container">
        <h1 className="Top-Heading">Make New Assessment</h1>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Assessment Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Assessment Title Here"
              value={assessmentTitle}
              onChange={(e) => setAssessmentTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Class</Form.Label>
            <Form.Control
              type="text"
              placeholder="1 or 2 ..or 8..12"
              value={assessmentclass}
              onChange={(e) => setassessmentClass(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              placeholder="Physics, english, logical, G.k.."
              value={assessementSubject}
              onChange={(e) => setAssessmentSubject(e.target.value)}
            />
          </Form.Group>
          (Note : Add atleast one question)
          <div className="Temp">
            <Button
              className="submit-btn"
              style={{ backgroundColor: "grey", color: "black" }}
              onClick={handleShow}
            >
              <AddIcon />
              (Add Question)
            </Button>
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Question</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Question : </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Question Title Here"
                    value={currentQuestion}
                    onChange={(e) => setCurrentQuestion(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Option1 : </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Option1 Here"
                    onChange={(e) => {
                      Answers[0].Answer = e.target.value;
                    }}
                  />
                  <Form.Check
                    value="design"
                    type="radio"
                    aria-label="radio 1"
                    label="Correct"
                    onChange={(e) => {
                      console.log(e);
                    }}
                  />
                  <Form.Check
                    value="design"
                    type="radio"
                    aria-label="radio 1"
                    label="Incorrect"
                    onChange={(e) => {
                      console.log(e);
                    }}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Option1 : </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Option1 Here"
                    onChange={(e) => {
                      Answers[0].Answer = e.target.value;
                    }}
                  />
                  <Form.Check
                    value="design"
                    type="radio"
                    aria-label="radio 1"
                    label="Correct"
                    onChange={(e) => {
                      console.log(e);
                    }}
                  />
                  <Form.Check
                    value="design"
                    type="radio"
                    aria-label="radio 1"
                    label="Incorrect"
                    onChange={(e) => {
                      console.log(e);
                    }}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Option1 : </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Option1 Here"
                    onChange={(e) => {
                      Answers[0].Answer = e.target.value;
                    }}
                  />
                  <Form.Check
                    value="design"
                    type="radio"
                    aria-label="radio 1"
                    label="Correct"
                    onChange={(e) => {
                      console.log(e);
                    }}
                  />
                  <Form.Check
                    value="design"
                    type="radio"
                    aria-label="radio 1"
                    label="Incorrect"
                    onChange={(e) => {
                      console.log(e);
                    }}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Option1 : </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Your Option1 Here"
                    onChange={(e) => {
                      Answers[0].Answer = e.target.value;
                    }}
                  />
                  <Form.Check
                    value="design"
                    type="radio"
                    aria-label="radio 1"
                    label="Correct"
                    onChange={(e) => {
                      console.log(e);
                    }}
                  />
                  <Form.Check
                    value="design"
                    type="radio"
                    aria-label="radio 1"
                    label="Incorrect"
                    onChange={(e) => {
                      console.log(e);
                    }}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
          <br />
          {Questions.length > 0 ? (
            <>
              <button className="submit-btn">Create Assessment</button>
            </>
          ) : (
            <>
              {" "}
              <button className="submit-btn" disabled>
                Create Assessment
              </button>
            </>
          )}
        </Form>
      </div>
    </>
  );
}

export default AddAssessment;
