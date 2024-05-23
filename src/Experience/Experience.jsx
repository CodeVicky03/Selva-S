import React from "react";
import "./Experience.css";
import ESA from "../assets/esa.png";
import { MdOutlineAdsClick } from "react-icons/md";
import { IoIosLink } from "react-icons/io";

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <section className="ex-head">
        <div className="image" style={{ backgroundColor: "black" }}>
          <img src={ESA} alt="" />
        </div>
        <p>
          <a href="https://www.esearchadvisors.com/" target="_blank">
            Esearch Advisors <MdOutlineAdsClick />
          </a>
        </p>
        <p className="intern">Internship</p>
      </section>
      <section className="ex">
        <p>
          <span style={{ color: "#fd853a" }}>MINE</span> :<br></br> I finished My internship at E-search Advisors.
          As an Intern, I worked on SEO on-page and off-page to their websites, creating
          landing pages as well.
          I Ran Google Ads and paid ads using Meta Business Suite.
          I've worked on Social Media pages to generate organic traffic to social media
          accounts
        </p>
        <div className="view-certificate">
          {/* <a
            href="Internshipofferletter.pdf"
            download="Internship-offer-letter.pdf"
          >
            <p>Offer Letter</p>
          </a> */}
          <a
            href="course-complete-certificate.jpeg"
            download="Course-Certificate.pdf"
          >
            <p>Completion Certificates</p>
          </a>
          <span>
            <IoIosLink />
          </span>
        </div>
        <p>
          <span style={{ color: "#fd853a" }}>ESA</span> :<br></br>
          During their internship at E-search Advisors, the individual demonstrated adeptness in SEO, both on-page and off-page, while also proficiently creating landing pages. They managed Google Ads and paid campaigns via Meta Business Suite, and effectively optimized our social media pages, contributing to increased organic traffic and engagement.
        </p>
      </section>
    </div>
  );
};

export default Experience;
