import React, { useState, useEffect } from "react";
import axios from "axios";
function ViewAnswer(props) {
    
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h3>Title : {localStorage.getItem("TutorviewTitle")} </h3>
              </div>
              <div className="card-body">
                <p>
                  Description : {localStorage.getItem("TutorviewDescription")}
                </p>
                <img
                  src={localStorage.getItem("TutorviewImage")}
                  alt="question"
                  width="400px"
                />
              </div>
              <b>
                  Answer : {localStorage.getItem("Tutorviewanswer")}
              </b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewAnswer;
