import React, { useState } from "react";
import "./Skill.css";

const Skill = () => {
  const [selectSkill, setSelectSkill] = useState("SEO/SMO");

  return (
    <div className="skill" id="skill">
      <div>
        <h1>My Skills</h1>
        <p>Your skills are your only permanent job security</p>
      </div>
      <ul className="sections">
        <div>
        <li onClick={() => setSelectSkill("SEO/SMO")}>SEO/SMO</li>
        {/* <li onClick={() => setSelectSkill("SMO")}>SMO</li> */}
        </div>
      </ul>
      <section>
        <ul
          className="front-end"
          style={{ display: selectSkill === "SEO/SMO" ? "block" : "none" }}
        >
          <li>
            <span>On page SEO</span> <progress max="100" value="80"></progress>
          </li>
          <li>
            <span>Off page SEO</span> <progress max="100" value="85"></progress>
          </li>
          <li>
            <span>Meta Business Suite</span> <progress max="100" value="85"></progress>
          </li>
          <li>
            <span>Content Writing</span> <progress max="100" value="85"></progress>
          </li>
          <li>
            <span>Content Editing</span> <progress max="100" value="80"></progress>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Skill;
