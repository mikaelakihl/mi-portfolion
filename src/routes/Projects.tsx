import { useState } from "react";
import { useTranslation } from "react-i18next";
import { projectData } from "../data/projectData";
import { FaCss3Alt, FaHtml5, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaNpm, FaFigma, FaSass, FaDatabase, FaVuejs, FaCode, FaFilter, FaTimes, FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import { SiTypescript, SiVite, SiTailwindcss, SiExpress, SiMongodb, SiAdobephotoshop, SiVitest, SiCypress, SiClerk, SiMockserviceworker, SiPrettier, SiEslint, SiPnpm } from "react-icons/si";
import { BsCursorFill } from "react-icons/bs";

export const Projects = () => {
    const { t } = useTranslation();
    // Add state for sort order, default true for "Newest" (Descending Dates)
    const [isDescending, setIsDescending] = useState(true);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

    if (!projectData) return <div>No data available</div>;

    const toggleTech = (techName: string) => {
        setSelectedTechs((prev) =>
            prev.includes(techName)
                ? prev.filter((t) => t !== techName)
                : [...prev, techName]
        );
    };

    // Filter projects based on selected techs
    const filteredProjects = projectData.filter((project) => {
        if (selectedTechs.length === 0) return true;
        // Check if project includes ALL selected techs (AND logic)
        return selectedTechs.every((tech) =>
            project.tech.some((t) => t.toLowerCase() === tech.toLowerCase())
        );
    });

    // Sort the projects based on created_at
    const sortedProjects = [...filteredProjects].sort((a, b) => {
        const dateA = new Date(a.created_at || 0).getTime(); // Fallback to 0 if empty
        const dateB = new Date(b.created_at || 0).getTime();
        return isDescending ? dateB - dateA : dateA - dateB;
    });

    interface ITechStack {
        id: number;
        name: string;
        icon: string;
        bgColor?: string;
    }

    const iconMap: {
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

    const Icon = ({ icon }: { icon: string }) => {
        const IconComponent = iconMap[icon];
        return IconComponent ? <IconComponent size={30} /> : null;
    };

    const techStackList: ITechStack[] = [
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

    return (
        <>
            <div className="max-w-7xl mx-auto p-4">
                <h2 className="text-center font-normal text-white uppercase tracking-wider">
                    {t("sidebarCV.tech")}
                </h2>
                {isFilterOpen && (
                    <p className="text-center text-orange-400 text-sm mt-2 animate-pulse">
                        {t("projects.select_tech_to_filter_projects")}
                    </p>
                )}
                <div className="bg-gradient-to-r from-transparent via-white to-transparent h-[1px] my-6 "></div>
                {/* Updated Tech Stack List with Filter Interaction */}
                <ul className="flex flex-wrap gap-4 justify-center">
                    {techStackList.map((tech) => {
                        const isSelected = selectedTechs.includes(tech.name);
                        const isDimmed = selectedTechs.length > 0 && !isSelected;

                        return (
                            <li key={tech.id}>
                                <button
                                    onClick={() => isFilterOpen && toggleTech(tech.name)}
                                    disabled={!isFilterOpen}
                                    className={`${tech.bgColor} flex items-center gap-2 transition-all duration-300 border border-white/20
                      ${isFilterOpen
                                            ? "cursor-pointer hover:scale-110 hover:border-white/50"
                                            : "cursor-default"
                                        }
                      ${isSelected
                                            ? "ring-2 ring-white scale-110 shadow-[0_0_15px_rgba(255,255,255,0.3)] !opacity-100"
                                            : ""
                                        }
                      ${isDimmed ? "opacity-30 grayscale blur-[0.5px]" : ""}
                    `}
                                >
                                    <Icon icon={tech.icon} />
                                    <p>{tech.name}</p>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="bg-gradient-to-r from-transparent via-white to-transparent h-[1px] my-6"></div>
            <h2 className="text-center font-normal mb-8 text-white uppercase tracking-wider">
                {t("projects.my_projects")}
            </h2>
            <section className="max-w-7xl mx-auto p-4">
                <div className="flex flex-col mb-6">
                    <div className="flex justify-end gap-4 mb-4 flex-wrap">
                        {/* Filter Button */}
                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className={`flex items-center gap-2 text-white bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl shadow-lg transition-all duration-300 hover:bg-orange-400 hover:border-orange-400 hover:-translate-y-1 ${isFilterOpen ? "bg-orange-400 border-orange-400 ring-2 ring-white/50" : ""}`}
                        >
                            <span className="text-sm uppercase tracking-wider font-medium">
                                {isFilterOpen ? t("projects.done_filtering") : t("projects.filter")}
                            </span>
                            <FaFilter />
                            {selectedTechs.length > 0 && (
                                <span className="bg-white text-orange-400 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                                    {selectedTechs.length}
                                </span>
                            )}
                        </button>

                        {/* Clear Button (visible only when filters are active) */}
                        {selectedTechs.length > 0 && (
                            <button
                                onClick={() => setSelectedTechs([])}
                                className="flex items-center gap-2 text-white/70 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl shadow-lg transition-all duration-300 hover:bg-red-500/20 hover:text-white hover:border-red-500/50 hover:-translate-y-1"
                            >
                                <span className="text-sm uppercase tracking-wider font-medium">
                                    Clear
                                </span>
                                <FaTimes />
                            </button>
                        )}

                        {/* Sort Button */}
                        <button
                            onClick={() => setIsDescending(!isDescending)}
                            className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl shadow-lg transition-all duration-300 hover:bg-orange-400 hover:border-orange-400 hover:-translate-y-1"
                        >
                            <span className="text-sm uppercase tracking-wider font-medium">
                                {isDescending ? t("projects.newest") : t("projects.oldest")}
                            </span>
                            {isDescending ? <FaSortAmountDown /> : <FaSortAmountUp />}
                        </button>
                    </div>
                </div>

                <ul className="grid md:grid-cols-2 gap-8">
                    {sortedProjects.map((project) => (
                        <li key={project.id}>
                            <div className="flex flex-col gap-4 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-lg text-white h-full">
                                <h3 className=" text-xl md:text-2xl lg:text-3xl font-bold font-normal">
                                    {project.title}
                                </h3>
                                <img
                                    className="border border-2 border-white/20 rounded-xl"
                                    src={project.img?.src}
                                    alt={project.img?.alt}
                                    width={project.img?.width}
                                    height={project.img?.height}
                                />

                                <div className="flex flex-col gap-2 text-left">
                                    {project.description.map((desc, index) => (
                                        <p key={index}>{t(desc)}</p>
                                    ))}
                                </div>
                                <div className="bg-gradient-to-r from-transparent via-white to-transparent h-[1px] my-6"></div>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((techName) => {
                                        const tech = techStackList.find(
                                            (t) => t.name.toLowerCase() === techName.toLowerCase()
                                        );
                                        return (
                                            <div
                                                key={techName}
                                                className={
                                                    (tech
                                                        ? tech.bgColor
                                                        : "bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white") +
                                                    " flex items-center gap-2"
                                                }
                                            >
                                                {tech && <Icon icon={tech.icon} />}
                                                <p>{tech ? tech.name : techName}</p>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="bg-gradient-to-r from-transparent via-white to-transparent h-[1px] my-6"></div>
                                <div className="flex items-center w-full gap-2">
                                    <a
                                        className=" bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white transition-all duration-300 hover:bg-orange-400 hover:border-orange-400 hover:-translate-y-1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={project.demo}
                                    >
                                        {t("projects.view_demo")}
                                    </a>
                                    <a
                                        className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white transition-all duration-300 hover:bg-orange-400 hover:border-orange-400 hover:-translate-y-1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={project.github}
                                    >
                                        {t("projects.view_on_github")}
                                    </a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};