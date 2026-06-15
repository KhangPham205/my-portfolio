export const profile = {
  name: "Khang Pham Tuan",
  title: "Backend Engineer • AI Privacy Researcher",
  description:
    "Building scalable microservices, event-driven systems and privacy-preserving AI solutions.",
  email: "ptkhang17122005@gmail.com",
  github: "https://github.com/KhangPham205",
  linkedin:
    "https://www.linkedin.com/in/khang-ph%E1%BA%A1m-tu%E1%BA%A5n-0503b5286/",
  // Ảnh đại diện tròn ở section About
  avatar: "/avatar.jpg",
  // Ảnh nền cho hero landing page — đặt vào public/hero.jpg (hoặc .png, .webp)
  heroImage: "/hero.png",
};

export const experiences = [
  {
    title: "Software Intern",
    company: "GreenNode - VNG Corp",
    location: "Ho Chi Minh City",
    period: "04/2026 – now",
    logo: "logos/vng.jpg",
    description:
      "Backend development, API design and distributed systems.",
  },
  {
    title: "Researcher",
    company: "UIT InSecLab",
    location: "Ho Chi Minh City",
    period: "05/2025 – 05/2026",
    logo: "logos/inseclab.png",
    description:
      "AI Privacy, Trustworthy AI and Reliability Research.",
  },
  {
    title: "Collaborator Developer",
    company: "GamApp Studio - UIT",
    location: "Ho Chi Minh City",
    period: "03/2024 – 06/2024",
    logo: "logos/gamapp.jpg",
    description:
      "Developed games and mobile applications within the UIT student club environment.",
  },
];

export const education = [
  {
    degree: "B.Sc. Software Engineering",
    school: "UIT - VNU HCM",
    location: "Ho Chi Minh City",
    period: "2023 – 2027",
    logo: "logos/uit",
    description: "GPA 9.19/10 (4.0/4.0)",
  },
  {
    degree: "IELTS 5.5",
    school: "English Certification",
    location: "",
    period: "08/2024 – 08/2026",
    logo: "logos/british-council.svg",
    description: "English Proficiency Certificate",
  },
];

export interface Project {
  name: string;
  desc: string;
  tags: string[];
  github?: string; // link repo GitHub
  link?: string;   // link bài báo / trang tuyên dương / demo
  linkLabel?: string; // nhãn hiển thị cho link, mặc định "Article"
}

export const projects: Project[] = [
  {
    name: "FlashMile",
    desc: "Route optimization platform using OR-Tools and ETA prediction.",
    tags: ["OR-Tools", "Machine Learning", "Route Optimization", "Microservices"],
    github: "https://github.com/KhangPham205/FlashMile", // TODO: thêm link repo
  },
  {
    name: "Food Ordering System",
    desc: "Ordering and promotion platform using N-Layers Architecture.",
    tags: ["N-Layers Architecture", "Java", "Spring Boot", "PostgreSQL", "Kafka"],
    github: "https://github.com/KhangPham205/SE114.P22.Project", // TODO: thêm link repo
  },
  {
    name: "AI Social Network",
    desc: "Social platform using Neo4j and recommendation systems.",
    tags: ["Neo4j", "Graph Database", "Recommendations"],
    github: "https://github.com/KhangPham205/kt-social-network-ai-backend", // TODO: thêm link repo
  },
  // {
  //   name: "PrivacyAsst",
  //   desc: "LLM-based privacy protection and PII redaction framework.",
  //   tags: ["LLM", "Privacy", "NLP"],
  //   github: "", // TODO: thêm link repo
  //   link: "",   // TODO: thêm link bài báo
  //   linkLabel: "Paper",
  // },
];

export const techStacks = {
  Languages: ["Java", "Go", "Rust", "Python"],
  Backend: ["Spring Boot", "ASP.NET", "REST API"],
  Databases: ["PostgreSQL", "MySQL", "Neo4j", "Redis", "MongoDB", "Milvus"],
  Infrastructure: ["Kubernetes", "Docker", "Kafka", "Nginx"],
  AI: ["PyTorch", "Transformers", "Ollama"],
};

export const skills = [
  "Spring Boot",
  "Kafka",
  "Microservices",
  "Rust",
  "Go",
  "AI Privacy",
  "Neo4j",
];
