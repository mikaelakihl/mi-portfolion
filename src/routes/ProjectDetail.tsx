import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { projectData } from "../data/projectData";
import { TechBadge } from "../data/techStack";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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

      {images.length > 0 && (
        <div className="flex flex-col gap-4 mb-8">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="w-full border border-2 border-white/20 rounded-xl shadow-xl"
            />
          ))}
        </div>
      )}

      <div className="flex flex-col gap-4 text-white/90 mb-8">
        {paragraphs.map((desc, index) => (
          <p key={index}>{t(desc)}</p>
        ))}
      </div>

      {project.tech.length > 0 && (
        <>
          <div className="bg-gradient-to-r from-transparent via-white to-transparent h-[1px] my-6"></div>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((techName) => (
              <TechBadge key={techName} name={techName} />
            ))}
          </div>
        </>
      )}

      {(project.demo || project.github || (project.links && project.links.length > 0)) && (
        <>
          <div className="bg-gradient-to-r from-transparent via-white to-transparent h-[1px] my-6"></div>
          <div className="flex items-center w-full gap-2 flex-wrap mb-12">
            {project.demo && (
              <a
                className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white transition-all duration-300 hover:bg-orange-400 hover:border-orange-400 hover:-translate-y-1"
                target="_blank"
                rel="noopener noreferrer"
                href={project.demo}
              >
                {t("projects.view_demo")}
              </a>
            )}
            {project.github && (
              <a
                className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white transition-all duration-300 hover:bg-orange-400 hover:border-orange-400 hover:-translate-y-1"
                target="_blank"
                rel="noopener noreferrer"
                href={project.github}
              >
                {t("projects.view_on_github")}
              </a>
            )}
            {project.links?.map((link) => (
              <a
                key={link.url}
                className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white transition-all duration-300 hover:bg-orange-400 hover:border-orange-400 hover:-translate-y-1"
                target="_blank"
                rel="noopener noreferrer"
                href={link.url}
              >
                {link.label}
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
