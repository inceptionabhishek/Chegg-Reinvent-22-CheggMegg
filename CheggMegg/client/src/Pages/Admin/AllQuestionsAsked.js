import React from "react";
import { useState, useEffect } from "react";
import axios from "react";
import { Spinner } from "react-bootstrap";
import { Chip } from "@mui/material";

function AllQuestionsAsked() {
  const [allquestions, setAllquestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const api = "https://meggchegg.herokuapp.com/admin/getAllQuestions";
  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setAllquestions(data.questions);
        setLoading(false);
      });
  }, [allquestions]);

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
          <h1 className="details-desciptions">Questions Asked on MeggChegg</h1>
          <br />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Students List</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
                        <thead className=" text-primary">
                          <th>Question Title</th>
                          <th>Question Status</th>
                          <th>Student</th>
                        </thead>
                        <tbody>
                          {allquestions.map((question) => (
                            <tr key={question._id}>
                              <td>{question.questiontitle}</td>
                              <td>
                                {question.status === true ? (
                                  <Chip label="Answered" color="primary" />
                                ) : (
                                  <Chip label="Unanswered" color="secondary" />
                                )}
                              </td>
                              <td>{question.studentwhoaskedemail}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
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

export default AllQuestionsAsked;
