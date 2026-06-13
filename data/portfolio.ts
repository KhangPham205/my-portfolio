export const profile = {
  name: "Khang Phạm Tuấn",
  title: "Backend Engineer • AI Privacy Researcher",
  description:
    "Building scalable microservices, event-driven systems and privacy-preserving AI solutions.",
  email: "ptkhang17122005@gmail.com",
  github: "https://github.com/KhangPham205",
  linkedin:
    "https://www.linkedin.com/in/khang-ph%E1%BA%A1m-tu%E1%BA%A5n-0503b5286/",
};

export const experiences = [
  {
    title: "Software Intern",
    company: "VNG Corporation",
    location: "TP. Hồ Chí Minh",
    description:
      "Backend development, API design and distributed systems.",
  },
  {
    title: "Researcher",
    company: "InSecLab",
    location: "",
    description:
      "AI Privacy, Trustworthy AI and Reliability Research.",
  },
  {
    title: "B.Sc. Software Engineering",
    company: "UIT - VNU HCM",
    location: "2023 - 2027",
    description: "GPA 9.19/10 (4.0/4.0)",
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
  Databases: ["PostgreSQL", "MySQL", "Neo4j", "Redis"],
  Infrastructure: ["Docker", "Kafka", "Nginx"],
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
