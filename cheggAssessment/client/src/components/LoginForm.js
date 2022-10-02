import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
function LoginForm() {
  const navigate = useNavigate();
  const notify1 = () => toast("Fill all the fields!");
  const notify2 = () => toast("Password Does not matched!");
  const notify3 = () => toast("Error");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      notify1();
    } else {
      axios
        .post("http://localhost:2000/user/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res);
          if (res.data.msg === "error") {
            notify3();
          } else {
            localStorage.setItem("user", email);
            navigate("/assessment");
          }
        });
    }
  };
  return (
    <div className="Login-Div">
      <ToastContainer />
      <div className="container">
        <div class="row">
          <div class="col-md-4 col-lg-3"></div>
          <div class="col-md-8 col-lg-6">
            <h1 className="text-center">Login</h1>
            <div class="demo-content bg-alt">
              <form>
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

export default LoginForm;
