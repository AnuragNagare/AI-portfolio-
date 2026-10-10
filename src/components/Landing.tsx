import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { config } from "../config";

const Landing = ({ children }: PropsWithChildren) => {
  const nameParts = config.developer.fullName.split(" ");
  const firstName = nameParts[0] || config.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              {firstName.toUpperCase()}
              {' '}
              <br />
              {lastName && <span>{lastName.toUpperCase()}</span>}
            </h1>
          </div>
          <div className="landing-info">
            <h3>Senior</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">AI</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Engineer</div>
            </h2>
          </div>
          <div className="landing-details">
            <p className="landing-tagline">{config.developer.tagline}</p>
            <p className="landing-description">{config.developer.description}</p>
            <div className="landing-buttons">
              <a href="#work" data-href="#work" className="landing-btn" data-cursor="disable">
                {config.developer.viewWorkText}
              </a>
              <a
                href={config.social.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="landing-btn landing-btn-outline"
                data-cursor="disable"
              >
                {config.developer.resumeText}
              </a>
            </div>
          </div>
          {/* Mobile photo - shows only on mobile when 3D character is hidden */}
          <div className="mobile-photo">
            <img src="/images/anurag.jpg" alt="Anurag Nagare" />
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
