import { skills } from "./techstack";

/**
 * DATA - Contact JSON
 * Dynamically linked to techstack.ts to ensure data consistency.
 */
export const contactJsonData = {
  name: "Luvi Aprilyansyah Gabriel",
  role: "Fullstack Web Developer",
  status: "Available for Projects",
  location: "Indonesia",
  contact: {
    email: "luviaprilyansyahgabriel@gmail.com",
    github: "leapwithluvi",
    linkedin: "luviaprilyansyahgabriel",
    instagram: "byl.rooks",
    x: "itsluvi13",
  },
  // Dynamically generated from techstack.ts
  stack: skills.reduce((acc: any, skill) => {
    const key = skill.title.toLowerCase().replace("-", "").replace(" & ", "_").replace(" ", "_");
    acc[key] = skill.skills;
    return acc;
  }, {})
};
