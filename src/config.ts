export const config = {
    developer: {
        name: "Anurag",
        fullName: "Anurag Nagare",
        title: "Senior AI & Machine Learning Engineer",
        description: "Senior AI & Machine Learning Engineer and Team Lead with experience architecting and deploying cutting-edge Generative AI, LLMs, computer vision, and scalable MLOps solutions."
    },
    social: {
        github: "AnuragNagare",
        email: "anuragnagare77@gmail.com",
        location: "Mumbai, India",
        resume: "https://drive.google.com/file/d/11m2XEIsuENTfLmcTjKftryhM45JyHFrR/view?usp=sharing"
    },
    about: {
        title: "About Me",
        description: "Senior AI & Machine Learning Engineer and Team Lead specializing in the end-to-end development and deployment of production Generative AI, LLM, and MLOps solutions. Proven track record leading engineering teams to build production-ready VAEs, GANs, and Transformers, fine-tuning LLMs in cloud and air-gapped environments, implementing Explainable AI (SHAP, LIME), and architecting real-world predictive platforms across cybersecurity, computer vision, and time-series domains."
    },
    experiences: [
        {
            position: "Senior AI/ML Engineer / Team Lead",
            company: "PSYBERQ",
            period: "03/2025 – Present",
            location: "Remote",
            description: "Leading a team of 6 engineers building and deploying Generative AI solutions for cybersecurity threat detection and anomaly prevention, achieving enhanced real-time intrusion detection capabilities.",
            responsibilities: [
                "Built and deployed production-ready VAEs, GANs, and Transformer models for cybersecurity anomaly detection using PyTorch and TensorFlow",
                "Deployed and fine-tuned LLMs in cloud (online) and on-premise/air-gapped (offline) environments for sensitive cybersecurity workloads and data-sovereignty requirements",
                "Implemented model explainability with SHAP and LIME for intrusion detection models, enabling analyst-readable justifications for flagged threats",
                "Designed online learning pipelines adapting models to novel attack patterns without full retraining, reducing model drift in production",
                "Implemented robust MLOps workflows using Docker, AWS (ECS, S3, Lambda, EC2), and ONNX for model optimization and deployment"
            ],
            technologies: ["PyTorch", "TensorFlow", "VAEs", "GANs", "Transformers", "LLM Fine-tuning", "Air-Gapped LLMs", "SHAP", "LIME", "Online Learning", "Docker", "AWS", "ONNX"]
        },
        {
            position: "AI/ML Software Engineer",
            company: "Mind Lens Worldwide Pte Ltd",
            period: "12/2024 – 03/2025",
            location: "India",
            description: "Designed and deployed computer vision and interactive web applications, integrating advanced models into scalable enterprise solutions.",
            responsibilities: [
                "Designed and deployed AI/ML solutions integrating Django, Streamlit, YOLO, and InsightFace for computer vision and interactive web applications",
                "Developed and maintained RESTful APIs for machine learning models, ensuring robust backend integration and end-to-end software delivery",
                "Conducted thorough API testing and validation using Postman, improving system reliability and performance"
            ],
            technologies: ["Python", "Django", "Streamlit", "YOLO", "InsightFace", "REST APIs", "Postman", "Computer Vision"]
        },
        {
            position: "Freelance AI & Machine Learning Consultant",
            company: "Self-Employed",
            period: "2023 – Present",
            location: "Remote",
            description: "Delivering end-to-end AI/ML consulting services for enterprise clients, including property valuation engines, energy forecasting platforms, and production-ready multi-agent LLM systems.",
            responsibilities: [
                "Engineered Property Valuation & Market Intelligence engines using XGBoost/LightGBM with geospatial feature engineering and trend drift analysis",
                "Developed Building Energy Forecasting & Cooling Optimization systems using LSTM and Temporal Fusion Transformers with MLOps pipelines",
                "Built scalable content generation and document processing platforms using GPT-4, Claude 3.5, LLaMA 3, ChromaDB, FAISS, and Hugging Face Transformers"
            ],
            technologies: ["XGBoost", "LightGBM", "Temporal Fusion Transformer", "LSTM", "LLaMA 3", "GPT-4", "ChromaDB", "FAISS", "Geospatial Analysis", "AWS", "Docker"]
        },
        {
            position: "AI Robotics Trainer",
            company: "STEMpedia",
            period: "12/2023 – 09/2024",
            location: "Ahmedabad, India",
            description: "Spearheaded the integration of artificial intelligence into educational platforms, curriculum development, and hands-on workshops.",
            responsibilities: [
                "Designed and integrated AI & machine learning modules into the PictoBlox platform using TensorFlow and computer vision, increasing user engagement by 30%",
                "Engineered customized instructional content and hands-on workshops that increased participant interest by 30% and drove higher course completion rates"
            ],
            technologies: ["Python", "TensorFlow", "Computer Vision", "PictoBlox", "Curriculum Design", "Data Science"]
        },
        {
            position: "Python Data Science Developer",
            company: "Sai Info Solutions",
            period: "04/2023 – 11/2023",
            location: "Nashik, India",
            description: "Delivered comprehensive data science solutions across multiple domains, developing neural networks for image classification, NLP, and time series forecasting.",
            responsibilities: [
                "Architected and implemented CNN, RNN, and deep learning models using TensorFlow and Keras for image classification, NLP, and predictive analytics",
                "Enhanced ML performance through advanced hyperparameter tuning (Grid Search, Random Search), achieving 15–20% accuracy improvements",
                "Built interactive full-stack web applications using Flask framework for real-time data visualization and model inference"
            ],
            technologies: ["Python", "TensorFlow", "Keras", "CNN", "RNN", "Flask", "Hyperparameter Tuning", "Scikit-learn", "NLP"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "Property Valuation & Market Intelligence Engine",
            category: "PropTech / Machine Learning",
            technologies: "Python, XGBoost, LightGBM, Geospatial Analysis, Time-Series",
            github: "https://github.com/AnuragNagare",
            description: "An intelligent property valuation engine trained on historical transaction data. Features geospatial feature engineering (distance to metro, beach, schools, community grade) and time-series adjustments for market trend drift to accurately predict market sale prices."
        },
        {
            id: 2,
            title: "Building Energy Forecasting & Cooling Optimization System",
            category: "Energy Tech / MLOps",
            technologies: "Python, Temporal Fusion Transformer, LSTM, MLOps, Docker",
            github: "https://github.com/AnuragNagare",
            description: "Multi-horizon load forecasting platform for facility energy management. Incorporates temperature, humidity, and occupancy data to predict 24-hour energy demand and drive pre-cooling schedule recommendations to cut peak-hour consumption."
        },
        {
            id: 3,
            title: "Agentic AI - Competitive Intelligence Monitor",
            category: "AI / Agentic Frameworks",
            technologies: "Temporal, Mistral (Ollama), Tavily, Streamlit, Python",
            github: "https://github.com/AnuragNagare/Agentic-AI-",
            description: "An autonomous AI agent that monitors competitors 24/7 and delivers structured executive briefings. Powered by Temporal for durable workflow orchestration and Mistral for intelligent analysis, it features parallel search and a live dashboard."
        },
        {
            id: 4,
            title: "HybridAlpha - Hybrid RAG Financial Analyzer",
            category: "Gen AI / FinTech",
            technologies: "Python, LangChain, Groq (Llama 3.3), ChromaDB, SQLite, Plotly",
            github: "https://github.com/AnuragNagare/HybridAlpha-Hybrid-RAG-",
            description: "A financial analysis platform built on a hybrid RAG architecture. It combines semantic vector search for qualitative data with direct SQL querying for quantitative metrics, delivering cited answers and interactive charts."
        },
        {
            id: 5,
            title: "Neural Network Visualization Tool",
            category: "AI / Deep Learning",
            technologies: "Python, PyTorch, Flask, JavaScript, HTML5 Canvas",
            github: "https://github.com/AnuragNagare/Network-Visualization-Tool",
            description: "An interactive web application providing real-time visualization of CNN layer-by-layer processing for handwritten digits drawn on an HTML5 canvas."
        }
    ],
    contact: {
        email: "anuragnagare77@gmail.com",
        github: "https://github.com/AnuragNagare",
        linkedin: "https://www.linkedin.com/in/anurag-nagare-6977681a0/"
    },
    skills: {
        develop: {
            title: "SENIOR AI / ML ENGINEER",
            description: "Generative AI, LLMs & Explainable AI",
            details: "Designing and deploying production neural network architectures including VAEs, GANs, Transformers, and LLMs (cloud and air-gapped/on-premise). Specializing in Explainable AI (SHAP, LIME), online learning pipelines, multi-agent systems, computer vision, and NLP.",
            tools: ["Generative AI (VAEs, GANs)", "LLM Fine-tuning & Air-Gapped", "Explainable AI (SHAP, LIME)", "Online Learning", "PyTorch", "TensorFlow", "Hugging Face Transformers", "Multi-Agent Architectures", "Computer Vision (YOLO, InsightFace)", "Natural Language Processing (NLP)"]
        },
        design: {
            title: "MLOPS & INFRASTRUCTURE",
            description: "Cloud deployment, pipelines & time-series optimization",
            details: "Architecting robust MLOps workflows and production cloud infrastructure on AWS. Skilled in Docker containerization, ONNX optimization, RESTful API engineering, time-series forecasting (TFT, LSTM), XGBoost/LightGBM, and hyperparameter tuning.",
            tools: ["AWS (ECS, Lambda, EC2, S3)", "Docker", "ONNX Optimization", "Temporal Fusion Transformer", "XGBoost / LightGBM", "RESTful APIs", "Hyperparameter Tuning", "ClickHouse", "Streamlit", "Gradio"]
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
    ]
};


