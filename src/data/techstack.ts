type TechCategory =
    | "language"
    | "frontend"
    | "backend"
    | "database" // Khusus Engine DB
    | "devops"   // Ganti tools menjadi lebih spesifik (Vercel, Railway, Git)
    | "library"  // Untuk tools pendukung seperti Prisma, Framer, dll
    | "ai_ml";

interface TechStack {
    name: string;
    category: TechCategory;
    type: string;
    logo: string;
    url: string;
}

export const techStack: TechStack[] = [
  // --- LANGUAGES ---
  {
    name: "JavaScript",
    category: "language",
    type: "Programming Language",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    category: "language",
    type: "Programming Language",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "Python",
    category: "language",
    type: "Programming Language",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    url: "https://www.python.org/",
  },

  // --- FRONTEND ---
  {
    name: "React",
    category: "frontend",
    type: "JavaScript Library",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    url: "https://react.dev/",
  },
  {
    name: "NextJS",
    category: "frontend",
    type: "React Framework",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    url: "https://nextjs.org/",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    type: "CSS Framework",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    url: "https://tailwindcss.com/",
  },
  {
    name: "Bootstrap",
    category: "frontend",
    type: "CSS Framework",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    url: "https://getbootstrap.com/",
  },

  // --- BACKEND ---
  {
    name: "NodeJS",
    category: "backend",
    type: "JavaScript Runtime",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    url: "https://nodejs.org/en",
  },
  {
    name: "ExpressJS",
    category: "backend",
    type: "Web Framework",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    url: "https://expressjs.com/",
  },
  {
    name: "NestJS",
    category: "backend",
    type: "Web Framework",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
    url: "https://nestjs.com/",
  },

  // --- DATABASE ---
  {
    name: "MySQL",
    category: "database",
    type: "Database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    url: "https://www.mysql.com/",
  },
  {
    name: "PostgreSQL",
    category: "database",
    type: "Database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    url: "https://www.postgresql.org/",
  },
  {
    name: "MongoDB",
    category: "database",
    type: "Database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
    url: "https://www.mongodb.com/",
  },

  // --- LIBRARIES & ORM ---
  {
    name: "Prisma",
    category: "library",
    type: "ORM",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    url: "https://www.prisma.io/",
  },
  {
    name: "Supabase",
    category: "database",
    type: "Database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    url: "https://supabase.com/",
  },

  // --- DEVOPS & TOOLS ---
  {
    name: "GitHub",
    category: "devops",
    type: "Git Hosting Platform",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    url: "https://github.com/",
  },
  {
    name: "Git",
    category: "devops",
    type: "Version Control",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    url: "https://git-scm.com/",
  },
  {
    name: "Postman",
    category: "devops",
    type: "API Development",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    url: "https://www.postman.com/",
  },
  {
    name: "Vercel",
    category: "devops",
    type: "Cloud Platform",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    url: "https://vercel.com/",
  },
  {
    name: "Railway",
    category: "devops",
    type: "Cloud Platform",
    logo: "https://railway.com/brand/logo-dark.svg",
    url: "https://railway.app/",
  },

  // --- AI & ML ---
  {
    name: "PyTorch",
    category: "ai_ml",
    type: "Machine Learning Framework",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
    url: "https://pytorch.org/",
  },
  {
    name: "TensorFlow",
    category: "ai_ml",
    type: "Machine Learning Framework",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
    url: "https://www.tensorflow.org/",
  },
  {
    name: "Scikit-learn",
    category: "ai_ml",
    type: "Machine Learning Library",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
    url: "https://scikit-learn.org/",
  },
  {
    name: "Keras",
    category: "ai_ml",
    type: "Deep Learning API",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg",
    url: "https://keras.io/",
  },
  {
    name: "NumPy",
    category: "ai_ml",
    type: "Scientific Computing Library",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
    url: "https://numpy.org/",
  },
  {
    name: "SciPy",
    category: "ai_ml",
    type: "Scientific Computing Library",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/SCIPY_2.svg",
    url: "https://scipy.org/",
  },
  {
    name: "Pandas",
    category: "ai_ml",
    type: "Data Analysis Library",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
    url: "https://pandas.pydata.org/",
  },
  {
    name: "Matplotlib",
    category: "ai_ml",
    type: "Data Visualization Library",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",
    url: "https://matplotlib.org/",
  },
  {
    name: "Seaborn",
    category: "ai_ml",
    type: "Data Visualization Library",
    logo: "https://seaborn.pydata.org/_static/logo-mark-lightbg.svg",
    url: "https://seaborn.pydata.org/",
  },
  {
    name: "OpenCV",
    category: "ai_ml",
    type: "Computer Vision Library",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
    url: "https://opencv.org/",
  },
  {
    name: "Google Colab",
    category: "ai_ml",
    type: "Cloud Notebook Environment",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecolab/googlecolab-original.svg",
    url: "https://colab.research.google.com/",
  },
  {
    name: "Jupyter Notebook",
    category: "ai_ml",
    type: "Data Science Environment",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original-wordmark.svg",
    url: "https://jupyter.org/",
  },
  {
    name: "Kaggle",
    category: "ai_ml",
    type: "Data Science Platform",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kaggle/kaggle-original.svg",
    url: "https://www.kaggle.com/",
  },
  {
    name: "Hugging Face",
    category: "ai_ml",
    type: "AI/ML Platform",
    logo: "https://cdn.jsdelivr.net/npm/simple-icons@12/icons/huggingface.svg",
    url: "https://huggingface.co/",
  },
  {
    name: "Ollama",
    category: "ai_ml",
    type: "Local LLM Framework",
    logo: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/ollama.svg",
    url: "https://ollama.com/",
  },
];

export interface Skill {
  title: string;
  category: TechCategory | TechCategory[];
  icon: string; // lucide icon name or type
  skills: string[];
}

export const skills: Skill[] = [
  {
    title: "Front-End",
    category: "frontend",
    icon: "LayoutPanelLeft",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Bootstrap", "Framer Motion"],
  },
  {
    title: "Back-End",
    category: ["backend", "database", "library"],
    icon: "Cpu",
    skills: ["Node.js", "Express.js", "NestJS", "PostgreSQL", "MySQL", "Supabase", "Prisma"],
  },
  {
    title: "AI & ML",
    category: "ai_ml",
    icon: "Network",
    skills: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Pandas", "NumPy"],
  },
  {
    title: "Infrastructure",
    category: "devops",
    icon: "ShieldCheck",
    skills: ["Git", "GitHub", "Vercel", "Railway", "Docker", "Postman"],
  },
];
