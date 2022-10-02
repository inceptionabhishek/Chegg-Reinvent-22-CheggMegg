import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import LockIcon from "@mui/icons-material/Lock";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
function NavbarComponent() {
  return (
    <>
      <Navbar className="navbar" expand="lg">
        <Container fluid>
          <Link to="/" className="links">
            <h1>MeggChegg</h1>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/explore" className="links">
                Explore
                <TravelExploreIcon />
              </Link>
            </Nav>
            <Nav className="ml-auto" navbarScroll>
              <Link to="/loginauth" className="links">
                Login
                <VpnKeyIcon />
              </Link>
              <Link to="/signupauth" className="links">
                Signup
                <LockIcon />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;

/*
 <Nav className="me-auto">
                <Link to="/signin/student" className="links">

                </Link>
                <Link to="/signup/student" className="links">
                  SignupStudent
                  <VpnKeyIcon />
                </Link>
                <Link to="/signin/admin" className="links">
                  Admin
                  <AdminPanelSettingsIcon />
                </Link>
                <Link to="/signin/tutor" className="links">
                  SigninTutor
                  <AdminPanelSettingsIcon />
                </Link>
                <Link to="/signup/tutor" className="links">
                  SignupTutor
                  <AdminPanelSettingsIcon />
                </Link>
              </Nav>
              */
