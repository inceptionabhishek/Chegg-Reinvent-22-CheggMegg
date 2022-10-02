import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Spinner } from "react-bootstrap";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { height } from "@mui/system";

function StudentProfile() {
  const uri = "https://meggchegg.herokuapp.com/api/students/getprofile";
  const totquestionuri =
    "https://meggchegg.herokuapp.com/admin/getQuestionsCountByStudent";
  const [profile, setProfile] = useState([]);
  const email = localStorage.getItem("email");
  console.log(email);
  const [totalquestionCount, setQuestionCount] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  useEffect(() => {
    axios
      .get(totquestionuri, {
        email: email,
      })
      .then((res) => {
        console.log(res.data);
        setQuestionCount(res.data.questions);
      });
    axios
      .post(uri, {
        email: email,
      })
      .then((res) => {
        setProfile(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const HandlerUpdate = () => {
    localStorage.setItem("nameProfile", profile.name);
    localStorage.setItem("Tochangeemail", profile.email);
  };
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
          <div className="divquestionlist">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={profile.profileimage} />
              <Card.Body>
                <Card.Title>Name : {profile.name}</Card.Title>
                <Card.Text>Email : {profile.email}</Card.Text>
                <Link to="/students/updateprofile">
                  <Button
                    variant="outlined"
                    color="success"
                    className="btn"
                    onClick={HandlerUpdate}
                  >
                    Update
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        </>
      )}
    </>
  );
}

export default StudentProfile;
