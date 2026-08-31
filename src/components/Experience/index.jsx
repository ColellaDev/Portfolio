import { Container } from "./styles";
import { Zoom } from "react-awesome-reveal";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import experience from "../../data/experience.json";

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleExpand = (id) => {
    setExpandedIndex(expandedIndex === id ? -1 : id);
  };

  return (
    <Container id="Experience">
      <h1>Experiência Profissional</h1>

      <div className="experience-list">
        <Zoom cascade damping={0.1} duration={500}>
          {experience.map((job, id) => (
            <div
              className="experience-card"
              key={id}
              onClick={() => toggleExpand(id)}
            >
              <div className="header">
                <div className="header-content">
                  <div className="company-position">
                    <h3>{job.company}</h3>
                    <span className="period">{job.period}</span>
                  </div>
                  <span className="position">{job.position}</span>
                </div>
                <button className={`expand-button ${expandedIndex === id ? 'expanded' : ''}`}>
                  <FiChevronDown size={24} />
                </button>
              </div>

              {expandedIndex === id && (
                <div className="expandable-content">
                  <p className="description">{job.description}</p>

                  {job.achievements && job.achievements.length > 0 && (
                    <div className="achievements">
                      <h4>Contribuições:</h4>
                      <ul>
                        {job.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {job.technologies && job.technologies.length > 0 && (
                    <div className="technologies">
                      {job.technologies.map((tech, idx) => (
                        <span className="tech-tag" key={idx}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </Zoom>
      </div>
    </Container>
  );
}
