import React from "react";
import "./About.css";
import { FiLink } from "react-icons/fi";

const About = () => {
  return (
    <div className="about" id="about">
      <h1>About Me</h1>
      <p>
        As a Digital Marketing Professional with a Diploma in Digital Marketing, I specialize in crafting and executing impactful campaigns across diverse digital channels. Proficient in social media management, I engage audiences effectively while conducting in-depth market research to drive informed strategies. Through meticulous data analysis, I continuously optimize marketing approaches for maximum impact and ROI.
      </p>
      <a href="Selva S - Digital Marketing CV (1).pdf" download="Selva.pdf">
        Download CV
      </a>
      <div>
        <p>
        I'm deeply passionate about digital marketing, pouring my dedication into crafting and executing innovative campaigns. Every day, I thrive on the dynamic challenges and opportunities this field presents, continually refining strategies for optimal results and staying ahead of industry trends.
        </p>
        <FiLink />
        <p>
        Igniting my passion for creative strategy and audience engagement. With each campaign, I embrace the evolving landscape, leveraging data insights to sculpt compelling narratives that resonate. It's not just a job; it's a journey of innovation, growth, and boundless possibility.
        </p>
      </div>
    </div>
  );
};

export default About;
