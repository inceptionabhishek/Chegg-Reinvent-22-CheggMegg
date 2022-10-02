import React from "react";
import {Card,Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import Image from '../Images/profilepic.png';
import {
  Avatar
} from '@mui/material';
const onClick = () => {
  
};

function BlogLists(props) {
  return (
    <>
      <Link to="/blog" className="links2">
        <Card style={{ width: "100%" }}>
          <Card.Body>
            <Card.Title>{props.title} </Card.Title>
            <Card.Text style={{ color: "grey" }}>
              {props.shortDescription}
            </Card.Text>
            Read more..
            <Avatar src={Image} /> by {props.name}
          </Card.Body>
        </Card>
      </Link>
    </>
  );
}

export default BlogLists;
