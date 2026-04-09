export interface Project {
  nameProject: string;
  typeProject: string;
  deskProject: string;
  status: string;
  linkRepo: string;
  srcImg: string;
  imgAlt: string;
  stacks: string[];
}

export const projects: Project[] = [
    {
      nameProject: "Library Management System",
      typeProject: "Website",
      deskProject:
        "Library Management System is a web-based platform that helps users browse, search, and view information about available books in the library, allowing them to check details online before visiting and borrowing books directly from the physical library.",
      status: "Complete",
      linkRepo: "https://github.com/leapwithluvi/library-management-system",
      srcImg: "/images/perpustakaan.png",
      imgAlt: "Library Management System",
      stacks: ["Vite", "React", "Tailwind CSS", "Express.js", "Supabase", "Prisma", "TypeScript"],
    },
    {
      nameProject: "Portfolio V1 - Personal Website",
      typeProject: "Website",
      deskProject:
        "Portfolio is a personal website designed to showcase my projects, skills, and experience in web development. Built with Vite, React, Tailwind CSS, and Framer Motion, it features smooth animations, responsive design, and a clean modern interface.",
      status: "Complete",
      linkRepo: "https://github.com/leapwithluvi/portfolio",
      srcImg: "/images/portfolio.png",
      imgAlt: "Portfolio",
      stacks: ["Vite", "React", "Tailwind CSS", "TypeScript"],
    },
    {
      nameProject: "Express TypeScript Starter",
      typeProject: "Backend / Boilerplate",
      deskProject:
        "A robust and secure boilerplate for building scalable RESTful APIs. It features a layered architecture, Express 5, TypeScript, Prisma, Zod validation, and industry-standard security practices like Helmet and Rate Limiting.",
      status: "Complete",
      linkRepo: "https://github.com/leapwithluvi/express-typescript-starter",
      srcImg: "/images/backend.png",
      imgAlt: "Express TypeScript Starter",
      stacks: ["Express.js", "Node.js", "PostgreSQL", "Prisma", "TypeScript"],
    },
    {
      nameProject: "Nexus AI",
      typeProject: "Website",
      deskProject:
        "Nexus AI is a lightweight yet powerful assistant designed for fast, intelligent, and private conversations. Built with a modern aesthetic, it provides a seamless chat experience while maintaining a professional and generic brand identity.",
      status: "On-Going",
      linkRepo: "https://github.com/leapwithluvi/ai-chatbot",
      srcImg: "/images/nexusai.png",
      imgAlt: "Nexus AI",
      stacks: ["Vite", "React", "Gemini API", "Tailwind CSS", "Express.js", "PostgreSQL", "Prisma", "TypeScript"],
    },
    {
      nameProject: "OSIS President Voting System",
      typeProject: "Website",
      deskProject:
        "The OSIS President Voting System is a secure digital election platform developed to streamline the voting process for student council elections. It enables students to cast their votes online safely and transparently, with real-time vote counting.",
      status: "Complete",
      linkRepo: "https://github.com/leapwithluvi/ketos-voting-system",
      srcImg: "/images/osis.png",
      imgAlt: "OSIS President Voting System",
      stacks: ["React", "Express.js", "MongoDB", "Prisma", "Tailwind CSS"],
    },
];

