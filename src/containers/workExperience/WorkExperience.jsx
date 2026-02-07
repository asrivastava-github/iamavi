import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-awesome-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (!workExperiences.display) return null;

  return (
    <div id="experience">
      <Fade duration={1000} triggerOnce>
        <div className="experience-container" id="workExperience">
          <h1 className="experience-heading">Experiences</h1>
          <div className="experience-timeline">
            {workExperiences.experience.map((card, i) => (
              <div className="experience-timeline-item" key={i}>
                <div className="experience-timeline-dot"></div>
                {i < workExperiences.experience.length - 1 && (
                  <div className="experience-timeline-connector"></div>
                )}
                <ExperienceCard
                  isDark={isDark}
                  cardInfo={{
                    company: card.company,
                    desc: card.desc,
                    date: card.date,
                    role: card.role,
                    descBullets: card.descBullets
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
}
