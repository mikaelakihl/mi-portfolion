import { useTranslation } from "react-i18next";

const AboutMe = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h1>About Me</h1>
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
        </div>
    );
};

export default AboutMe;