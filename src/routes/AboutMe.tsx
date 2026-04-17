import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-center font-normal text-white uppercase tracking-wider">
        {t("Cv.about_me_title.1")}
      </h2>
      <div className="bg-gradient-to-r from-transparent via-white to-transparent h-[1px] my-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white bg-white/10 backdrop-blur-md border border-white/20 p-6 md:px-10 rounded-xl shadow-lg text-white text-left">
        <div className="flex flex-col gap-4 w-full mt-4 text-white   ">
          <div className="space-y-4">
             <h3 className="uppercase tracking-wider text-brand-600 font-bold text-base text-center">{t("Cv.about_me_title.2")}
                </h3>
                <div className="flex flex-col gap-2 mt-4">
                 <p>{t("Cv.text_about_me.1")}</p>
              <p>{t("Cv.text_about_me.1.1")}</p> 
                </div>
              
          </div>
              
          <details className="group">
          <summary className="uppercase tracking-wider text-brand-600 font-bold text-base text-center">{t("Cv.about_me_title.3")}</summary>
          <div className="flex flex-col gap-2 group-open:mt-4"> 
          <p>{t("Cv.text_about_me.2")}</p>
          <p>{t("Cv.text_about_me.2.1")}</p>
          </div>
          </details>
          <details className="group">
          <summary className="uppercase tracking-wider text-brand-600 font-bold text-base text-center ">{t("Cv.about_me_title.4")}</summary>
          <div className="flex flex-col gap-2 group-open:mt-4">
          <p>{t("Cv.text_about_me.3")}</p>
          <p>{t("Cv.text_about_me.3.1")}</p>
          </div>
          </details>
         <div>
          <h3 className="uppercase tracking-wider text-brand-600 font-bold text-base text-center">{t("Cv.about_me_title.5")}</h3>
          <div className="flex flex-col gap-2 mt-4">
            <p>{t("Cv.text_about_me.4")}</p>
          <p>{t("Cv.text_about_me.4.1")}</p>
          <p>{t("Cv.text_about_me.6")}</p> 
          </div>
          
         </div>
    

          
        </div>
        <div className="flex justify-center md:justify-end w-full mt-4 md:mt-0 md:sticky md:top-8 self-start">
          <div className="w-full max-w-xs md:max-w-sm aspect-[3/4] overflow-hidden rounded-2xl border-4 border-brand-200 shadow-lg">
            <img
              src="/assets/mikaelakihl-cv.png"
              alt="Mikaela Kihl"
              className="w-full h-full object-cover"
            />
             <div>
            <p>{t("Cv.text_about_me.5")}</p>
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
