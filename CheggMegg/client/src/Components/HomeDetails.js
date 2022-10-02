import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import CardComponent from "./CardComponent";
import CardComponentForTopTutor from "./CardComponentForTopTutor";
import Texts from "../Helpertexts/Texts";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { Grid, Typography } from "@mui/material";
import BlogLists from "./BlogLists";
import DataBlog from "../Helpertexts/BlogLists";
import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.jpg";
import img3 from "../Images/img3.png";
import img4 from "../Images/img4.jpg";
import img5 from "../Images/img5.jpg";
import img6 from "../Images/react.png";
const api = "https://randomuser.me/api/";
const toptutoruri = "https://meggchegg.herokuapp.com/admin/getTopTutors";
function HomeDetails() {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(api).then((res) => {
      setData(res.data.results);
      setLoading(false);
    });
  }, []);
  const [toptutor, setTopTutor] = useState([]);

  useEffect(() => {
    axios.get(toptutoruri).then((res) => {
      setTopTutor(res.data.tutors);
      setLoading2(false);
    });
  }, []);

  const tempData = [
    {
      name: "Sachin",
      Rating: "4.5",
      QuestionsSolved: "200",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      name: "Ragav",
      Rating: "4.9",
      QuestionsSolved: "300",
      image: "https://randomuser.me/api/portraits/men/35.jpg",
    },
  ];
  return (
    <>
      <div className="Top-Section">
        <h5 className="text-top-section">24/7 homework help</h5>
      </div>
      <div className="details-desciptions">
        <p className="details-desciptions-text">{Texts[0]}</p>
      </div>
      <div className="Top-Section">
        <h5 className="text-top-section">
          Subjects
          <img src="https://i.gifer.com/1V8t.gif" height="100px" alt="" />
        </h5>
      </div>
      {loading ? (
        <>
          <div className="spinner">
            <Spinner animation="border" variant="primary" />
          </div>
        </>
      ) : (
        <>
          {" "}
          <div className="container">
            <Grid
              container
              spacing={3}
              direction="row"
              justify="center"
              alignItems="center"
              padding="2px"
            >
              <CardComponent Title="Physics" image={img1} />
              <CardComponent Title="Chemistry" image={img2} />
              <CardComponent Title="c++" image={img3} />
              <CardComponent Title="Java" image={img4} />
              <CardComponent Title="HTML/CSS" image={img5} />
              <CardComponent Title="React" image={img6} />
            </Grid>{" "}
          </div>
        </>
      )}
      <div className="Top-Section">
        <h3 className="text-top-section">Our Top Tutors</h3>
      </div>
      {loading2 ? (
        <>
          <div className="spinner">
            <Spinner animation="border" variant="primary" />
          </div>
        </>
      ) : (
        <>
          <div className="container">
            <Grid
              container
              spacing={3}
              direction="row"
              justify="center"
              alignItems="center"
              padding="2px"
            >
              <CardComponentForTopTutor Data={toptutor} />
            </Grid>
          </div>
        </>
      )}
      <div className="blogs container" >
        <h3 className="text-top-section">Recent Blogs by Admins</h3>
        {DataBlog.map((data, index) => {
          return (
            <BlogLists
              key={index}
              id={data.id}
              name={data.name}
              image={data.image}
              title={data.title}
              shortDescription={data.shortDescription}
            />
          );
        })}
      </div>
    </>
  );
}

export default HomeDetails;
