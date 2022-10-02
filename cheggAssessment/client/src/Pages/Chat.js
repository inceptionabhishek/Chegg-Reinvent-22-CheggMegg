import React from "react";
import { useState, useEffect } from "react";
import NavBarCompWithLogin from "../components/NavBarCompWithLogin";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
function Chat() {
  const [uploaded, setUploaded] = useState(false);
  const img =
    "http://res.cloudinary.com/dkeiewkz6/image/upload/v1664557131/epa9omge4vbgvdwlluiy.jpg";
  const [chats, setChats] = useState([]);
  const [image, setImage] = useState("");
  const [currchat, setCurrchat] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [username, setUserName] = useState("");
  const [profileimage, setProfileimage] = useState("");
  const handleCloseWithSave = async () => {
    axios
      .post("http://localhost:2000/user/get/data", {
        email: localStorage.getItem("user"),
      })
      .then((res) => {
        console.log(res);
        setUserName(res.data.data.name);
        setProfileimage(res.data.data.image);
      })
      .catch((err) => {
        console.log(err);
      });

    await axios
      .post("http://localhost:2000/chats/add/newchat", {
        name: username,
        text: currchat,
        image: image,
        time: new Date(),
        profileimage: profileimage,
      })
      .then((res) => {
        console.log(res);
        setShow(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:2000/chats/get/all")
      .then((res) => {
        console.log(res);
        setChats(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [show]);
  const HandlerFunction = async (e) => {
    e.preventDefault();
    if (image === "") {
    } else {
      setUploaded(true);
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "CheggClone");
      formData.append("cloud_name", "dkeiewkz6");
      await fetch("https://api.cloudinary.com/v1_1/dkeiewkz6/image/upload", {
        method: "post",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          setImage(data.url);
          setUploaded(false);
        });
    }
    setUploaded(false);
  };
  return (
    <>
      <NavBarCompWithLogin />

      <div
        className="Chat"
        style={{
          backgroundImage: `url("http://res.cloudinary.com/dkeiewkz6/image/upload/v1664557131/epa9omge4vbgvdwlluiy.jpg")`,
        }}
      >
        <div className="Heading-Chat">CheggMegg Chatting</div>
        <div className="Chats-current">
          {chats.map((currchat) => {
            return (
              <>
                <Chip
                  avatar={<Avatar alt="Natacha" src={currchat.profileimage} />}
                  label={currchat.name}
                  variant="outlined"
                  color="primary"
                />
                <div className="Chating-Div">
                  <p style={{ fontSize: "14px" }}>{currchat.text}</p>
                  {currchat.image.length > 0 ? (
                    <>
                      <img
                        src={currchat.image}
                        alt="chat"
                        style={{ width: "100px" }}
                      />
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="Temp">
        <button style={{ width: "100px" }} onClick={handleShow}>
          Add Chat
        </button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Your Chat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className="Chat-Input"
            onChange={(e) => {
              setCurrchat(e.target.value);
            }}
          />
          <div class="form-check">
            <br />
            <label for="exampleInputPassword1">
              Please Add Your Profile Image
            </label>

            <AssignmentIndIcon />

            <input
              type="file"
              onChange={(event) => setImage(event.target.files[0])}
            />
            <button
              style={{ width: "100px", height: "30px", fontSize: "10px" }}
              onClick={HandlerFunction}
            >
              Upload !
            </button>
            {uploaded === true ? (
              <button variant="primary" disabled>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </button>
            ) : (
              <></>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleCloseWithSave}>
            Send
          </button>
          <button variant="secondary" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Chat;
