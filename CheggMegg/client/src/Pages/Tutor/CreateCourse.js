import React, { useState, useEffect } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Button, Form, Spinner } from "react-bootstrap";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import axios from "axios";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function CreateCourse() {
  const notify = () => toast("Course Added!");
  const [image, setImage] = useState("");
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionDescription, setQuestionDescription] = useState("");
  const [uploaded, setUploaded] = useState(false);
  const [alert, setAlert] = useState(false);
  const [goodAlert, setGoodAlert] = useState(false);
  const [loading, setLoading] = useState(true);
  const HandlerFunction = async (e) => {
    e.preventDefault();
    setUploaded(true);
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
  const handleChange = (e) => {
    e.preventDefault();
    const api = "http://localhost:5000/api/courses/add/new";
    axios
      .post(api, {
        teacheremail: localStorage.getItem("email"),
        title: questionTitle,
        desc: questionDescription,
        thumbnail: image,
        students: [],
        materials: [],
      })
      .then((res) => {
        console.log(res);
        notify();
        setQuestionDescription("");
        setQuestionTitle("");
        setImage("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <h1> Create Notes</h1>
      <ToastContainer />
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Add Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter The Name Of Your Course"
            value={questionTitle}
            onChange={(e) => setQuestionTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Add description</Form.Label>
          <Form.Control
            as="textarea"
            onChange={(e) => setQuestionDescription(e.target.value)}
            rows={3}
          />
        </Form.Group>
        <Form.Group className="mb-6" controlId="exampleForm.ControlInput1">
          <Form.Label>Thumbnail</Form.Label>
          <Form.Control
            type="file"
            placeholder="Image"
            onChange={(event) => setImage(event.target.files[0])}
          />
          <Button variant="primary" type="submit" onClick={HandlerFunction}>
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
              <h3>Success!</h3>
              <p>Question Asked successfully :) </p>
            </div>
          </>
        ) : (
          <></>
        )}

        <div className="Top-Section">
          <button type="submit" className="submit-btn" onClick={handleChange}>
            Create
          </button>
        </div>
      </Form>
    </div>
  );
}

export default CreateCourse;
