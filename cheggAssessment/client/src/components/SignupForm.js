import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { Button, Form, Spinner } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
function SignupForm() {
  const navigate = useNavigate();
  const notify1 = () => toast("Fill all the fields!");
  const notify2 = () => toast("Password Does not matched!");
  const notify3 = () => toast("Email already exist");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState("");
  const [uploaded, setUploaded] = useState(false);
  const HandlerFunction = async (e) => {
    e.preventDefault();
    if (image === "") {
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
  const submitForm = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmpassword === ""
    ) {
      notify1();
    } else {
      if (confirmpassword !== password) {
        notify2();
      } else {
        axios
          .post("http://localhost:2000/user/add", {
            name: name,
            email: email,
            image: image,
            password: password,
          })
          .then((res) => {
            if (res.data.message === "Email already exists") {
              notify3();
            } else {
              localStorage.setItem("user", email);
              navigate("/assessment");
            }
          });
      }
    }
  };

  return (
    <div className="Login-Div">
      <ToastContainer />
      <div className="container">
        <div class="row">
          <div class="col-md-4 col-lg-3"></div>
          <div class="col-md-8 col-lg-6">
            <h1 className="text-center">Signup</h1>
            <div class="demo-content bg-alt">
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="userNameId"
                    aria-describedby="userNameHelp"
                    placeholder="Enter Your Name"
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="userNameId"
                    aria-describedby="userNameHelp"
                    placeholder="Enter Your email"
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
                <div class="form-group">
                  <label for="exampleInputPassword1">Confirm Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="examplePassword"
                    aria-describedby="passwordHelp"
                    placeholder="Confirm Password"
                    onChange={(event) => setConfirmPassword(event.target.value)}
                  />
                </div>
                <div class="form-check">
                  <br />
                  <label for="exampleInputPassword1">
                    Please Add Your Profile Image
                  </label>

                  <AssignmentIndIcon />

                  <input
                    type="file"
                    onChange={(event) => setImage(event.target.files[0])}
                  />
                  <button
                    style={{ width: "100px", height: "30px", fontSize: "10px" }}
                    onClick={HandlerFunction}
                  >
                    Upload !
                  </button>
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
                <button
                  type="submit"
                  className="submit-btn"
                  onClick={submitForm}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
