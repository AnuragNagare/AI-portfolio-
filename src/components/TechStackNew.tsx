import "./styles/TechStackNew.css";

interface TechItem {
  name: string;
  icon: string;
}

// Focused tech stack: 5 -> 4 -> 2 (Total 11)
const techStack: TechItem[][] = [
  // Row 1 - 5 items
  [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
    { name: "Pydantic", icon: "https://raw.githubusercontent.com/pydantic/pydantic/main/docs/logo.png" },
  ],
  // Row 2 - 4 items
  [
    { name: "Agentic AI", icon: "https://img.icons8.com/color/48/bot.png" },
    { name: "LLM", icon: "https://img.icons8.com/color/48/brain.png" },
    { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
    { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
  ],
  // Row 3 - 2 items
  [
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  ],
];

const TechStackNew = () => {
  return (
    <div className="techstack-new">
      {/* Video Background */}
      <div className="techstack-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="techstack-video"
        >
          <source src="/video/video.webm" type="video/webm" />
        </video>
        {/* Dark Overlay */}
        <div className="techstack-overlay"></div>
      </div>

      {/* Content */}
      <div className="techstack-content">
        <h2>Tech Stack</h2>

        <div className="techstack-pyramid">
          {techStack.map((row, rowIndex) => (
            <div key={rowIndex} className="techstack-row">
              {row.map((tech, techIndex) => (
                <div
                  key={techIndex}
                  className="techstack-item"
                  title={tech.name}
                  data-cursor="disable"
                >
                  <img src={tech.icon} alt={tech.name} />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackNew;
