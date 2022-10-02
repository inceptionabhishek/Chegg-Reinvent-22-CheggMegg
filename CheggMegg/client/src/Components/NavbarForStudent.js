import React from "react";
import { Nav, Container, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

function NavbarForStudent() {
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
                <Link to="/student/askquestion" className="links">
                  AsknewQuestion
                </Link>
                <Link to="/student/solvedquestions" className="links">
                  SolvedQuestions
                </Link>
                <Link to="/student/unsolvedquestions" className="links">
                  UnsolvedQuestions
                </Link>
                <Link to="/student/profile" className="links">
                  Profile
                </Link>
                <Link to="/student/notes/view" className="links">
                  Notes
                </Link>
              </Nav>
            </Nav>
            <Nav className="ml-auto" navbarScroll>
              <Button variant="outline-light" onClick={handlelogout}>
                <Link to="/" className="links">
                  <LoginIcon />
                  <span className="links">Logout</span>
                </Link>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarForStudent;
