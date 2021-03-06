import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <a
        className="a-footer"
        href="mailto:hannaandersson010@gmail.com?Subject=Hello%20Hanna"
      >
        Mail
      </a>
      <a
        className="a-footer"
        href="https://github.com/hannaandersson1"
        target="_blank"
      >
        GitHub
      </a>
      <a
        className="a-footer"
        href="https://www.linkedin.com/in/andersson-hanna/"
        target="_blank"
      >
        LinkedIn
      </a>
    </div>
  );
};

export default Footer;
