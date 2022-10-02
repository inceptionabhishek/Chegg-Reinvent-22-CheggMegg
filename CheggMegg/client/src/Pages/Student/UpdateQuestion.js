import React, { useState, useEffect } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Button, Form, Spinner } from "react-bootstrap";

import axios from "axios";

function UpdateQuestion(props) {
  const [image, setImage] = useState(
    localStorage.getItem(localStorage.getItem("question_image"))
  );
  const [questionTitle, setQuestionTitle] = useState(
    localStorage.getItem("question_title")
  );
  const [questionDescription, setQuestionDescription] = useState(
    localStorage.getItem("question_description")
  );
  const [uploaded, setUploaded] = useState(false);
  const [alert, setAlert] = useState(false);
  const [goodAlert, setGoodAlert] = useState(false);
  const [fakedata, setFakedata] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const HandlerFunction = async (e) => {
    setUploaded(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "CheggClone");
    formData.append("cloud_name", "dkeiewkz6");
    await fetch("https://api.cloudinary.com/v1_1/dkeiewkz6/image/upload", {
      method: "post",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setImage(data.url);

        setUploaded(false);
      });
    setUploaded(false);
  };
  const handleChange = async (e) => {
    e.preventDefault();
    if (questionTitle.length > 0 && questionDescription.length > 0 && image) {
      setLoading(true);
      const api = "https://meggchegg.herokuapp.com/api/students/updatequestion";
      const data = {
        id: localStorage.getItem("Update_question_id"),
        title: questionTitle,
        description: questionDescription,
        QuestionImage: image,
      };
      await axios
        .post(api, data)
        .then((res) => {
          setLoading(false);
          setGoodAlert(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setAlert(true);
    }
  };
  return (
    <>
      <h1 className="text-center"> Update! Amigo😇 </h1>
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
          <div className="container">
            <p className="askQuestion">Please Update your question here.</p>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Question</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Question Title Here"
                  onChange={(e) => setQuestionTitle(e.target.value)}
                  value={questionTitle}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Add description</Form.Label>
                <Form.Control
                  as="textarea"
                  onChange={(e) => setQuestionDescription(e.target.value)}
                  rows={3}
                  value={questionDescription}
                />
              </Form.Group>
              <Form.Group
                className="mb-6"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Image of the Question(not necessary)</Form.Label>
                <Form.Control
                  type="file"
                  placeholder="Image"
                  onChange={(event) => setImage(event.target.files[0])}
                />
                <Button
                  variant="primary"
                  type="submit"
                  onClick={HandlerFunction}
                >
                  Upload Image to database
                </Button>
                {uploaded === true ? (
                  <Button variant="primary" disabled>
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </Button>
                ) : (
                  <></>
                )}
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              ></Form.Group>
              {alert === true ? (
                <>
                  <div class="alert">
                    <span class="closebtn" onClick={() => setAlert(false)}>
                      &times;
                    </span>
                    <strong>:( </strong>Please fill all the fields
                  </div>
                </>
              ) : (
                <></>
              )}
              {goodAlert === true ? (
                <>
                  <div class="w3-panel w3-green">
                    <h3>Updated!</h3>
                    <p>Question Updated successfully</p>
                  </div>
                </>
              ) : (
                <></>
              )}
              <div className="Top-Section">
                <button
                  type="submit"
                  className="submit-btn"
                  onClick={handleChange}
                >
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </>
      )}
    </>
  );
}

export default UpdateQuestion;
