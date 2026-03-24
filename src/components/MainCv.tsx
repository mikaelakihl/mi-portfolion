import { useTranslation } from "react-i18next";
import { cvData } from "../data/cvData";

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
