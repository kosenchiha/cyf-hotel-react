import React from "react";

const Footer = props => {
  return (
    <footer className="footer">
      <ul>
        {props.footerInfo.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
