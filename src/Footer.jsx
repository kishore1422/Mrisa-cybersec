import React from "react";
import './Footer.css'; // Import custom CSS for footer styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Mrisa. All rights reserved.</p>
        <p>
          Follow us on 
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"> LinkedIn</a> | 
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
