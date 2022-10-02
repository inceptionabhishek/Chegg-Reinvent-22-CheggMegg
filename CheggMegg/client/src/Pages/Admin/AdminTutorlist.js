import React from "react";
import TutorListAll from "../../Helpertexts/TempTutorList";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import axios from "axios";
function AdminTutorlist() {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);
  const api = "https://meggchegg.herokuapp.com/admin/getAllTutors";
  useEffect(() => {
    axios.get(api).then((res) => {
      setTutors(res.data.tutors);
     
      setLoading(false);
    });
  }, []);
  return (
    <>
      {loading ? (
        <>
          <div className="spinner">
            <Spinner animation="border" variant="primary" className="TempSpinner" />
          </div>
        </>
      ) : (
        <>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Tutor List</h4>
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
                          {tutors.map((tutor) => (
                            <tr key={tutor._id}>
                              <td>{tutor.name}</td>
                              <td>{tutor.email}</td>
                              <td>
                                <img
                                  src={tutor.profileimage}
                                  style={{ width: "50px" }}
                                  alt="tutor"
                                  className="img-fluid"
                                />
                              </td>
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

export default AdminTutorlist;
