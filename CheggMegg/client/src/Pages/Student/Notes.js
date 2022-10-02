import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Button, Spinner } from "react-bootstrap";
import { Route, Routes, Link } from "react-router-dom";
import { Box } from "@mui/material";
import Slider from "@mui/material/Slider";
import { Grid, Typography } from "@mui/material";

import Modal from "react-bootstrap/Modal";
function Notes() {
  const [show, setShow] = useState(false);
  const [viewtitle, setViewtitle] = useState("");
  const [viewdesc, setViewdesc] = useState("");
  const [viewimage, setImage] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/courses/all")
      .then((res) => {
        setNotes(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function removerest(s) {
    var curr = "";
    for (var i = 0; i < s.length; i++) {
      if (s[i] === ".") {
        break;
      } else {
        curr += s[i];
      }
    }
    return curr;
  }
  return (
    <>
      <div className="container">
        <h1>Notes By Teachers</h1>
        <Grid container spacing={3}>
          {" "}
          {notes.map((curr) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Box
                  sx={{
                    width: "90%",
                    display: "inline-block",
                    p: 1,
                    mx: 1,
                    borderRadius: 2,
                    fontSize: "0.875rem",
                    fontWeight: "700",
                    textAlign: "center",
                  }}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  p={2}
                  width="90%"
                  m={1}
                  bgcolor="background.red"
                  boxShadow={3}
                  className="postbody"
                >
                  <img src={curr.thumbnail} alt="desc" width="200px" />
                  <p>
                    {" "}
                    Title : <i>{curr.title}</i>
                    <br />
                    <p style={{ color: "red" }}>Description :</p>{" "}
                    <i>{removerest(`${curr.desc}`)}....</i>
                    <br />
                    <div className="View-Notes">
                      <button
                        className="submit-btn"
                        onClick={(e) => {
                          e.preventDefault();
                          setViewtitle(curr.title);
                          setViewdesc(curr.desc);
                          setImage(curr.thumbnail);
                          setShow(true);
                        }}
                      >
                        View
                      </button>
                    </div>
                    <p>
                      <b>Given By :</b> <u>{curr.teacheremail}</u>
                    </p>
                  </p>
                </Box>
              </Grid>
            );
          })}
        </Grid>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{viewtitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{
              color: "grey",
            }}
          >
            <img src={viewimage} alt="desc" width="200px" />
            <br />
            {viewdesc}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Notes;
