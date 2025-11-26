import { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Outlet,
  Link,
  NavLink,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { cvData } from "./data/cvData";
import { projectData } from "./data/projectData";
import { artData } from "./data/artData";
import "./App.css";
import {
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaNpm,
  FaFigma,
  FaSass,
  FaDatabase,
  FaVuejs,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import {
  SiTypescript,
  SiVite,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPrettier,
  SiEslint,
  SiPnpm,
  SiAdobephotoshop,
  SiVitest,
  SiCypress,
} from "react-icons/si";
import { BsCursorFill } from "react-icons/bs";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-brand-200 h-[100px] relative z-50 mb-5">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between md:justify-center">
        <div className="text-white font-bold text-xl md:hidden"></div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center gap-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-lg text-white ">
          <Link
            to="/"
            className="text-white hover:text-brand-400 transition-colors"
          >
            CV
          </Link>
          <span className="text-black">|</span>
          <Link
            to="/projects"
            className="text-white hover:text-brand-400 transition-colors"
          >
            Projects
          </Link>
          <span className="text-black">|</span>
          <Link
            to="/art"
            className="text-white hover:text-brand-400 transition-colors"
          >
            Art
          </Link>
        </div>

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-[100px] left-0 w-full bg-brand-200 flex flex-col items-center gap-6 py-8 shadow-lg md:hidden">
          <Link
            to="/"
            className="text-white text-xl hover:text-brand-400 transition-colors"
            onClick={toggleMenu}
          >
            CV
          </Link>
          <Link
            to="/projects"
            className="text-white text-xl hover:text-brand-400 transition-colors"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            to="/art"
            className="text-white text-xl hover:text-brand-400 transition-colors"
            onClick={toggleMenu}
          >
            Art
          </Link>
        </div>
      )}
    </header>
  );
};

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-8 bg-brand-100">
        <Outlet />
      </main>
    </div>
  );
};

const CV = () => {
  return (
    <div className="flex md:flex-row flex-col">
      <SideBarCV />
      <div className="flex flex-col w-full">
        <div className="flex-1 md:mt-20 mt-20">
          <Cloud />
        </div>
        <div className="flex-1">
          <MainCV />
        </div>
      </div>
    </div>
  );
};

const Cloud = () => {
  return (
    <>
      <NavLink to="/art">
        <div className=" relative h-full">
          <div className="absolute inset-3 flex items-center gap-2 -translate-y-[10%]">
            <img
              src="/assets/art/flysland.png"
              alt="floating island"
              className="w-full h-full object-contain -rotate-20 mt-[5%] mx-[2%] translate-x-[20%] md:translate-x-[9%] filter-[drop-shadow(0_0_1px_rgba(0,0,0,0.3))_drop-shadow(0_4px_6px_rgba(0,0,0,0.3))]"
            />
            <img
              src="/assets/art/no_one_is_captain_but_you.png"
              alt="floating island"
              className="w-full h-full mb-10 object-contain -rotate-6 -translate-x-[8%] filter-[drop-shadow(0_0_1px_rgba(0,0,0,0.3))_drop-shadow(0_4px_6px_rgba(0,0,0,0.3))]"
            />
            <img
              src="/assets/art/djungle_2.png"
              alt="floating island"
              className="w-full h-full object-contain rotate-6 mb-[12%] -translate-x-[20%] filter-[drop-shadow(0_0_1px_rgba(0,0,0,0.3))_drop-shadow(0_4px_6px_rgba(0,0,0,0.3))]"
            />
            <img
              src="/assets/art/caravan_dolphin.png"
              alt="floating island"
              className="w-full h-full object-contain rotate-15 mt-[5%] mx-[-4%] -translate-x-[25%] md:-translate-x-[20%] filter-[drop-shadow(0_0_1px_rgba(0,0,0,0.3))_drop-shadow(0_4px_6px_rgba(0,0,0,0.3))]"
            />
          </div>
          <img
            src="/assets/cloud.png"
            alt="cloud"
            className="w-full h-full relative z-20"
          />
        </div>
      </NavLink>
    </>
  );
};

const SideBarCV = () => {
  return (
    <section className="sidebar-cv  flex flex-col items-center justify-center w-full md:w-1/3 text-white gap-8 md:mx-5">
      <div className="rounded-full w-48 h-48 overflow-hidden border-4 border-brand-200">
        <img
          src="/assets/mikaelakihl-cv.png"
          alt="CV"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h1 className="uppercase tracking-wider">Mikaela Kihl</h1>
        <p>Frontend Developer</p>
      </div>
      <div className="flex flex-col gap-4 w-full max-w-xs px-4">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-lg text-white">
          <h2 className="uppercase text-white font-bold mb-4 tracking-wider text-center">
            Contact
          </h2>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-center gap-3 hover:text-brand-300 transition-colors">
              <CiMail className="text-lg shrink-0" />
              <a
                href="mailto:mikaela.kihl@medieinstitutet.se"
                className="truncate"
              >
                mikaela.kihl@medieinstitutet.se
              </a>
            </div>
            <div className="flex items-center gap-3 hover:text-brand-300 transition-colors">
              <CiMail className="text-lg shrink-0" />
              <a href="mailto:mikaela.kihl@outlook.com" className="truncate">
                mikaela.kihl@outlook.com
              </a>
            </div>
            <div className="flex items-center gap-3 hover:text-brand-300 transition-colors">
              <FaGithub className="text-lg shrink-0" />
              <a href="https://github.com/mikaelakihl">GitHub</a>
            </div>
            <div className="flex items-center gap-3 hover:text-brand-300 transition-colors">
              <FaLinkedin className="text-lg shrink-0" />
              <a href="https://www.linkedin.com/in/mikaela-kihl-4b1751200/">
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-3 hover:text-brand-300 transition-colors">
              <FaPhoneAlt className="text-sm shrink-0" />
              <a href="tel:070-857-0746">070-857-0746</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 ">
          <h2 className="uppercase tracking-wider mb-2">Languages</h2>
          <div className="flex items-center gap-2">
            <p>swedish</p>
            <p>english</p>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-lg text-white">
          <h2 className="uppercase mb-4 tracking-wider">Tech</h2>
          <NavLink to="/projects">View here</NavLink>
        </div>
        <div>
          <h2 className="uppercase tracking-wider mb-2">Strengths</h2>
          <p>Creative</p>
          <p>Adaptable</p>
          <p>Easygoing</p>
          <p>Supportive</p>
        </div>
        <div>
          <h2 className="uppercase tracking-wider mb-2">Growth areas</h2>
          <p>Reading lengthy texts</p>
          <p>Presentation skills</p>
        </div>
      </div>
    </section>
  );
};

const MainCV = () => {
  if (!cvData) return <div>No data available</div>;

  return (
    <section className="flex flex-col bg-white gap-4 w-full px-4 pb-10 pt-10 text-left md:p-20 relative z-30 -mt-2 md:-mt-5">
      <div className="flex flex-col gap-4 w-full mt-4">
        <p>
          My career started when I was 16, but my interest in design and
          development began much earlier. As a teenager, I spent countless hours
          customizing blogs and experimenting with HTML, CSS, and Photoshop — a
          curiosity that never really left.
        </p>
        <p>
          Five words to describe me:{" "}
          <strong>open, loyal, responsible, inventive & adaptable.</strong> I
          enjoy the energy of teamwork but work just as well on my own.
        </p>
        <p>
          After five years in customer support, I returned to what inspires me
          most — so now I’m studying Front End Development, building projects,
          learning new tools, and growing a little every day as I work toward
          creating simple, thoughtful user experiences.
        </p>
      </div>
      <div className="bg-gradient-to-r from-transparent via-black to-transparent h-[1px] my-6 "></div>
      <div className="flex flex-col gap-4">
        <h2 className="text-left">Education & Internship</h2>
        <ul className="flex flex-col gap-4">
          {cvData.education.map((educationEntry) => (
            <li key={educationEntry.id}>
              <h3 className="font-bold">
                {educationEntry.startDate} - {educationEntry.endDate}:{" "}
                {educationEntry.organization}, {educationEntry.location}
              </h3>
              <p>{educationEntry.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-left">Work Experience</h2>
        <ul className="flex flex-col gap-4">
          {cvData.workExperience.map((workEntry) => (
            <li key={workEntry.id}>
              <h3 className="font-bold">
                {workEntry.startDate} - {workEntry.endDate}: {workEntry.company}
                , {workEntry.location}
              </h3>
              <p>{workEntry.description}</p>
              {workEntry.experienceGained &&
                workEntry.experienceGained.length > 0 && (
                  <p>
                    <strong>Experience gained:</strong>{" "}
                    {workEntry.experienceGained.join(", ")}
                  </p>
                )}
            </li>
          ))}
        </ul>
        <p className="text-black font-script text-2xl mt-4">
          References available upon request
        </p>
      </div>
    </section>
  );
};

const Projects = () => {
  if (!projectData) return <div>No data available</div>;

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
  ];

  return (
    <>
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-center font-normal text-white uppercase tracking-wider">
          Tech Stack
        </h2>
        <div className="bg-gradient-to-r from-transparent via-white to-transparent h-[1px] my-6 "></div>
        <ul className="flex flex-wrap gap-4 justify-center">
          {techStackList.map((tech) => (
            <li key={tech.id}>
              <div className={tech.bgColor + " flex items-center gap-2"}>
                <Icon icon={tech.icon} />
                <p>{tech.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gradient-to-r from-transparent via-white to-transparent h-[1px] my-6"></div>
      <h2 className="text-center font-normal mb-8 text-white uppercase tracking-wider">
        My projects
      </h2>
      <section className="max-w-7xl mx-auto p-4">
        <ul className="grid md:grid-cols-2 gap-8">
          {projectData.map((project) => (
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
                    <p key={index}>{desc}</p>
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
                    className=" bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white"
                    href={project.demo}
                  >
                    View Demo
                  </a>
                  <a
                    className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-xl shadow-lg text-white"
                    href={project.github}
                  >
                    View on GitHub
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

const Art = () => {
  if (!artData) return <div>No data available</div>;

  return (
    <>
      {" "}
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-center font-normal text-white uppercase tracking-wider">
          Art
        </h2>

        <div className="bg-gradient-to-r from-transparent via-white to-transparent h-[1px] my-6"></div>
        <section className="max-w-7xl mx-auto p-4">
          <ul className="grid md:grid-cols-4 gap-8">
            {artData.map((art) => (
              <li key={art.id}>
                <div className="flex flex-col gap-2">
                  <NavLink
                    to={`/art/${art.id}`}
                    className="block aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <img
                      src={art.img?.url}
                      alt={art.img?.alt}
                      className="w-full h-full object-cover border border-2 border-white/20 rounded-xl"
                    />
                  </NavLink>
                  <h3 className="text-white text-center ">{art.name}</h3>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

const ArtDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentId = Number(id);

  const art = artData.find((item) => item.id === currentId);

  if (!art) return <div>No art found</div>;

  const currentIndex = artData.findIndex((item) => item.id === currentId);
  const prevArt = artData[currentIndex - 1];
  const nextArt = artData[currentIndex + 1];

  const handlePrev = () => {
    if (prevArt) navigate(`/art/${prevArt.id}`);
  };

  const handleNext = () => {
    if (nextArt) navigate(`/art/${nextArt.id}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 relative ">
      <h2 className="font-normal text-center my-8 text-white uppercase tracking-wider">
        {art.name}
      </h2>

      <div className="flex items-center justify-center w-full gap-4">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          disabled={!prevArt}
          className={`p-2 rounded-full bg-white/10 backdrop-blur-md text-white transition-opacity ${!prevArt ? "opacity-30 cursor-not-allowed" : "hover:bg-white/20"}`}
        >
          <FaChevronLeft size={30} />
        </button>

        <img
          src={"/" + art.img?.url}
          alt={art.img?.alt}
          className="max-w-[80vw] max-h-[80vh] object-contain rounded-lg shadow-xl border border-2 border-white/20 rounded-xl"
        />

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={!nextArt}
          className={`p-2 rounded-full bg-white/10 backdrop-blur-md text-white transition-opacity ${!nextArt ? "opacity-30 cursor-not-allowed" : "hover:bg-white/20"}`}
        >
          <FaChevronRight size={30} />
        </button>
      </div>
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!pathname.startsWith("/art/")) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<CV />} />
          <Route path="projects" element={<Projects />} />
          <Route path="art" element={<Art />} />
          <Route path="art/:id" element={<ArtDetail />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
