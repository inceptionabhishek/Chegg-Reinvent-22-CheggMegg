import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form, Spinner } from "react-bootstrap";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
function Signup() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [allvalues, setAllvalues] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [fakedata, setFakedata] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const HandlerFunction = async () => {
    if (image === "") {
      setAllvalues(true);
    } else {
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
    }
    setUploaded(false);
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (
      username === "" ||
      name === "" ||
      email === "" ||
      password === "" ||
      image === ""
    ) {
      setAllvalues(true);
    } else {
      await axios
        .post("https://meggchegg.herokuapp.com/api/students/add/newstudent", {
          username: username,
          name: name,
          email: email,
          password: password,
          profileimage: image,
        })
        .then((res) => {
          localStorage.setItem("user", "student");
          localStorage.setItem("email", email);
          localStorage.setItem("login", true);
          window.location.href = "/student/askquestion";
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
            <div class="row">
              <div class="col-md-4 col-lg-3"></div>
              <div class="col-md-8 col-lg-6">
                <h1 className="text-center">Sign Up Student</h1>
                <div class="demo-content bg-alt">
                  <form onSubmit={handleFormSubmit}>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Name </label>
                      <input
                        type="text"
                        class="form-control"
                        id="userNameId"
                        aria-describedby="userNameHelp"
                        placeholder="Enter Your UserName"
                        onChange={(event) => setName(event.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">UserName</label>
                      <input
                        type="text"
                        class="form-control"
                        id="userNameId"
                        aria-describedby="userNameHelp"
                        placeholder="Enter Your UserName"
                        onChange={(event) => setUsername(event.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email </label>
                      <input
                        type="email"
                        class="form-control"
                        id="userNameId"
                        aria-describedby="userNameHelp"
                        placeholder="Enter Your UserName"
                        onChange={(event) => setEmail(event.target.value)}
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="examplePassword"
                        aria-describedby="passwordHelp"
                        placeholder="Password"
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </div>

                    <div class="form-check">
                      <p className="details-desciptions-text">
                        Please Add Your Profile Image
                        <AssignmentIndIcon />
                      </p>
                      <input
                        type="file"
                        onChange={(event) => setImage(event.target.files[0])}
                      />
                      <Button variant="primary" onClick={HandlerFunction}>
                        Upload Image to database
                      </Button>
                      {uploaded === true ? (
                        <button variant="primary" disabled>
                          <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                          Loading...
                        </button>
                      ) : (
                        <></>
                      )}
                    </div>
                    {allvalues === true ? (
                      <>
                        <div class="alert">
                          <span
                            class="closebtn"
                            onClick={() => setAllvalues(false)}
                          >
                            &times;
                          </span>
                          <strong>Please!</strong> Fill all the values
                        </div>
                      </>
                    ) : (
                      <></>
                    )}
                    <button
                      onClick={handleFormSubmit}
                      type="submit"
                      class="btn btn-primary"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Signup;
