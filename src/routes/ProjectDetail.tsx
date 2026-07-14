import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { projectData } from "../data/projectData";
import { TechBadge } from "../data/techStack";
import { ImageCarousel } from "../components/ImageCarousel";
import {
  FaChevronLeft,
  FaChevronRight,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

export const ProjectDetail = () => {
  const { slug } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Prev/next steps through every project, newest first, regardless of category.
  const orderedProjects = [...projectData].sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  );
  const project = orderedProjects.find((item) => item.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  const images = project.images ?? (project.img ? [project.img] : []);
  const paragraphs = project.longDescription ?? project.description;

  const currentIndex = orderedProjects.findIndex((item) => item.slug === slug);
  const prevProject = orderedProjects[currentIndex - 1];
  const nextProject = orderedProjects[currentIndex + 1];

  const handlePrev = () => {
    if (prevProject) navigate(`/projects/${prevProject.slug}`);
  };

  const handleNext = () => {
    if (nextProject) navigate(`/projects/${nextProject.slug}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Link
        to="/projects"
        className="block w-fit text-left text-sm text-white/70 hover:text-orange-400 transition-colors mt-8 mb-4"
      >
        &larr; {t("projects.back_to_projects")}
      </Link>

      <div className="flex items-center justify-center gap-4 relative mb-6">
        <button
          type="button"
          onClick={handlePrev}
          disabled={!prevProject}
          className={`absolute left-0 z-10 p-2 rounded-full bg-white/10 backdrop-blur-md text-white transition-opacity ${!prevProject ? "opacity-30 cursor-not-allowed" : "hover:bg-white/20"}`}
        >
          <FaChevronLeft size={24} />
        </button>
        <h2 className="font-normal text-center text-white uppercase tracking-wider">
          {project.title}
        </h2>
        <button
          type="button"
          onClick={handleNext}
          disabled={!nextProject}
          className={`absolute right-0 z-10 p-2 rounded-full bg-white/10 backdrop-blur-md text-white transition-opacity ${!nextProject ? "opacity-30 cursor-not-allowed" : "hover:bg-white/20"}`}
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      <ImageCarousel images={images} />

      {project.sections ? (
        <div className="flex flex-col gap-8 text-left text-white/90 mb-8">
          {project.sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold text-lg mb-2">
                {t(section.heading)}
              </h3>
              {section.body && <p>{t(section.body)}</p>}
              {section.items && (
                <ul className="list-disc list-outside pl-5 flex flex-col gap-2 mt-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{t(item)}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4 text-left text-white/90 mb-8">
          {paragraphs.map((desc, index) => (
            <p key={index}>{t(desc)}</p>
          ))}
        </div>
      )}

      {project.tech.length > 0 && (
        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-8">
          {project.tech.map((techName) => (
            <TechBadge key={techName} name={techName} />
          ))}
        </div>
      )}

      {(project.demo || project.github || (project.links && project.links.length > 0)) && (
        <div className="flex items-center w-full gap-x-6 gap-y-2 flex-wrap text-sm mb-12">
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
        </div>
      )}
    </div>
  );
};
