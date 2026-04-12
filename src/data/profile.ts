/**
 * DATA - Profile Information
 * This is the single source of truth for your identity across the portfolio.
 */

export interface Profile {
  name: string;
  logoName: string;
  title: string;
  image: string;
  resumeUrl: string;
  education: string;
  location: {
    city: string;
    region: string;
    country: string;
    countryCode: string;
    phone: string;
  };
  greetings: string[];
}
 
export const profile: Profile = {
  // --- Basic Identity ---
  name: "Luvi Aprilyansyah Gabriel",
  logoName: "leapwithluvi",
  title: "Fullstack Web Developer & AI/ML Enthusiast",
  image: "/images/profile/me.jpeg",
  resumeUrl: "/docs/CV_Luvi_Aprilyansyah_Gabriel_Fullstack_Web_Developer.pdf",
 
  // --- Professional Context ---
  education: "SMK Negeri 1 Tenggarong",
  location: {
    city: "Kutai",
    region: "Kalimantan Timur",
    country: "Indonesia",
    countryCode: "ID",
    phone: "+6283152248722",
  },
 
  // --- UI Elements ---
  greetings: [
    "Hello",
    "Halo",
    "Bonjour",
    "Ciao",
    "Olá",
    "Jambo",
    "Namaste",
    "こんにちは",
    "你好",
    "Selamat Datang",
  ],
};