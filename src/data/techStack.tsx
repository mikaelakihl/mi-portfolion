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
  /** Background tint only (e.g. "bg-orange-500/10") — combine with `filterChipBase` for the interactive filter chips. */
  tint: string;
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

export const Icon = ({ icon, size = 30 }: { icon: string; size?: number }) => {
  const IconComponent = iconMap[icon];
  return IconComponent ? <IconComponent size={size} /> : null;
};

export const techStackList: ITechStack[] = [
  { id: 1, name: "HTML", icon: "FaHtml5", tint: "bg-orange-500/10" },
  { id: 2, name: "CSS", icon: "FaCss3Alt", tint: "bg-indigo-500/10" },
  { id: 3, name: "JavaScript", icon: "FaJs", tint: "bg-yellow-500/10" },
  { id: 4, name: "TypeScript", icon: "SiTypescript", tint: "bg-indigo-600/10" },
  { id: 5, name: "React", icon: "FaReact", tint: "bg-black/10" },
  { id: 6, name: "Vite", icon: "SiVite", tint: "bg-purple-500/10" },
  { id: 7, name: "Tailwind", icon: "SiTailwindcss", tint: "bg-cyan-400/10" },
  { id: 8, name: "Node.js", icon: "FaNodeJs", tint: "bg-lime-500/10" },
  { id: 9, name: "Express", icon: "SiExpress", tint: "bg-slate-700/10" },
  { id: 10, name: "Vitest", icon: "SiVitest", tint: "bg-yellow-500/10" },
  { id: 11, name: "GitHub", icon: "FaGithub", tint: "bg-black/10" },
  { id: 12, name: "NPM", icon: "FaNpm", tint: "bg-red-500/10" },
  { id: 13, name: "Figma", icon: "FaFigma", tint: "bg-orange-600/10" },
  { id: 14, name: "Sass", icon: "FaSass", tint: "bg-pink-500/10" },
  { id: 15, name: "SQL", icon: "FaDatabase", tint: "bg-sky-600/10" },
  { id: 16, name: "MongoDB", icon: "SiMongodb", tint: "bg-emerald-500/10" },
  { id: 17, name: "Adobe Photoshop", icon: "SiAdobephotoshop", tint: "bg-sky-400/10" },
  { id: 18, name: "Cursor", icon: "BsCursorFill", tint: "bg-black/10" },
  { id: 19, name: "Cypress", icon: "SiCypress", tint: "bg-gray-300/10" },
  { id: 20, name: "Vue", icon: "FaVuejs", tint: "bg-cyan-900/10" },
  { id: 21, name: "Prettier", icon: "SiPrettier", tint: "bg-black/10" },
  { id: 22, name: "EsLint", icon: "SiEslint", tint: "bg-purple-950/10" },
  { id: 23, name: "Pnpm", icon: "SiPnpm", tint: "bg-stone-700/10" },
  { id: 24, name: "Clerk", icon: "SiClerk", tint: "bg-purple-600/10" },
  { id: 25, name: "i18n", icon: "FaCode", tint: "bg-teal-500/10" },
  { id: 26, name: "MSW", icon: "FaCode", tint: "bg-orange-500/10" },
];

/** Shared look for the interactive tech filter chips (Projects page). Combine with a tech's `tint`. */
export const filterChipBase =
  "inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/15 backdrop-blur-sm text-white text-sm";

/** Flat, read-only tech tag — used to list a project's stack without the heavier "chip" treatment. */
export const TechBadge = ({ name }: { name: string }) => {
  const tech = techStackList.find(
    (t) => t.name.toLowerCase() === name.toLowerCase(),
  );
  return (
    <span className="inline-flex items-center gap-1.5 text-white/70 text-sm">
      {tech && <Icon icon={tech.icon} size={16} />}
      {tech ? tech.name : name}
    </span>
  );
};
