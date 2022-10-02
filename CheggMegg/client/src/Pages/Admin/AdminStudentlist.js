import React from "react";
import TutorListAll from "../../Helpertexts/TempTutorList";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";
import axios from "axios";
function AdminStudentlist() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const api = "https://meggchegg.herokuapp.com/admin/getAllStudents";
  useEffect(() => {
    axios.get(api).then((res) => {
      setStudents(res.data.students);
      setLoading(false);
    });
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
                    <h4 className="card-title">Students List</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
                        <thead className=" text-primary">
                          <th>Name</th>
                          <th>Email</th>
                          <th>Image</th>
                        </thead>
                        <tbody>
                          {students.map((student) => (
                            <tr key={student._id}>
                              <td>{student.name}</td>
                              <td>{student.email}</td>
                              <td>
                                <img
                                  src={student.profileimage}
                                  style={{ width: "50px" }}
                                  alt="tutor"
                                  className="img-fluid"
                                />
                              </td>
                              <td></td>
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

export default AdminStudentlist;
