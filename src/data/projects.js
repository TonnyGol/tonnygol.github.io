// Project data - Tonny Golubitsky's portfolio
export const projects = [
  {
    id: 1,
    title: "Escape Room Booking and Management System",
    emoji: "🗝️",
    description: "Built a backend server for room booking system and a JavaFX admin desktop app, Spring Boot backend, and MySQL database. Developed a React + Vite client to display and interact with the booking calendar in real time via RESTful integration.",
    video: "https://drive.google.com/uc?export=download&id=1-C47L8lq5D-DzIE2reRaOjj7UnflYzQq",
    technologies: ["Java", "Spring Boot", "JavaFX", "React", "Vite", "JavaScript", "MySQL", "REST APIs"],
    category: "Full Stack",
    githubUrl: "https://github.com/TonnyGol/EscapeCenter-Demo",
    liveUrl: null,
    featured: true
  },
  {
    id: 2,
    title: "License Plate Scanner – Automatic Number Plate Recognition",
    emoji: "🚗",
    description: "Developed with TensorFlow and OpenCV to recognize Israeli license plates from video, converting them to strings. Implemented a client-server architecture using sockets (UDP), with a web-based client and SQL database on the server. Communication occurred via JSON, with a Flask-based interface.",
    video: "https://drive.google.com/uc?export=download&id=1Rxzo_1Nu6jVgPf_22jn_exM8oyEE_ZcB",
    technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "SQL", "Client-Server Architecture"],
    category: "Machine Learning",
    githubUrl: "https://github.com/TonnyGol/LicensePlate-Scanner",
    liveUrl: null,
    featured: true
  },
  {
    id: 3,
    title: "Battleship Hybrid Interactive Game",
    emoji: "🚢",
    description: "Developed a physical-to-digital Battleship experience bridging a sensor-equipped board with a C#/WPF digital engine via MQTT real-time communication. Implemented complex state-machine logic for ship placement validation, cross-team multiplayer architecture, and custom sprite animation caching to deliver a seamless user experience.",
    video: "/projects/battleship.mp4",
    technologies: ["C#", ".NET", "WPF", "MQTT", "Hardware-Software Integration", "State-Machine Logic", "UI Development"],
    category: "Desktop",
    githubUrl: null,
    liveUrl: null,
    featured: true
  }
];

export const skills = {
  languages: [
    { name: "Java", level: 90 },
    { name: "Python", level: 85 },
    { name: "C#", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "SQL", level: 75 }
  ],
  backend: [
    { name: "Spring Boot", level: 85 },
    { name: "REST APIs", level: 90 },
    { name: ".NET", level: 80 },
    { name: "MQTT", level: 75 },
    { name: "MySQL", level: 80 },
    { name: "Flask", level: 70 },
    { name: "Node.js", level: 70 }
  ],
  frontend: [
    { name: "React", level: 80 },
    { name: "Vite", level: 75 },
    { name: "HTML/CSS", level: 85 },
    { name: "JavaFX", level: 80 },
    { name: "WPF", level: 80 }
  ],
  devops: [
    { name: "Docker", level: 75 },
    { name: "Git/GitHub", level: 90 },
    { name: "Postman", level: 85 },
    { name: "VSCode", level: 90 },
    { name: "IntelliJ", level: 85 },
    { name: "AntiGravity", level: 80 },
    { name: "Cursor", level: 80 },
    { name: "Claude", level: 80 }
  ],
  other: [
    { name: "Machine Learning", level: 70 },
    { name: "Computer Vision", level: 70 },
    { name: "OOP Design", level: 85 },
    { name: "Hardware-Software Integration", level: 80 },
    { name: "Problem Solving", level: 90 }
  ]
};

export const socialLinks = {
  github: "https://github.com/TonnyGol",
  linkedin: "https://www.linkedin.com/in/Tonny-Golubitsky",
  email: "tonnygol101@gmail.com",
  twitter: null
};

export const personalInfo = {
  name: "Tonny Golubitsky",
  title: "Software Developer",
  phone: "+972-527808321",
  location: "Israel",
  summary: "Third-year Computer Science student with strong programming skills and a solid foundation in software engineering principles. Proficient in Java, Python, with practical experience in object-oriented design, data structures, and database systems. Skilled in working with Git, MySQL, REST APIs. Eager to contribute to development teams and grow in areas such as backend engineering, system design, and scalable application development.",
  education: [
    {
      institution: "Ashkelon Academic College",
      degree: "Bachelor's degree in Computer Science",
      period: "October 2023 - Present"
    },
    {
      institution: "Cyber Education Center",
      program: "Magshimim Program",
      period: "2017 - 2020"
    }
  ],
  military: [
    {
      unit: "Field Intelligence Corps, IDF",
      role: "Squad Commander – Staff Sergeant",
      period: "December 2020 - August 2023"
    }
  ],
  volunteering: [
    {
      organization: "\"Youth for an Equal Society\" organization",
      role: "Strategic Leadership & Volunteer Development",
      period: "2017 - 2020",
      description: "Managed the human resources team and oversaw the planning and execution of various organizational ventures. Led recruitment and marketing initiatives while designing strategic growth and expansion plans for volunteer roles."
    }
  ],
  languages: [
    { name: "Hebrew", level: "Native" },
    { name: "English", level: "Full Professional Proficiency" },
    { name: "Russian", level: "Professional Proficiency" }
  ]
};
