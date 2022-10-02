import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";
function DisplayIndividualQuestion() {
  const [question, setQuestion] = useState({});
  const question_id = localStorage.getItem("question_id");
  const [fakedata, setFakedata] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("https://randomuser.me/api/").then((res) => {
      setFakedata(res.data.results);
      setLoading(false);
    });
  }, []);
  const uri = "https://meggchegg.herokuapp.com/api/question/getquestion";
  useEffect(() => {
    axios
      .post(uri, {
        question_id: question_id,
      })
      .then((res) => {
        setQuestion(res.data);
      })
      .catch((err) => {
        console.log(err);
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
                    <h3>{question.questiontitle}</h3>
                  </div>
                  <div className="card-body">
                    <p>{question.questiondescription}</p>
                    <img
                      src={question.questionimage}
                      alt="question"
                      width="400px"
                    />
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

export default DisplayIndividualQuestion;
