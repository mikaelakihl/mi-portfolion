import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { projectData } from "../data/projectData";
import { techStackList, filterChipBase, Icon, TechBadge } from "../data/techStack";
import {
    FaFilter,
    FaTimes,
    FaSortAmountDown,
    FaSortAmountUp,
    FaGithub,
    FaExternalLinkAlt,
    FaLongArrowAltRight,
} from "react-icons/fa";
import type { IProject } from "../types/project";

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

    // Featured projects get the bigger card with inline description/tech/links.
    // Everything else is an early school project shown as a simple image+title thumbnail.
    const newProjects = sortedProjects.filter((project) => project.featured);
    const legacyProjects = sortedProjects.filter((project) => !project.featured);

    return (
        <>
            <section className="max-w-7xl mx-auto p-4">
                <h2 className="text-center font-normal mb-8 text-white uppercase tracking-wider">
                    {t("projects.my_projects")}
                </h2>
                <div className="bg-gradient-to-r from-transparent via-white to-transparent h-[1px] my-6"></div>

                {isFilterOpen && (
                    <p className="text-center text-orange-400 text-sm mb-4 animate-pulse">
                        {t("projects.select_tech_to_filter_projects")}
                    </p>
                )}
                {/* Tech stack list, doubles as a filter for the projects below */}
                <ul className="flex flex-wrap gap-4 justify-center mb-6">
                    {techStackList.map((tech) => {
                        const isSelected = selectedTechs.includes(tech.name);
                        const isDimmed = selectedTechs.length > 0 && !isSelected;

                        return (
                            <li key={tech.id}>
                                <button
                                    onClick={() => isFilterOpen && toggleTech(tech.name)}
                                    disabled={!isFilterOpen}
                                    className={`${filterChipBase} ${tech.tint} transition-all duration-300
                      ${isFilterOpen
                                            ? "cursor-pointer hover:border-white/40"
                                            : "cursor-default"
                                        }
                      ${isSelected
                                            ? "ring-2 ring-white !opacity-100"
                                            : ""
                                        }
                      ${isDimmed ? "opacity-30 grayscale" : ""}
                    `}
                                >
                                    <Icon icon={tech.icon} size={18} />
                                    <p>{tech.name}</p>
                                </button>
                            </li>
                        );
                    })}
                </ul>

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

                {newProjects.length > 0 && (
                    <div className="mb-12">
                        <ul className="grid md:grid-cols-2 gap-8">
                            {newProjects.map((project) => (
                                <FeaturedProjectCard key={project.id} project={project} t={t} />
                            ))}
                        </ul>
                    </div>
                )}

                {legacyProjects.length > 0 && (
                    <div>
                        <h3 className="text-white/60 text-sm uppercase tracking-wider mb-4">
                            {t("projects.early_projects_heading")}
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {legacyProjects.map((project) => (
                                <LegacyProjectCard key={project.id} project={project} />
                            ))}
                        </ul>
                    </div>
                )}
            </section>
        </>
    );
};

const FeaturedProjectCard = ({
    project,
    t,
}: {
    project: IProject;
    t: (key: string) => string;
}) => (
    <li>
        <div className="flex flex-col gap-5 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-lg text-white h-full">
            <Link to={`/projects/${project.slug}`} className="flex flex-col gap-5 group">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold group-hover:text-orange-400 transition-colors">
                    {project.title}
                </h3>
                {project.img && (
                    <img
                        className="border-2 border-white/20 rounded-xl"
                        src={project.img.src}
                        alt={project.img.alt}
                        width={project.img.width}
                        height={project.img.height}
                    />
                )}
            </Link>

            <div className="flex flex-col gap-2 text-left">
                {project.description.map((desc, index) => (
                    <p key={index}>{t(desc)}</p>
                ))}
            </div>
            {project.tech.length > 0 && (
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {project.tech.map((techName) => (
                        <TechBadge key={techName} name={techName} />
                    ))}
                </div>
            )}
            <div className="flex items-center w-full gap-x-6 gap-y-2 flex-wrap text-sm">
                {project.demo && (
                    <a
                        className="inline-flex items-center gap-1.5 text-white/80 hover:text-orange-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.demo}
                    >
                        {t("projects.view_demo")} <FaExternalLinkAlt size={12} />
                    </a>
                )}
                {project.github && (
                    <a
                        className="inline-flex items-center gap-1.5 text-white/80 hover:text-orange-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={project.github}
                    >
                        {t("projects.view_on_github")} <FaGithub size={14} />
                    </a>
                )}
                {project.links?.map((link) => (
                    <a
                        key={link.url}
                        className="inline-flex items-center gap-1.5 text-white/80 hover:text-orange-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={link.url}
                    >
                        {t(link.label)} <FaExternalLinkAlt size={12} />
                    </a>
                ))}
                <Link
                    className="inline-flex items-center gap-1.5 italic text-white/80 hover:text-orange-400 transition-colors"
                    to={`/projects/${project.slug}`}
                >
                    {t("projects.read_more")} <FaLongArrowAltRight />
                </Link>
            </div>
        </div>
    </li>
);

const LegacyProjectCard = ({ project }: { project: IProject }) => (
    <li>
        <Link to={`/projects/${project.slug}`} className="flex flex-col gap-2 group">
            <div className="aspect-square overflow-hidden rounded-lg relative">
                {project.img ? (
                    <img
                        src={project.img.src}
                        alt={project.img.alt}
                        className="w-full h-full object-cover border-2 border-white/20 rounded-xl transition-transform duration-500 group-hover:scale-110 ease-in-out"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-white/5 border-2 border-white/20 rounded-xl text-white/50 text-sm">
                        {project.title}
                    </div>
                )}
            </div>
            <h4 className="text-white text-center text-sm group-hover:text-orange-400 transition-colors">
                {project.title}
            </h4>
        </Link>
    </li>
);
