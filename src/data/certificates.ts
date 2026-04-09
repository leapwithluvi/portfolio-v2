export interface Certificate {
  title: string;
  issuer: string;
  issuerLogo: string;
  date: string;
  category: string;
  credentialUrl: string;
  skills: string[];
}
 
export const certificates: Certificate[] = [
  {
    title: "Introduction to Machine Learning on AWS",
    issuer: "Amazon Web Services (AWS)",
    issuerLogo: "https://www.google.com/s2/favicons?sz=128&domain=aws.amazon.com",
    date: "Dec 2025",
    category: "AI/ML",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/MN325211TLF1",
    skills: ["Machine Learning", "AWS"],
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI",
    issuerLogo: "https://www.google.com/s2/favicons?sz=128&domain=deeplearning.ai",
    date: "Dec 2025",
    category: "AI/ML",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/MLLEFGCMECWG",
    skills: ["Machine Learning", "Artificial Intelligence (AI)", "Feature Engineering"],
  },
  {
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    issuerLogo: "https://www.google.com/s2/favicons?sz=128&domain=dicoding.com",
    date: "Sep 2025",
    category: "Fundamental",
    credentialUrl: "https://www.dicoding.com/certificates/RVZKGL1EQXD5",
    skills: ["Artificial Intelligence (AI)", "Machine Learning", "Deep Learning"],
  },
  {
    title: "Kelas Python Lengkap 2025: Pemula sampai Mahir",
    issuer: "Kelas.work by Kelas.com",
    issuerLogo: "https://www.google.com/s2/favicons?sz=128&domain=kelas.work",
    date: "Sep 2025",
    category: "Fundamental",
    credentialUrl: "https://drive.google.com/file/d/1-BM7R6U0AsTfPOYHp1Hx9S4fo59nxBrA/view?pli=1",
    skills: ["Python (Programming Language)"],
  },
  {
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    issuerLogo: "https://www.google.com/s2/favicons?sz=128&domain=dicoding.com",
    date: "Apr 2026",
    category: "Fundamental",
    credentialUrl: "https://www.dicoding.com/certificates/QLZ994LK7Z5D",
    skills: ["Python (Programming Language)"],
  },
  {
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    issuerLogo: "https://www.google.com/s2/favicons?sz=128&domain=dicoding.com",
    date: "Mar 2026",
    category: "Fundamental",
    credentialUrl: "https://www.dicoding.com/certificates/JLX1VWN15Z72",
    skills: ["HTML", "CSS"],
  },
];
