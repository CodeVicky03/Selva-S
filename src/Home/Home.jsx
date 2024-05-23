import React from "react";
import "./Home.css";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import selva from "../assets/selva.jpg"

const Home = () => {
  return (
    <div className="home" id="home">
      <section className="home-left-side">
        <span>Hello</span>
        <h1>
          Iam Selva
          <br></br> Digital Marketer
        </h1>
        <p>
          I am a Digital Marketing Professional with a Diploma in Digital Marketing. I Have
          Experience in Creating and Executing Digital Marketing Campaigns, Managing Social
          media accounts, Conducting Market Research and analyzing data to optimize
          marketing strategies.
        </p>
        <a href="#contact">
          <button>
            <span>Hire Me</span>
          </button>
        </a>
        <ul className="home-contact">
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
          <li>
            <a href="tel:+917812062930">
              <IoIosCall />
            </a>
          </li>
        </ul>
      </section>
      <section className="home-right-side">
        <div>
          <img src={selva} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;
