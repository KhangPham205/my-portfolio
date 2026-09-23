export const profile = {
  name: "Khang Pham Tuan",
  title: "Backend Engineer • AI Privacy Researcher",
  description:
    "Building scalable microservices, event-driven systems and privacy-preserving AI solutions.",
  location: "Ho Chi Minh City, Vietnam",
  email: "ptkhang17122005@gmail.com",
  github: "https://github.com/KhangPham205",
  linkedin:
    "https://www.linkedin.com/in/khang-ph%E1%BA%A1m-tu%E1%BA%A5n-0503b5286/",
  // Các đoạn giới thiệu ở section About
  about: [
    "Hello everyone, I'm a Software Engineer passionate about Backend development and building distributed systems. I'm interested in Clean Architecture, Microservices, Event-Driven Architecture with Kafka, and I constantly strive to build scalable, stable, and maintainable systems.",
    "Beyond Backend, I'm also exploring DevOps, AI Reliability, and AI Privacy, aiming to create solutions that are both efficient and trustworthy.",
  ],
};

// Các con số nổi bật hiển thị dưới Hero
export const highlights = [
  { value: "9.24", label: "GPA / 10 at UIT" },
  { value: "Silver", label: "VietFutureAward 2025" },
  { value: "3", label: "Industry & research roles" },
];

export interface Experience {
  title: string;
  company: string;
  location?: string;
  period: string;
  logo?: string; // đường dẫn trong public/, bắt đầu bằng "/"
  description: string;
}

export const experiences: Experience[] = [
  {
    title: "Software Intern",
    company: "GreenNode - VNG Corp",
    location: "Ho Chi Minh City",
    period: "04/2026 – 10/2026",
    logo: "/logos/vng.jpg",
    description:
      "Backend development, API design and distributed systems.",
  },
  {
    title: "Researcher",
    company: "UIT InSecLab",
    location: "Ho Chi Minh City",
    period: "05/2025 – 05/2026",
    logo: "/logos/inseclab.png",
    description:
      "AI Privacy, Trustworthy AI and Reliability Research.",
  },
  {
    title: "Collaborator Developer",
    company: "GamApp Studio - UIT",
    location: "Ho Chi Minh City",
    period: "03/2024 – 06/2024",
    logo: "/logos/gamapp.jpg",
    description:
      "Developed games and mobile applications within the UIT student club environment.",
  },
];

export interface Education {
  degree: string;
  school: string;
  location?: string;
  period: string;
  logo?: string;
  description: string;
}

export const education: Education[] = [
  {
    degree: "B.Sc. Software Engineering",
    school: "UIT - VNU HCM",
    location: "Ho Chi Minh City",
    period: "2023 – 2027",
    logo: "/logos/uit.avif",
    description: "GPA 9.24/10 (4.0/4.0)",
  },
];

export interface Certification {
  name: string;
  score: string;
  scoreLabel?: string; // nhãn nhỏ dưới điểm, ví dụ "Overall band"
  issuer: string;
  date: string;
  logo?: string; // logo đơn vị cấp, đường dẫn trong public/
}

export const certifications: Certification[] = [
  {
    name: "IELTS",
    score: "5.5",
    scoreLabel: "Overall band",
    issuer: "British Council",
    date: "08/2024",
    logo: "/logos/british-council.svg",
  },
];

export interface Project {
  name: string;
  desc: string;
  tags: string[];
  github?: string; // link repo GitHub
  link?: string;   // link bài báo / trang tuyên dương / demo
  linkLabel?: string; // nhãn hiển thị cho link, mặc định "Article"
  award?: string;  // giải thưởng, hiển thị dạng huy hiệu
  featured?: boolean; // hiển thị thẻ lớn ở đầu section Projects
}

export const projects: Project[] = [
  {
    name: "RAPP",
    desc: "A research project focusing on AI reliability and privacy at UIT InSecLab, awarded the Silver Medal at VietFutureAward 2025.",
    tags: ["AI Privacy", "Research", "VietFutureAward"],
    link: "https://vietfuture.world/danh-sach-giai-thuong-vietfuture-2025/",
    linkLabel: "VietFutureAward",
    award: "Silver Medal · VietFutureAward 2025",
    featured: true,
  },
  {
    name: "FlashMile",
    desc: "Route optimization platform using OR-Tools and ETA prediction.",
    tags: ["OR-Tools", "Machine Learning", "Route Optimization", "Microservices"],
    github: "https://github.com/KhangPham205/FlashMile",
  },
  {
    name: "Food Ordering System",
    desc: "Ordering and promotion platform using N-Layers Architecture.",
    tags: ["N-Layers Architecture", "Java", "Spring Boot", "PostgreSQL", "Kafka"],
    github: "https://github.com/KhangPham205/SE114.P22.Project",
  },
  {
    name: "AI Social Network",
    desc: "Social platform using Neo4j and recommendation systems.",
    tags: ["Neo4j", "Graph Database", "Recommendations"],
    github: "https://github.com/KhangPham205/social-network-microservices",
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

// Các chủ đề chính, hiển thị ở About và terminal trong Hero
export const skills = [
  "Spring Boot",
  "Kafka",
  "Microservices",
  "Rust",
  "Go",
  "AI Privacy"
];
