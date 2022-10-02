import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import { Avatar, Chip } from "@mui/material";
function ViewAnswers(props) {
  const [loading, setLoading] = useState(true);
  const [tutor, setTutor] = useState([]);
  const uri = "https://meggchegg.herokuapp.com/api/tutor/getprofile";
  useEffect(() => {
    axios
      .post(uri, {
        email: localStorage.getItem("StudentView.TutorEmail"),
      })
      .then((res) => {
        setTutor(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
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
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h3>
                      Title : {localStorage.getItem("StudentView.Title")}{" "}
                    </h3>
                  </div>
                  <div className="card-body">
                    <p>
                      Description :{" "}
                      {localStorage.getItem("StudentView.Description")}
                    </p>
                    <img
                      src={localStorage.getItem("StudentView.Image")}
                      alt="question"
                      width="400px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <h1 className="text-center">Tutor's Answer</h1>
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-body">
                    <p>{localStorage.getItem("StudentView.TutorAns")}</p>
                    <h3 className="details-desciptions-text">
                      Answered By :{tutor.name}
                    </h3>
                    <Avatar src={tutor.profileimage} />
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ViewAnswers;
