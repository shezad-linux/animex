import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        
        <ul>
          <li>
          <a href="https://www.linkedin.com/in/shezadansari/">Shezad: Linkdlen</a>
           
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mohit-kumar-429012239/">Mohit: Linkdlen</a>
          </li>
          <li>
          <a href="https://www.linkedin.com/in/abhishek-kumar-2a3643232/">Abhishek: Linkdlen</a>
          </li>
        </ul>
      </nav>
      <p className="footer-text">&copy; Made By: Shezad, Mohit, Abhishek</p>
    </footer>
  );
};

export default Footer;
