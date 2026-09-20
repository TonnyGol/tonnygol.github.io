// Project data - Tonny Golubitsky's portfolio
export const projects = [
  {
    id: 1,
    title: "License Plate Scanner – Automatic Number Plate Recognition",
    emoji: "🚗",
    description: "Architected a distributed client-server system over UDP sockets with JSON serialization, routing live video at 30 FPS through a TensorFlow / OpenCV inference pipeline (5–10 FPS during active detection). Built a Flask REST API backend persisting recognition events to a SQL database, achieving 85–90% character-level accuracy on Israeli plates trained on a 300-image dataset.",
    video: "https://drive.google.com/uc?export=download&id=1Rxzo_1Nu6jVgPf_22jn_exM8oyEE_ZcB",
    technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "UDP Sockets", "SQL"],
    category: "Machine Learning",
    githubUrl: "https://github.com/TonnyGol/LicensePlate-Scanner",
    liveUrl: null,
    featured: true
  },
  {
    id: 2,
    title: "IntrusionSense IDS",
    emoji: "🛡️",
    description: "Built a real-time packet capture engine (Python / Scapy) monitoring live TCP/IP traffic through a two-stage pipeline: a Decision Tree binary triage (normal / suspicious) feeding into a Random Forest 6-class attack type classifier (Pandas), achieving 93–100% precision across 6 attack categories with sub-500ms alert latency on live network flows.",
    video: null,
    technologies: ["Python", "Scapy", "Pandas", "Random Forest", "TCP/IP"],
    category: "Cyber Security",
    githubUrl: null,
    liveUrl: null,
    featured: true
  },
  {
    id: 3,
    title: "Escape Room Booking and Management System",
    emoji: "🗝️",
    description: "Engineered a Spring Boot RESTful backend with a normalized MySQL schema and a JavaFX admin client, exposing 6 REST endpoints to manage real-time booking state across room configurations. Developed a React + Vite SPA consuming the REST APIs, delivering a live booking calendar with real-time room availability rendering for operators.",
    video: "https://drive.google.com/uc?export=download&id=1-C47L8lq5D-DzIE2reRaOjj7UnflYzQq",
    technologies: ["Java", "Spring Boot", "MySQL", "JavaFX", "React", "REST APIs"],
    category: "Full Stack",
    githubUrl: "https://github.com/TonnyGol/EscapeCenter-Demo",
    liveUrl: null,
    featured: true
  },
  {
    id: 4,
    title: "Battleship Hybrid Interactive Game",
    emoji: "🚢",
    description: "Architected a hardware-software bridge connecting a 50-cell sensor-equipped physical Battleship board to a C#/WPF digital engine via MQTT, synchronizing real-time game state across physical and digital layers. Implemented a 5-state machine covering ship placement validation and 2-team multiplayer logic, with custom sprite animation caching for smooth UI rendering across all game states.",
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
    { name: "Flask", level: 70 },
    { name: "MySQL", level: 80 },
    { name: "MQTT", level: 75 },
    { name: "Pandas", level: 75 },
    { name: "Scapy", level: 70 }
  ],
  frontend: [
    { name: "React", level: 80 },
    { name: "Vite", level: 75 },
    { name: "JavaFX", level: 80 },
    { name: "WPF", level: 80 }
  ],
  devops: [
    { name: "Git/GitHub", level: 90 },
    { name: "Docker", level: 75 },
    { name: "Postman", level: 85 },
    { name: "Agile", level: 80 }
  ],
  other: [
    { name: "OOP", level: 85 },
    { name: "System Design", level: 75 },
    { name: "HTTP/HTTPS", level: 85 },
    { name: "JSON", level: 90 },
    { name: "Machine Learning", level: 70 },
    { name: "Computer Vision", level: 70 }
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
  summary: "Computer Science student (GPA 89) with hands-on experience building distributed systems, REST APIs, machine-learning pipelines, and hardware-integrated applications in Java, Python, JavaScript, and C#. Eager to contribute to engineering teams in backend development, system design, and scalable applications.",
  education: [
    {
      institution: "Ashkelon Academic College",
      degree: "B.Sc. in Computer Science",
      period: "October 2023 - Present",
      gpa: 89,
      courses: ["Data Structures", "OOP 1 & 2", "Databases", "Algorithms 1 & 2", "Operating Systems", "Networks"]
    },
    {
      institution: "Cyber Education Center",
      program: "Magshimim Program",
      period: "January 2017 - January 2020"
    }
  ],
  military: [
    {
      unit: "Field Intelligence Corps, IDF",
      role: "Squad Commander – Staff Sergeant",
      period: "December 2020 - August 2023",
      highlights: [
        "Led and managed a 6-person squad, coordinating real-time mission objectives, logistics, and personnel across high-pressure operational environments.",
        "Released as Staff Sergeant following a 3-year service, demonstrating sustained leadership reliability and mission-critical judgment."
      ]
    }
  ],
  languages: [
    { name: "Hebrew", level: "Native" },
    { name: "English", level: "Full Professional Proficiency" },
    { name: "Russian", level: "Professional Proficiency" }
  ]
};
