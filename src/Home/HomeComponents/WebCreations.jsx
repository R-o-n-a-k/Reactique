import React, { useState } from "react";
import "../HomeCss/WebCreations.css";
import { ProjectData, creationsTab } from "./HomeData";
import { Link } from "react-router-dom";

const WebCreations = () => {
  //initializing all the project to display
  const [data, setProjectData] = useState(ProjectData);
  //storing the value which is clicked
  const [tabBtn, setTabBtn] = useState("all");

  //storing showAll state
  const [show, setShow] = useState(false);

  //filtering the project as per the type and storing in the newData array into the data state and then displaying
  const filterProjects = (val) => {
    if (val === "all") {
      setProjectData(ProjectData);
    } else {
      const newData = ProjectData.filter((project) => {
        return project.type === val;
      });
      setProjectData(newData);
    }
  };

  //storing the tabs name and passing for filtering
  const handleTabClicked = (val) => {
    setTabBtn(val);
    filterProjects(val);
  };

  return (
    <>
      <div className="web-creations" id="web-creations">
        <div className="web-creations-heading" data-aos="fade-up">
          <h2>Web Creations</h2>
        </div>
        {/* tab buttons */}
        <div className="web-creations-tabs" data-aos="fade-up">
          {creationsTab.map((tab) => (
            <button
              className={`${
                tab.name === tabBtn ? "active-tab" : ""
              } web-creations-tabs-button`}
              key={tab.name}
              onClick={() => handleTabClicked(tab.name)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        {/* projects */}
        <div className="web-creations-projects">
          {/* displaying initially only 3 data when show is false */}
          {(show ? data : data.slice(0, 3)).map((item) => (
            <div className="project" key={item.id} data-aos="fade-up">
              <img src={item.demo} alt={item.name} loading="lazy" />
              <div className="project-content">
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <button>Checkout</button>
                  </a>
                ) : (
                  <Link to={`${item.link}`}>
                    <button>Checkout</button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* show more less */}

        {data.length > 3 && (
          <div className="web-creations-show">
            <button
              data-aos="fade-up"
              data-aos-offset="10"
              onClick={() => setShow((prev) => !prev)}
            >
              {show ? "Show Less" : "Show All"}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default WebCreations;
