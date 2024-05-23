import React, { useState, useEffect } from "react";
import "./Projects.css";
import proj from "./proj";
import { FaGithub } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa6";

const Projects = () => {
  const [Filter, setFilter] = useState([]);

  useEffect(() => {
    items("On/Off page");
  }, [proj]);

  function items(v) {
    const filterValue = proj.filter((item) => item.field === v);
    if (filterValue) {
      setFilter(filterValue);
    } else {
      null;
    }
  }

  return (
    <div className="projects" id="projects">
      <section className="proje-head">
        <h1>My Projects</h1>
        <p>Liston - Learn - Win</p>
      </section>
      <ul>
        <li onClick={() => items("On/Off page")}>On/Off page</li>
        <li onClick={() => items("SMO Content")}>SMO Content</li>
        <li onClick={() => items("SMO Content")}>SMO</li>
        <li onClick={() => items("Canva Edit")}>Canva Edit</li>
      </ul>
      <section className="proje">
        {Filter &&
          Filter.map((list, index) => {
            return (
              <div key={index}>
                {list.image && <iframe src={list.image}></iframe>}
                {list.img && <img src={list.img} alt=""/>}
                <p>{list.title}</p>
                <span>{list.description}</span>
                <div>
                  {list.git && (
                    <a href={list.git}>
                      <FaGithub />
                    </a>
                  )}
                  {list.preview && (
                    <a href={list.preview}>
                      <FaBullseye />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default Projects;
