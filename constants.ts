

import { Project, Experience, Education, Skill, Certificate } from './types';

export const PERSONAL_INFO = {
  name: "Santhosh S",
  title: "Code. Create. Conquer.",
  tagline: "Web Developer - Building Smart, Scalable, and Innovative Solutions. Driven by AI, ML, and Deep Learning Innovation",
  about: "I'm a passionate and results-driven B.Tech Information Technology student with hands-on experience in web development, AI/ML projects, and real-world hackathons. With a strong academic foundation and a knack for solving complex problems, I aim to bridge the gap between technology and impactful solutions.\n\nMoreover I am keenly interested in learning and looking forward to it. I've built and contributed to projects in machine learning, web development and solving real world problems. My internships and certifications reflect a proactive learning approach and commitment to continuous growth.",
  email: "santhosh652004@gmail.com",
  phone: "9003112618",
  github: "https://github.com/santhoshs2004",
  linkedin: "https://www.linkedin.com/in/santhosh-s-10a1a3258/",
  twitter: "https://x.com/Santhos53674925",
  leetcode: "https://leetcode.com/u/Santhosh_6/",
  instagram: "https://www.instagram.com/santha_sandy2004/?next=%2F&hl=en",
  location: "Chennai, TamilNadu, India"
};

export const EXPERIENCES: Experience[] = [
  {
    id: "2",
    role: "Full Stack Development Intern",
    company: "V Plan Info Tech Private Limited , Chennai",
    period: "Jun 2024 - Jul 2024",
    description: [
      "During my internship at V Plan Info Tech, I gained hands-on exposure to frontend development using HTML, CSS, and JavaScript, while also learning effective version control practices with Git and GitHub.",
      "I worked on building user-friendly web interfaces, understanding project workflows, and debugging techniques.",
      "This experience strengthened my fundamentals in web development and improved my ability to collaborate on real-world projects in a structured environment."
    ],
    certificateLink: "https://drive.google.com/file/d/1_Q-kUOokIRvRvDkpUET7OibhqGAqqBkN/view"
  },
  {
    id: "1",
    role: "Web Developer Trainee",
    company: "NullClass Edtech Private Limited (Online)",
    period: "Jul 2024 - Aug 2024",
    description: [
      "At NullClass, I worked on developing a full-stack Stack Overflow clone, where I was responsible for designing responsive user interface components, implementing interactive features such as posting questions, submitting answers, and voting, and integrating backend functionalities.",
      "Through this project, I gained deeper insights into the React component lifecycle, state management, and full-stack development workflows, which enhanced my problem-solving and coding efficiency."
    ],
    githubLink: "https://github.com/santhoshs2004/clone-of-stack-overflow",
    certificateLink: "https://drive.google.com/file/d/1NAaIdNxNkyKyCwX6mAOc4sFqDeM_APH2/view"
  },
  {
    id: "3",
    role: "Job Simulation",
    company: "Deloitte Australia Forage (Online)",
    period: "Jul 2025",
    description: [
      "Through Deloitte's Technology Job Simulation program, I engaged in real-world consulting-based problem-solving activities involving software development, debugging, and agile methodologies.",
      "This experience helped me understand the importance of client-centric development, structured documentation, and collaborative teamwork in technology consulting.",
      "It also provided me with a practical perspective on how large-scale projects are handled in professional environments."
    ],
    githubLink: "https://github.com/santhoshs2004/Deloitte",
    certificateLink: "https://drive.google.com/file/d/1PTDymdXQznGwD24bgBOMG8XuXV1btexD/view"
  }
];

export const EDUCATION: Education[] = [
  {
    id: "1",
    degree: "B.Tech in Information Technology",
    institution: "Saveetha Engineering College, Chennai",
    year: "2022 - 2026",
    grade: "CGPA: 8.5"
  },
  {
    id: "2",
    degree: "XII - CBSE",
    institution: "Vignesh International School, Tiruvannamalai",
    year: "2020-2021",
    grade: "Percentage: 93.7%"
  },
  {
    id: "3",
    degree: "X - CBSE",
    institution: "Vignesh International School, Tiruvannamalai",
    year: "2018-2019",
    grade: "Percentage: 90%"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Disaster Management Application",
    description: "Collaborated in a team to develop a multi-modal disaster management system that delivers targeted precautionary measures and real-time rescue information based on disaster type and location. Integrated LoRa technology to enable communication in low-connectivity zones, ensuring uninterrupted access to emergency services and safety resources.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    techStack: ["HTML", "CSS", "Javascript", "Netlify", "GeoMap"],
    year: "2023",
    repoLink: "https://github.com/santhoshs2004/Mission-Rescue.git"
  },
  {
    id: "2",
    title: "Police Case Allocation Dashboard",
    description: "Created an analytical dashboard and Android application using an integrated development environment (IDE) that tracks key performance indicators (response times, crime clearance rates) across different units and locations, providing actionable insights for strategic decision-making and resource optimization.",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    techStack: ["Android Studio", "Java", "Kotlin"],
    year: "2024",
    repoLink: "https://github.com/JudeSamJ/techmavericks_KSP.git"
  },
  {
    id: "3",
    title: "Real-Time Emotion Analysis & Wellness",
    description: "Developed a model for real-time tracking of patients’ moods and behaviors to identify patterns over time. By continuously analyzing these trends, it delivers wellness recommendations tailored to individual emotional needs, like stress-relief exercises. This project significantly impacts healthcare by enabling real-time patient monitoring and providing deep insights into mental health.",
    image: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=800&auto=format&fit=crop",
    techStack: ["Machine Learning", "Deep Learning (CNN+LSTM)", "Google Colab", "Flask"],
    year: "2024",
    repoLink: "https://github.com/santhoshs2004/-A-Real-Time-Behavioral-Analysis-and-Wellness-Recommendations-.git"
  },
  {
    id: "4",
    title: "To-Do List Web App",
    description: "Full-featured task management application built with the MERN stack. Features user authentication, secure database operations with MongoDB Atlas, and a clean frontend interface for efficient task management. The backend handles API requests while React provides a smooth user experience.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "Render"],
    year: "2024",
    repoLink: "https://github.com/santhoshs2004/mern_Todo-application.git",
    demoLink: "https://mern-todo-application-9dq5.onrender.com/"
  },
  {
    id: "5",
    title: "Weather Forecasting Project",
    description: "Comparative study of forecasting models collecting temperature data from global APIs. Implements Prophet for trend analysis and LSTM for temporal dependencies. Evaluates models using MAE/RMSE metrics, backtesting, and residual diagnostics, demonstrating LSTM's superior performance over Prophet.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=800&auto=format&fit=crop",
    techStack: ["Prophet", "LSTM", "Time Series Analysis", "Python"],
    year: "2025",
    repoLink: "https://github.com/santhoshs2004/WeatherForecasting-LSTM-Prophet-.git"
  },
  {
    id: "6",
    title: "Techpreneur Hackathon",
    description: "This platform is designed to bridge the gap between fresh graduates and companies by providing an intelligent, project-centric recruitment environment. It allows graduates to showcase their academic and technical projects, while companies can discover and connect with potential candidates based on the quality and relevance of their work. The system is built using a modern full-stack architecture. The frontend, developed in React.js, provides a user-friendly interface where both graduates and company HRs can sign up, manage profiles, and interact.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop",
    techStack: ["React.js", "Firebase", "Node.js", "Express.js"],
    year: "2025",
    repoLink: "https://github.com/santhoshs2004/my-app.git"
  },
  {
    id: "7",
    title: "Guardian-Co-Pilot - Aura Drive",
    description: "AI-Enhanced Driver Wellness Monitor is a comprehensive real-time system that detects driver fatigue, distraction, and stress levels using multi-modal AI analysis. The system provides tiered, non-distracting interventions to prevent accidents before they happen. Developed for the i.Mobilathon 5.0.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop",
    techStack: ["OpenCV", "Deep Learning", "Neural Networks", "Machine Learning"],
    year: "2025",
    repoLink: "https://github.com/santhoshs2004/Guardian-Co-Pilot.git",
    demoLink: "https://guardian-co-pilot.vercel.app/"
  },
  {
    id: "8",
    title: "Canteen Management System",
    description: "A desktop-based Canteen Management System built with Python (Tkinter, ttkbootstrap, matplotlib, reportlab). This system helps manage inventory, orders, reports, and analytics in a canteen.",
    image: "https://media.istockphoto.com/id/1365404980/photo/happy-man-working-as-a-cashier-at-a-cafe.jpg?s=2048x2048&w=is&k=20&c=lQeQwC222npIk4vWZpGsvXuqKob9o9rs4mJ83QnfQU0=",
    techStack: ["Python", "Tkinter", "OOP", "Matplotlib"],
    year: "2025",
    repoLink: "https://github.com/santhoshs2004/Canteen_Management_System.git"
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Programming",
    items: [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", type: "image" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", type: "image" },
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", type: "image" },
    ]
  },
  {
    category: "MERN Stack",
    items: [
      { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", type: "image" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", type: "image" },
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", type: "image" },
      { name: "Node.js/Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", type: "image" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", type: "image" }
    ]
  },
  {
    category: "AI / ML",
    items: [
      { name: "Machine Learning Techniques", icon: "fas fa-brain", type: "icon" },
      { name: "Deep Learning Architectures", icon: "fas fa-network-wired", type: "icon" },
      { name: "Frameworks & Libraries", icon: "fas fa-layer-group", type: "icon" }
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", type: "image" },
      { name: "VSCode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", type: "image" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", type: "image" },
      { name: "Google Colab", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg", type: "image" },
      { name: "Jupyter Notebook", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg", type: "image" },
      { name: "StarUML", icon: "fas fa-sitemap", type: "icon" },
      { name: "Postman API", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", type: "image" }
    ]
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Communication", icon: "fas fa-comments", type: "icon" },
      { name: "Teamwork", icon: "fas fa-users", type: "icon" },
      { name: "Problem-solving", icon: "fas fa-puzzle-piece", type: "icon" },
      { name: "Leadership", icon: "fas fa-flag", type: "icon" },
      { name: "Time Management", icon: "fas fa-clock", type: "icon" }
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", type: "image" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", type: "image" }
    ]
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "3",
    name: "Cloud Practitioner - AWS",
    issuer: "ICT Academy",
    date: "2024",
    link: "https://drive.google.com/file/d/16esaiRx41Y0jtk7wQUxU2af9vCx5nZ29/view",
    description: "Certificate for completing AWS Cloud Practitioner training."
  },
  {
    id: "4",
    name: "Crash Course on Python",
    issuer: "Coursera",
    date: "2023",
    link: "https://drive.google.com/file/d/1kkfN2GqD-zP74B2rAOCxuJjB8GZk6xi3/view",
    description: "Certificate for completing Python programming crash course."
  },
  {
    id: "5",
    name: "ChatGPT Masterclass - AI & Prompt Engineering",
    issuer: "Udemy",
    date: "2024",
    link: "https://drive.google.com/file/d/1PcQFe7EeoudUs3Drm0NJwjYoMf7K1qN_/view",
    description: "Certificate for completing AI and Prompt Engineering masterclass."
  },
  {
    id: "6",
    name: "Introduction to Artificial Intelligence",
    issuer: "Great Learning",
    date: "2023",
    link: "https://drive.google.com/file/d/1rq_xeVthZdndfux6Ze57nIB7fuJTQaeB/view",
    description: "Certificate for completing AI fundamentals course."
  },
  {
    id: "7",
    name: "Computational Neuroscience",
    issuer: "Coursera",
    date: "2024",
    link: "https://drive.google.com/file/d/1GhAOZ4yJR0dolEh7x2bnQu6yGf01Lrd2/view",
    description: "Certificate for completing Computational Neuroscience course."
  },
  {
    id: "8",
    name: "Introduction to MongoDB for student",
    issuer: "MongoDB",
    date: "2023",
    link: "https://drive.google.com/file/d/1sgl0eJlA-DKd1eHKBcWUCaiGVJYTdcQ2/view",
    description: "Certificate for completing MongoDB fundamentals course."
  },
  {
    id: "9",
    name: "Introduction to Prompt Engineering",
    issuer: "SimpliLearn",
    date: "2025",
    link: "https://drive.google.com/file/d/17nHvcjjhAA2zibPge0tUnifYxMO4NVuT/view",
    description: "Certificate for completing Prompt Engineering course."
  },
  {
    id: "10",
    name: "Introduction to SafeTest",
    issuer: "Udemy",
    date: "2025",
    link: "https://drive.google.com/file/d/1N3hBn16M2BDucFcc8wlMWbBr_mEp0Saa/view",
    description: "Certificate for completing Netflix-backed automation tool course."
  },
  {
    id: "11",
    name: "Industrial 4.0 & IIoT",
    issuer: "NPTEL",
    date: "2024",
    link: "https://drive.google.com/file/d/11aDI6BYikj8DyqEIS5gdkIk-1sO7u-c_/view",
    description: "Certificate for completing Industrial Internet of Things course."
  },
  {
    id: "12",
    name: "IBM Machine Learning",
    issuer: "IBM",
    date: "2025",
    link: "https://drive.google.com/file/d/1qvBCI01cHZnSR0s-SfqGel8T-GEbNIiH/view",
    description: "Certificate for completing IBM Machine Learning course."
  }
];

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
  { name: "Certificates", href: "#certificates" },
];