import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer" id="kontakt">
      <div className="container">
        <div className="footerSection">
          <div className="row justifyConter">
            <div className="footer-content">
              <div className="footer-section-logo">
                <img src="./image/3.png" alt="..." />
              </div>
              <div className="footerCircles">
                <a
                  href="https://www.facebook.com/profile.php?id=100009697066926"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="footerIcon" />
                </a>
                <a
                  href="https://twitter.com/?lang=pl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="footerIcon" />
                </a>
                <a
                  href="https://pl.pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPinterest className="footerIcon" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="footerIcon" />
                </a>
              </div>
              <div className="copy-right-content">
                <p className="copyright">
                  Kraków, 2023 - {new Date().getFullYear()}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
