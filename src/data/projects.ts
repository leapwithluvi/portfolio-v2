/**
 * DATA - Projects
 * Showcase your best projects here. 
 * Add project details, technologies used, and repository links.
 */
export interface Project {
  nameProject: string;
  classification: string;
  deskProject: string;
  status: string;
  year: string;
  linkRepo: string;
  srcImg: string;
  imgAlt: string;
  stacks: string[];
}

export const projects: Project[] = [
  {
    nameProject: "Library Management System",
    classification: "E-Library Architecture",
    deskProject:
      "Library Management System is a web-based platform that helps users browse, search, and view information about available books in the library, allowing them to check details online before visiting and borrowing books directly from the physical library.",
    status: "Complete",
    year: "2024",
    linkRepo: "https://github.com/leapwithluvi/library-management-system",
    srcImg: "/images/projects/perpustakaan.png",
    imgAlt: "Library Management System",
    stacks: [
      "React",
      "Express.js",
      "Prisma",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Supabase",
    ],
  },
  {
    nameProject: "Nexus AI",
    classification: "Intelligent Interface",
    deskProject:
      "Nexus AI is a lightweight yet powerful assistant designed for fast, intelligent, and private conversations. Built with a modern aesthetic, it provides a seamless chat experience while maintaining a professional and generic brand identity.",
    status: "On-Going",
    year: "2024",
    linkRepo: "https://github.com/leapwithluvi/ai-chatbot",
    srcImg: "/images/projects/nexusai.png",
    imgAlt: "Nexus AI",
    stacks: [
      "Next.js",
      "NestJS",
      "Supabase",
      "Prisma",
      "Tailwind CSS",
      "TypeScript",
    ],
  },
  {
    nameProject: "Portfolio V1 - Personal Website",
    classification: "Personal Infrastructure v1",
    deskProject:
      "Portfolio is a personal website designed to showcase my projects, skills, and experience in web development. Built with Vite, React, Tailwind CSS, and Framer Motion, it features smooth animations, responsive design, and a clean modern interface.",
    status: "Complete",
    year: "2023",
    linkRepo: "https://github.com/leapwithluvi/portfolio",
    srcImg: "/images/projects/portfoliov1.png",
    imgAlt: "Portfolio",
    stacks: ["Vite", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    nameProject: "Portfolio V2 - Personal Website",
    classification: "Personal Infrastructure v2",
    deskProject:
      "Portfolio is a personal website designed to showcase my projects, skills, and experience in web development. Built with Vite, React, Tailwind CSS, and Framer Motion, it features smooth animations, responsive design, and a clean modern interface.",
    status: "Complete",
    year: "2024",
    linkRepo: "https://github.com/leapwithluvi/portfolio-next",
    srcImg: "/images/projects/portfoliov2.png",
    imgAlt: "Portfolio",
    stacks: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    nameProject: "Express TypeScript Starter",
    classification: "Backend Core v5",
    deskProject:
      "A robust and secure boilerplate for building scalable RESTful APIs. It features a layered architecture, Express 5, TypeScript, Prisma, Zod validation, and industry-standard security practices like Helmet and Rate Limiting.",
    status: "Complete",
    year: "2024",
    linkRepo: "https://github.com/leapwithluvi/express-typescript-starter",
    srcImg: "/images/projects/backend.png",
    imgAlt: "Express TypeScript Starter",
    stacks: ["Express.js", "PostgreSQL", "Prisma", "TypeScript", "Node.js"],
  },
  {
    nameProject: "OSIS President Voting System",
    classification: "Election Architecture",
    deskProject:
      "The OSIS President Voting System is a secure digital election platform developed to streamline the voting process for student council elections. It enables students to cast their votes online safely and transparently, with real-time vote counting.",
    status: "Complete",
    year: "2024",
    linkRepo: "https://github.com/leapwithluvi/ketos-voting-system",
    srcImg: "/images/projects/osis.png",
    imgAlt: "OSIS President Voting System",
    stacks: ["React", "Express.js", "MongoDB", "Prisma", "Tailwind CSS"],
  },
];

