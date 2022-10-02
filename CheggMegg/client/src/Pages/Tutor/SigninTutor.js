import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";

function SigninTutor() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const [fakedata, setFakedata] = useState([]);
  const [loading, setLoading] = useState(true);
 useEffect(() => {
   setTimeout(() => {
     setLoading(false);
   }, 1000);
 }, []);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://meggchegg.herokuapp.com/api/tutor/validate", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data.message);
        if (response.data.message === "Successfully logged in") {
          setEmail("");
          setPassword("");

          localStorage.setItem("user", "tutor");
          localStorage.setItem("email", email);
          localStorage.setItem("login", true);
          window.location.href = "/tutor/answerquestion";
        } else {
          setAlert(true);
        }
      });
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
                <h1 className="text-center">Login Tutor</h1>
                <div class="demo-content bg-alt">
                  <form onSubmit={handleFormSubmit}>
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

                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </form>
                  {alert === true ? (
                    <>
                      <div class="alert">
                        <span class="closebtn" onClick={() => setAlert(false)}>
                          &times;
                        </span>
                        <strong>:( </strong>Wrong Password or Email.
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default SigninTutor;
