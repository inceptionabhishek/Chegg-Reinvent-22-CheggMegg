import React from "react";
import { Nav, Container, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

function NavbarForAdmin() {
  const handlelogout = () => {
    localStorage.setItem("login", false);
    localStorage.setItem("email", "");
    localStorage.setItem("user", "");
    window.location.href = "/";
  };
  return (
    <>
      <Navbar className="navbar" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav className="me-auto">
                <Link to="/admin" className="links">
                  Home
                </Link>
                <Link to="/admin/studentlist" className="links">
                  All Student List
                </Link>
                <Link to="/admin/tutorlist" className="links">
                  All Tutor List
                </Link>
                <Link to="/admin/allquestions" className="links">
                  Questions Asked
                </Link>
                <Link to="/add/assessment" className="links">
                  AddAssessment
                </Link>
              </Nav>
            </Nav>
            <Nav className="ml-auto" navbarScroll>
              <Nav.Link>
                <Button variant="outline-light" onClick={handlelogout}>
                  <Link to="/" className="links">
                    <LoginIcon />
                    <span className="links">Logout</span>
                  </Link>
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarForAdmin;
