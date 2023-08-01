import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <a href="#">About Us</a>
        <br></br>
        <a href="#">Contact Us</a>
        <br></br>
        <a href="#">FAQ</a>
      </div>
      <div className="social-links">
        <a href="#">
          <i className="fab fa-facebook">Facebook</i>
        </a>
        <br></br>
        <a href="#">
          <i className="fab fa-twitter">Twitter</i>
        </a>
        <br></br>
        <a href="#">
          <i className="fab fa-instagram">Instagram</i>
        </a>
      </div>
      <p>&copy; 2023 Robotics Inc. All rights reserved.</p>
    </footer>
  );
}

export default Footer;