import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import LockIcon from "@mui/icons-material/Lock";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useNavigate } from "react-router-dom";
function NavBarCompWithLogin() {
  const navigate = useNavigate();
  const handlelogout = () => {
    navigate("/");
    localStorage.setItem("user", "");
  };
  return (
    <>
      <Navbar className="navbar" expand="lg">
        <Container fluid>
          <Link to="/" className="links">
            <h3>CheggMegg (Assessment)</h3>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/assessment" className="links">
                Take Assessment
              </Link>
              <Link to="/results" className="links">
                Assessment Results
              </Link>
              <Link to="/group/chat" className="links">
                Chat
              </Link>
            </Nav>
            <Nav className="ml-auto" navbarScroll>
              <button className="submit-btn" onClick={handlelogout}>
                <Link to="/" className="links">
                  <LoginIcon />
                  <span className="links">Logout</span>
                </Link>
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarCompWithLogin;
