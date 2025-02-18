import React from "react";
import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer">
      <section>
        <h1>Selva</h1>
        <p>
        I am a Digital Marketing Professional with a Diploma in Digital Marketing. I Have
          Experience in Creating and Executing Digital Marketing Campaigns, Managing Social
          media accounts, Conducting Market Research and analyzing data to optimize
          marketing strategies.
        </p>
      </section>
      <p className="copy-rights">
        &copy; 2024 by Selva. All rights reserved.
      </p>
      <section className="LINKS">
        <ul className="links-link">
          <li>Links</li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skill">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <ul className="Links-contact">
          <li>Contact</li>
          <li>
            <a
              href="https://www.linkedin.com/in/selva-s-64556b218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/7812062930"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </li>
          {/* <li>
            <a
              href="https://github.com/CodeVicky03"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </li> */}
          <li>
            <a href="tel:+917812062930">
              <IoIosCall />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Footer;
