import { useTranslation } from "react-i18next";
import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

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