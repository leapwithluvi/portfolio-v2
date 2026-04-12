import { profile } from "./profile";
import { socials } from "./socials";
import { techStack, skills } from "./techstack";
import { projects } from "./projects";
import { experiences } from "./experience";

/**
 * DATA - SEO Metadata
 * Dynamically generated from your profile and other data files.
 */
const latestExperience = experiences[0];

export const seo = {
    title: `${profile.name} | ${profile.title}`,
    description: "Specialized in building full-scale web solutions using modern frameworks and performance-driven architectures. A Software Engineering student from Kutai Kartanegara committed to professional-grade development.",
    keywords: `${profile.name}, Software Engineering, SMK Negeri 1 Tenggarong, SMKN 1 Tenggarong, SMK 1 Tenggarong, Tenggarong, Kutai Kartanegara, Programmer Tenggarong, Siswa SMKN 1 Tenggarong, Borneo Developer, Fullstack Web Developer, AI Engineer, ${latestExperience.company}, ${techStack.map(s => s.name).join(", ")}, Portfolio`,
    author: profile.name,
    url: "https://luvi.my.id",
    image: profile.image,
    icon: "/images/branding/icon.png",
    twitterHandle: `@${socials.find(s => s.name === "X")?.href.split("/").pop() || "itsluvi13"}`,
}

// Full JSON-LD schema for SEO (Enterprise Level)
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.logoName,
  url: seo.url,
  image: `${seo.url}${profile.image}`,
  sameAs: socials.map((s) => s.href),
  jobTitle: latestExperience.role,
  worksFor: [
    {
      "@type": "Organization",
      name: latestExperience.company,
      url: "https://www.rivoltatech.com",
      location: {
        "@type": "Place",
        name: latestExperience.location,
      },
    },
  ],
  affiliation: [
    {
      "@type": "EducationalOrganization",
      name: profile.education,
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.location.city,
    addressRegion: profile.location.region,
    addressCountry: profile.location.countryCode,
  },
  description: seo.description,
  knowsAbout: [
    "Software Engineering",
    "Computer Science",
    "Web Development",
    "Fullstack Development",
    ...techStack.map((s) => s.name),
    ...skills.map((s) => s.titleKey),
  ],
};

// Project specific schemas
export const projectJsonLd = projects.map(project => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.nameProject,
    "description": `${project.deskProject} Developed by ${profile.name} at ${profile.education}.`,
    "url": project.linkRepo,
    "image": `${seo.url}${project.srcImg}`,
    "author": {
        "@type": "Person",
        "name": profile.name
    },
    "keywords": project.stacks.join(", ")
}));

// Professional Service Schema (Enterprise-grade)
export const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `${profile.name} - Software Development Services`,
    "description": "High-end Fullstack Web Development, AI Integration, and Digital Solutions provider.",
    "url": seo.url,
    "image": `${seo.url}${profile.image}`,
    "address": {
        "@type": "PostalAddress",
        "addressLocality": profile.location.city,
        "addressRegion": profile.location.region,
        "addressCountry": profile.location.countryCode
    },
    "priceRange": "$$",
    "telephone": profile.location.phone,
    "openingHours": "Mo-Fr 09:00-17:00"
};