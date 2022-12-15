import React from "react";
import "../../styles/navbar-footer-style.css";

const Footer = () => {
  return (
    <footer className="background mt-20 bottom-0 right-0 left-0 w-full">
      <div className="footer-content">
        <p className="text-white ml-4 font-semibold">
          Copyright by Group I RCTN-KS06
        </p>
        <p className="text-white fw-light mt-4">Keep in touch :</p>
        <div className="d-flex gap-4 justify-content-center">
          <div className="d-flex gap-2">
            <a
              href="https://github.com/diahpramesti"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assests/github-logo.png" className="logo" />
            </a>
            <p className="text-name text-white py-1">Diah Pramesti</p>
          </div>
          <p className="text-name text-white py-1 fw-light">{" | "}</p>
          <div className="d-flex gap-2">
            <a
              href="https://github.com/sagungputri21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/assests/github-logo.png" className="logo" />
            </a>
            <p className="text-name text-white py-1">Sagung Putri</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
