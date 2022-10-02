import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Footer() {
  return (
    <div>
      <div className="Footer">
        <h3>Made by Abhishek kumar </h3>
      </div>
      <div className="Footer">
        <a href="https://github.com/inceptionabhishek">
          <GitHubIcon />
        </a>

        <a href="https://www.linkedin.com/in/inceptionabhi/">
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
}

export default Footer;
