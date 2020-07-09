import React from 'react';


let date = new Date()

const Footer = () => {
    return (
      <footer className="app-footer">
        <span className="d-inline-block">Smart-School &copy; {date.getFullYear()}</span>
      </footer>
    );
  }
;

export default Footer;
