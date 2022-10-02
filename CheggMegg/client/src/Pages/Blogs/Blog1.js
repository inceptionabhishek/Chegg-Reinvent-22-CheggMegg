import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
function Blog1() {
  const [fakedata, setFakedata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
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
                  <div className="card-body">
                    <h4 className="card-title">How To use CheggClone</h4>
                    <p className="card-text">
                      CheggClone is a clone of chegg.com. It is a website where
                      you can ask questions and get answers from the Tutors.
                      First of all this is MERN stack project, so everything is
                      written in javascript. And Here you can registered as a
                      <b> student or tutor.</b>
                    </p>
                    <p>
                      <h3>
                        <b>As a Student :-</b>
                        <br />
                      </h3>
                      First of all if you want to ask questions on this platform
                      then you have to login as a student.
                      <br />
                      So,Here's The flow how to ask questions :- <br />{" "}
                      <p className="des">
                        1. Sigin in as a student.
                        <br />
                        2. Go to Ask Question page <br />
                        3. Write your question and click on submit button.{" "}
                        <br /> 4. You will get a notification that your question
                        has been submitted. <br /> 5. Now Go to unSolved
                        Questions List and see your question there. <br /> 6. If
                        you want to see your question in the solved questions
                        list then go to your profile and click on solved
                        questions. <br /> 7. Now you can see your question in
                        the solved questions list. <br />
                        8. You can also see your Profile
                        <br />
                      </p>
                    </p>
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

export default Blog1;
