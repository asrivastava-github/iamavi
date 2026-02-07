import React from "react";
import "./Progress.scss";
import {techStack} from "../../portfolio";
import {Zoom} from "react-awesome-reveal";
import TechCloud from "../../components/techCloud/TechCloud";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Zoom duration={800} triggerOnce>
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">Proficiency</h1>
            {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage
              };
              return (
                <div key={i} className="skill">
                  <p>{exp.Stack}</p>
                  <div className="meter">
                    <span style={progressStyle}></span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="skills-image">
            <TechCloud />
          </div>
        </div>
      </Zoom>
    );
  }
  return null;
}
