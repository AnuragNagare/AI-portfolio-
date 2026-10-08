export const config = {
    developer: {
        name: "Anurag",
        fullName: "Anurag Nagare",
        title: "Senior AI Engineer",
        tagline: "LLMs · Agentic AI · Automation · ML",
        description: "I build AI that runs in production: LLM applications, autonomous agents, workflow automation and custom ML models, including private LLMs that run on your own servers.",
        viewWorkText: "View My Work",
        resumeText: "Download Resume"
    },
    social: {
        github: "AnuragNagare",
        email: "anuragnagare77@gmail.com",
        location: "Mumbai, India",
        resume: "https://drive.google.com/file/d/11m2XEIsuENTfLmcTjKftryhM45JyHFrR/view?usp=sharing"
    },
    about: {
        title: "About Me",
        paragraphs: [
            "I'm a Senior AI Engineer and Team Lead with 3+ years of experience taking AI from prototype to production. At PSYBERQ, I lead a team of 6 engineers building Generative AI systems for cybersecurity threat detection, and I fine-tune and deploy private LLMs in both cloud and fully air-gapped environments.",
            "Alongside my full-time work, I build agentic AI systems and automation: multi-agent research pipelines, voice-controlled email agents and autonomous monitoring agents. My focus is simple: AI that is reliable, explainable and safe to use on real business data."
        ],
        offeringTitle: "What I can build for you:",
        offerings: [
            "AI agents and multi-agent systems that complete real tasks",
            "LLM applications and RAG systems that answer questions from your documents",
            "Private LLMs that run on your own servers, so your data never leaves your company",
            "Workflow automation that removes repetitive manual work",
            "Custom ML and computer vision models, deployed and monitored"
        ]
    },
    experiences: [
        {
            position: "Senior AI/ML Engineer / Team Lead",
            company: "PSYBERQ",
            period: "03/2025 – Present",
            location: "Remote",
            description: "Leading a team of 6 engineers building Generative AI systems for cybersecurity threat detection.",
            responsibilities: [
                "Lead a team of 6 engineers building Generative AI threat-detection systems, owning model architecture, delivery and production rollout.",
                "Built and shipped VAE, GAN and Transformer anomaly-detection models (PyTorch, TensorFlow) that catch novel attack patterns rule-based systems miss, detecting 35% more threats and cutting false positives by 60%.",
                "Fine-tuned and deployed private LLMs in cloud and on-premise/air-gapped environments, so security teams can use generative AI on sensitive data without breaking data-sovereignty or compliance rules.",
                "Added explainability (SHAP, LIME) and online learning pipelines, so analysts see why each threat was flagged and models adapt to new attacks without full retraining.",
                "Built MLOps infrastructure (Docker, AWS ECS/S3/Lambda/EC2, ONNX) that standardized model deployment across the team."
            ],
            technologies: ["PyTorch", "TensorFlow", "VAEs", "GANs", "Transformers", "LLM Fine-tuning", "Air-Gapped LLMs", "SHAP", "LIME", "Online Learning", "Docker", "AWS", "ONNX"]
        },
        {
            position: "Freelance AI & Automation Consultant",
            company: "Self-Employed",
            period: "2023 – Present",
            location: "Remote",
            description: "Building AI agents, automation and ML systems, from multi-agent research pipelines to private, locally hosted LLM tools.",
            responsibilities: [
                "Built ResearchOS, a 5-agent research pipeline (LangGraph) that turns any question into a cited report with charts and PDF export in under 10 minutes.",
                "Built Relay, a voice-controlled AI agent that plans and carries out email tasks on a live Gmail account, with a human confirmation step before any irreversible action.",
                "Built an autonomous Competitive Intelligence Agent using Temporal workflows and a locally hosted LLM, delivering executive briefings with no per-call API costs.",
                "Built ML forecasting and valuation models using XGBoost, LightGBM, LSTM and Temporal Fusion Transformers."
            ],
            technologies: ["LangGraph", "LangChain", "Temporal", "Llama 3", "Mistral", "Ollama", "Groq", "ChromaDB", "FAISS", "RAG", "XGBoost", "LightGBM", "LSTM", "Temporal Fusion Transformer", "Streamlit", "Docker", "AWS"]
        },
        {
            position: "AI/ML Software Engineer",
            company: "Mind Lens Worldwide Pte Ltd",
            period: "12/2024 – 03/2025",
            location: "",
            description: "Built and deployed real-time computer vision applications and the APIs that served them.",
            responsibilities: [
                "Shipped real-time computer vision applications (YOLO, InsightFace, Django, Streamlit) for face and object recognition, automating work previously done through manual visual review.",
                "Built and maintained production REST APIs serving ML models to front-end and downstream applications.",
                "Introduced systematic API testing and validation in Postman, catching integration issues before release and reducing back-and-forth between the ML and backend teams."
            ],
            technologies: ["Python", "Django", "Streamlit", "YOLO", "InsightFace", "REST APIs", "Postman", "Computer Vision"]
        },
        {
            position: "AI Robotics Trainer",
            company: "STEMpedia",
            period: "12/2023 – 09/2024",
            location: "Ahmedabad",
            description: "Designed AI and machine learning learning material and taught hands-on workshops.",
            responsibilities: [
                "Designed AI/ML curriculum modules (TensorFlow, computer vision) for the PictoBlox platform, increasing student engagement by 30%.",
                "Delivered hands-on AI workshops that improved course completion rates and strengthened classroom adoption."
            ],
            technologies: ["Python", "TensorFlow", "Computer Vision", "PictoBlox", "Curriculum Design"]
        },
        {
            position: "Python Data Science Developer",
            company: "Sai Info Solutions",
            period: "04/2023 – 11/2023",
            location: "Nashik",
            description: "Built deep learning models and web apps for image classification, NLP and predictive analytics.",
            responsibilities: [
                "Built CNN and RNN models (TensorFlow, Keras) for image classification and NLP, forming the core predictive layer of the team's data science work.",
                "Improved model accuracy by 15–20% through systematic hyperparameter tuning (Grid Search, Random Search).",
                "Built Flask web apps that gave non-technical stakeholders self-serve access to model predictions and visualizations."
            ],
            technologies: ["Python", "TensorFlow", "Keras", "CNN", "RNN", "Flask", "Scikit-learn", "NLP", "Hyperparameter Tuning"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "ResearchOS — Multi-Agent Research Automation",
            category: "Agentic AI / Automation",
            technologies: "Python, LangGraph, Llama 3.x (Groq), ChromaDB (RAG), Tavily, Plotly, Streamlit, WeasyPrint",
            github: "https://github.com/AnuragNagare/Agentic-Research-OS",
            description: "A team of 5 AI agents (Supervisor, Researcher, Analyst, Writer and Critic) that turns any question into a fully cited professional report, with auto-generated charts and PDF export, in under 10 minutes. A built-in critic reviews every draft and sends it back for revision, and a live graph shows the agents working together in real time."
        },
        {
            id: 2,
            title: "Relay — Voice-Controlled Agentic Email Assistant",
            category: "Agentic AI / Voice AI",
            technologies: "JavaScript, Vite, LLM Agents (Groq), Gmail API, OAuth, Web Speech API, MediaPipe",
            github: "https://github.com/AnuragNagare/Beckon-AI",
            description: "A hands-free AI agent that listens to a spoken or typed goal, plans the steps with an LLM and carries them out on a real Gmail account: finding threads, drafting replies and composing new emails. Before any irreversible action, it stops and asks for confirmation by voice, text or hand gesture. Everything runs in the browser, with no backend."
        },
        {
            id: 3,
            title: "Competitive Intelligence Agent — Autonomous Market Monitoring",
            category: "Agentic AI / Automation",
            technologies: "Python, Temporal, Mistral (Ollama, local LLM), Tavily, Streamlit",
            github: "https://github.com/AnuragNagare/Agentic-AI-",
            description: "An autonomous AI agent that monitors competitors around the clock and delivers structured executive briefings. Temporal keeps long-running workflows reliable, parallel web search gathers updates quickly, and all analysis runs on a locally hosted LLM, so data stays private and there are no per-call API costs. Includes a live dashboard."
        },
        {
            id: 4,
            title: "Property Valuation & Market Intelligence Engine",
            category: "Machine Learning / PropTech",
            technologies: "Python, XGBoost, LightGBM, Geospatial Analysis, Time-Series",
            github: "",
            description: "A property valuation engine trained on historical transaction data to predict market sale prices. It uses geospatial features such as distance to metro, beaches and schools, plus community grade, and adjusts for market trends over time."
        },
        {
            id: 5,
            title: "Ghostframe — Real-Time Invisibility Cloak",
            category: "Computer Vision / Creative AI",
            technologies: "Python, OpenCV, MediaPipe, JavaScript, HTML5 Canvas",
            github: "https://github.com/AnuragNagare/Ghost-frame",
            description: "A real-time \"invisibility cloak\" built with hand tracking and image compositing, with no model training and no backend. Trace a shape in the air with your fingertips, and wherever it moves, a frozen background shows through the live camera feed. Available as a single-file browser app and a Python/OpenCV desktop version."
        }
    ],
    contact: {
        heading: "Let's build something together",
        text: "Have a project in mind, whether it's an AI agent, an LLM app, automation or a custom model? Send me a message and I'll reply within 24 hours.",
        buttonText: "Email Me",
        email: "anuragnagare77@gmail.com",
        phone: "+91 7218512152",
        github: "https://github.com/AnuragNagare",
        linkedin: "https://www.linkedin.com/in/anurag-nagare-6977681a0/"
    },
    skills: {
        develop: {
            title: "AI ENGINEERING",
            description: "LLMs, Agentic AI & Machine Learning",
            details: "Building LLM applications, AI agents and custom ML models, from fine-tuning private LLMs on air-gapped servers to multi-agent systems that complete real tasks. Experienced in Generative AI (VAEs, GANs, Transformers), RAG, explainable AI, computer vision and NLP.",
            tools: ["LLM Fine-tuning & Private/On-Prem Deployment", "Agentic AI & Multi-Agent Systems", "LangGraph", "LangChain", "RAG & Vector Databases (ChromaDB, FAISS)", "Open-Source LLMs (Llama, Mistral, Ollama, Groq)", "Hugging Face Transformers", "Generative AI (GANs, VAEs)", "PyTorch", "TensorFlow", "Computer Vision (YOLO, InsightFace, OpenCV, MediaPipe)", "Natural Language Processing (NLP)", "Explainable AI (SHAP, LIME)"]
        },
        design: {
            title: "AUTOMATION & MLOPS",
            description: "Workflows, deployment & production infrastructure",
            details: "Turning models into reliable products: automated workflows, containerized deployment on AWS, optimized models and production APIs. Also experienced in forecasting and tabular ML with XGBoost, LightGBM, LSTM and Temporal Fusion Transformers.",
            tools: ["AI Workflow Automation (Temporal)", "MLOps", "Docker", "AWS (ECS, Lambda, S3, EC2)", "ONNX Optimization", "RESTful APIs", "Online Learning", "XGBoost / LightGBM", "Time-Series Forecasting (LSTM, TFT)", "Streamlit", "ClickHouse"]
        }
    },
    education: [
        {
            degree: "Master's of Computer Application (M.C.A)",
            institution: "K.K Wagh College",
            location: "Nashik, India",
            year: "2023"
        },
        {
            degree: "Bachelor's of Computer Application (B.C.A)",
            institution: "K.K Wagh College",
            location: "Nashik, India",
            year: "2021"
        }
    ],
    footer: "© 2026 Anurag Nagare · Senior AI Engineer · Mumbai, India"
};
