import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import NavBarCompWithLogin from "../../components/NavBarCompWithLogin";
import { useNavigate, Link } from "react-router-dom";
function AssessmentLists() {
  const navigate = useNavigate();
  const [Assessment, setAssessment] = useState([]);
  const [currclass, setcurrclass] = useState("");
  useEffect(() => {
    const classselected = window.location.pathname.slice(-1);
    setcurrclass(classselected);
    const api = "http://localhost:2000/assessment/get/classwise";
    axios
      .post(api, {
        class: classselected,
      })
      .then((res) => {
        console.log(res);
        setAssessment(res.data.data);
        console.log(Assessment);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  return (
    <>
      <NavBarCompWithLogin />
      <div className="AssessmentList">
        {Assessment !== null && Assessment.length > 0 ? (
          <>
            <h1>Assessment available</h1>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Subject </th>
                  <th>Total Questions</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {Assessment.map((current) => {
                  return (
                    <>
                      <tr>
                        <td>
                          {current.subject}({current.type})
                        </td>
                        <td>{current.Questions.length}</td>
                        <td>
                          <button
                            style={{ height: "40px", fontSize: "15px" }}
                            className="submit-btn"
                            onClick={(e) => {
                              e.preventDefault();
                              navigate(
                                `/assessment/${currclass}/${current.id}`
                              );
                            }}
                          >
                            Attempt
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </Table>
          </>
        ) : (
          <>
            <h1>
              Assessment
              <br /> Not available
            </h1>
            <div className="NotFound-Assessment">
              <img
                src="https://media.giphy.com/media/ARfJtEhX4RBzinTjIA/giphy.gif"
                alt="student"
                height="200px"
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default AssessmentLists;
