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
  Navigate,
} from "react-router-dom";
import { cvData } from "./data/cvData";

import { artData } from "./data/artData";
import "./App.css";
import {
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
  FaBars,
  FaTimes,

  FaChevronLeft,
  FaChevronRight,

} from "react-icons/fa";
import { CiMail } from "react-icons/ci";

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { Projects } from "./pages/Projects";
import { CV } from "./pages/CV";

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
            className="text-white transition-colors duration-300 hover:text-orange-400"
          >
            CV
          </Link>
          <span className="text-black">|</span>
          <Link
            to="/projects"
            className="text-white transition-colors duration-300 hover:text-orange-400"
          >
            Projects
          </Link>
          <span className="text-black">|</span>
          <Link
            to="/art"
            className="text-white transition-colors duration-300 hover:text-orange-400"
          >
            Art
          </Link>
        </div>

        {/* Right Side Container */}
        <div className="flex items-center gap-4 md:absolute md:right-8">
          <LanguageSwitcher />

          {/* Hamburger Icon */}
          <div
            className="md:hidden text-white cursor-pointer"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
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

// const CV = () => {
//   return (
//     <div className="flex md:flex-row flex-col">
//       <SideBarCV />
//       <div className="flex flex-col flex-1">
//         <div className="flex-1 md:mt-20 mt-20">
//           <Cloud />
//         </div>
//         <div className="flex-1">
//           <MainCV />
//         </div>
//       </div>
//     </div>
//   );
// };

export const Cloud = () => {
  return (
    <>
      <NavLink to="/art">
        <div className=" relative h-full">
          <div className="absolute inset-3 flex items-center gap-2 -translate-y-[10%] transition-transform duration-500 hover:scale-110 ease-in-out">
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

export const SideBarCV = () => {
  const { t } = useTranslation();
  return (
    <section className="sidebar-cv  flex flex-col items-center justify-center md:justify-start md:pt-20 w-full md:w-1/3 text-white gap-8 md:mx-5">
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
            {t("sidebarCV.contact")}
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
              <a href="https://www.linkedin.com/in/mikaelakihl/">
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
          <h2 className="uppercase tracking-wider mb-2">
            {t("sidebarCV.languages")}
          </h2>
          <div className="flex items-center gap-2">
            <p>{t("sidebarCV.swedish")}</p>
            <p>{t("sidebarCV.english")}</p>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-lg text-white">
          <h2 className="uppercase mb-4 tracking-wider">
            {t("sidebarCV.tech")}
          </h2>
          <NavLink to="/projects">{t("sidebarCV.view_here")}</NavLink>
        </div>
        <div>
          <h2 className="uppercase tracking-wider mb-2">
            {t("sidebarCV.Strengths")}
          </h2>
          <p>{t("sidebarCV.Creative")}</p>
          <p>{t("sidebarCV.Adaptable")}</p>
          <p>{t("sidebarCV.Easygoing")}</p>
          <p>{t("sidebarCV.Supportive")}</p>
        </div>
        <div>
          <h2 className="uppercase tracking-wider mb-2">
            {t("sidebarCV.Growth areas")}
          </h2>
          <p>{t("sidebarCV.Reading_lengthy_texts")}</p>
          <p>{t("sidebarCV.Presentation_skills")}</p>
        </div>
      </div>
    </section>
  );
};

export const MainCV = () => {
  const { t } = useTranslation();
  if (!cvData) return <div>No data available</div>;

  return (
    <section className="flex flex-col bg-white gap-4 w-full px-4 pb-10 pt-10 text-left md:p-10 relative z-30 -mt-2 md:-mt-5">
      <div className="flex flex-col gap-4 w-full mt-4">
        <p>{t("Cv.text_about_me.1")}</p>
        <p>{t("Cv.text_about_me.2")}</p>

        <p>{t("Cv.text_about_me.3")}</p>
        <p>{t("Cv.text_about_me.4")}</p>
        <p>
          {t("Cv.text_about_me.5")}
          <br />
          {t("Cv.text_about_me.6")}
        </p>
      </div>
      <div className="bg-gradient-to-r from-transparent via-black to-transparent h-[2px] my-6 "></div>
      <div className="flex flex-col gap-4">
        <h2 className="text-left">{t("experiences.education_internship")}</h2>
        <ul className="flex flex-col gap-4">
          {cvData.education.map((educationEntry) => (
            <li key={educationEntry.id}>
              <h3 className="font-bold">
                {educationEntry.organization}, {educationEntry.location}
              </h3>
              <p className="text-sm text-gray-500 mb-1">
                {t(educationEntry.startDate)} - {t(educationEntry.endDate)}:{" "}
              </p>
              <p>{t(educationEntry.description)}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-4 md:mt-4">
        <h2 className="text-left">{t("experiences.work_experience")}</h2>
        <ul className="flex flex-col gap-4">
          {cvData.workExperience.map((workEntry) => (
            <li key={workEntry.id}>
              <h3 className="font-bold">
                {workEntry.company}, {workEntry.location}
              </h3>
              <p className="text-sm text-gray-500 mb-1">
                {t(workEntry.startDate)} - {t(workEntry.endDate)}
              </p>
              <p>{t(workEntry.description)}</p>
            </li>
          ))}
        </ul>
        <p className="text-black font-script text-2xl mt-4">
          {t("experiences.references_available_upon_request")}
        </p>
      </div>
    </section>
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
                    className="block aspect-square overflow-hidden rounded-lg group"
                  >
                    <img
                      src={art.img?.url}
                      alt={art.img?.alt}
                      className="w-full h-full object-cover border border-2 border-white/20 rounded-xl transition-transform duration-500 group-hover:scale-110 ease-in-out"
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
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] p-4 relative">
      <h2 className="font-normal text-center my-8 text-white uppercase tracking-wider">
        {art.name}
      </h2>

      <div className="flex items-center justify-center w-full gap-4 relative">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          disabled={!prevArt}
          className={`absolute left-0 md:static z-10 p-2 rounded-full bg-white/10 backdrop-blur-md text-white transition-opacity ${!prevArt ? "opacity-30 cursor-not-allowed hidden md:block" : "hover:bg-white/20"}`}
        >
          <FaChevronLeft size={30} />
        </button>

        <img
          src={"/" + art.img?.url}
          alt={art.img?.alt}
          className="max-w-full md:max-w-[80vw] max-h-[70vh] md:max-h-[80vh] object-contain rounded-lg shadow-xl border border-2 border-white/20"
        />

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={!nextArt}
          className={`absolute right-0 md:static z-10 p-2 rounded-full bg-white/10 backdrop-blur-md text-white transition-opacity ${!nextArt ? "opacity-30 cursor-not-allowed hidden md:block" : "hover:bg-white/20"}`}
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
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
