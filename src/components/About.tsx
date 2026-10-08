import "./styles/About.css";
import { config } from "../config";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">{config.about.title}</h3>
        {config.about.paragraphs.map((text, index) => (
          <p className="para" key={index}>
            {text}
          </p>
        ))}
        <div className="about-offer">
          <h4>{config.about.offeringTitle}</h4>
          <ul>
            {config.about.offerings.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
