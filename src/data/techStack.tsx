import {
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaFigma,
  FaSass,
  FaDatabase,
  FaVuejs,
  FaCode,
} from "react-icons/fa";
import {
  SiTypescript,
  SiVite,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiAdobephotoshop,
  SiVitest,
  SiCypress,
  SiClerk,
  SiMockserviceworker,
  SiPrettier,
  SiEslint,
  SiPnpm,
} from "react-icons/si";
import { BsCursorFill } from "react-icons/bs";

export interface ITechStack {
  id: number;
  name: string;
  icon: string;
  bgColor?: string;
}

export const iconMap: {
  [key: string]: React.ComponentType<{ size?: number | string }>;
} = {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  SiTypescript,
  FaReact,
  SiVite,
  SiTailwindcss,
  FaNodeJs,
  SiExpress,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaFigma,
  FaSass,
  FaDatabase,
  SiMongodb,
  SiAdobephotoshop,
  BsCursorFill,
  SiVitest,
  FaVuejs,
  SiPrettier,
  SiEslint,
  SiCypress,
  SiPnpm,
  SiClerk,
  SiMockserviceworker,
  FaCode,
};

export const Icon = ({ icon }: { icon: string }) => {
  const IconComponent = iconMap[icon];
  return IconComponent ? <IconComponent size={30} /> : null;
};

export const techStackList: ITechStack[] = [
  {
    id: 1,
    name: "HTML",
    icon: "FaHtml5",
    bgColor:
      "bg-orange-500/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white",
  },
  {
    id: 2,
    name: "CSS",
    icon: "FaCss3Alt",
    bgColor:
      "bg-indigo-500/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: "FaJs",
    bgColor:
      "bg-yellow-500/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white",
  },
  {
    id: 4,
    name: "TypeScript",
    icon: "SiTypescript",
    bgColor:
      "bg-indigo-600/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white",
  },
  {
    id: 5,
    name: "React",
    icon: "FaReact",
    bgColor:
      "bg-black/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white",
  },
  {
    id: 6,
    name: "Vite",
    icon: "SiVite",
    bgColor:
      "bg-purple-500/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white",
  },
  {
    id: 7,
    name: "Tailwind",
    icon: "SiTailwindcss",
    bgColor:
      "bg-cyan-400/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white",
  },
  {
    id: 8,
    name: "Node.js",
    icon: "FaNodeJs",
    bgColor:
      "bg-lime-500/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white",
  },
  {
    id: 9,
    name: "Express",
    icon: "SiExpress",
    bgColor:
      "bg-slate-700/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white",
  },
  {
    id: 10,
    name: "Vitest",
    icon: "SiVitest",
    bgColor:
      "bg-yellow-500/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white",
  },
  {
    id: 11,
    name: "GitHub",
    icon: "FaGithub",
    bgColor:
      "bg-black/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white",
  },
  {
    id: 12,
    name: "NPM",
    icon: "FaNpm",
    bgColor:
      "bg-red-500/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white",
  },
  {
    id: 13,
    name: "Figma",
    icon: "FaFigma",
    bgColor:
      "bg-orange-600/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white",
  },
  {
    id: 14,
    name: "Sass",
    icon: "FaSass",
    bgColor:
      "bg-pink-500/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white",
  },
  {
    id: 15,
    name: "SQL",
    icon: "FaDatabase",
    bgColor:
      "bg-sky-600/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white",
  },
  {
    id: 16,
    name: "MongoDB",
    icon: "SiMongodb",
    bgColor:
      "bg-emerald-500/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white",
  },
  {
    id: 17,
    name: "Adobe Photoshop",
    icon: "SiAdobephotoshop",
    bgColor:
      "bg-sky-400/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white",
  },
  {
    id: 18,
    name: "Cursor",
    icon: "BsCursorFill",
    bgColor:
      "bg-black/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white",
  },
  {
    id: 19,
    name: "Cypress",
    icon: "SiCypress",
    bgColor:
      "bg-gray-300/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white",
  },
  {
    id: 20,
    name: "Vue",
    icon: "FaVuejs",
    bgColor:
      "bg-cyan-900/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white",
  },
  {
    id: 21,
    name: "Prettier",
    icon: "SiPrettier",
    bgColor:
      "bg-black/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white",
  },
  {
    id: 22,
    name: "EsLint",
    icon: "SiEslint",
    bgColor:
      "bg-purple-950/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white",
  },
  {
    id: 23,
    name: "Pnpm",
    icon: "SiPnpm",
    bgColor:
      "bg-stone-700/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white",
  },
  {
    id: 24,
    name: "Clerk",
    icon: "SiClerk",
    bgColor:
      "bg-purple-600/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white",
  },
  {
    id: 25,
    name: "i18n",
    icon: "FaCode",
    bgColor:
      "bg-teal-500/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white",
  },
  {
    id: 26,
    name: "MSW",
    icon: "FaCode",
    bgColor:
      "bg-orange-500/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white",
  },
];

const defaultBadgeStyle =
  "bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white";

export const TechBadge = ({ name }: { name: string }) => {
  const tech = techStackList.find(
    (t) => t.name.toLowerCase() === name.toLowerCase(),
  );
  return (
    <div className={(tech ? tech.bgColor : defaultBadgeStyle) + " flex items-center gap-2"}>
      {tech && <Icon icon={tech.icon} />}
      <p>{tech ? tech.name : name}</p>
    </div>
  );
};
