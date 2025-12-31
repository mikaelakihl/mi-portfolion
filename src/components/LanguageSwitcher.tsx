import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-2 text-white font-bold bg-white/10 backdrop-blur-md border border-white/20 px-3 py-2 rounded-xl shadow-lg">
      <button
        onClick={() => changeLanguage("sv")}
        className={`transition-colors duration-300 ${
          i18n.resolvedLanguage === "sv" ? "text-orange-400" : "hover:text-orange-400"
        }`}
      >
        SV
      </button>
      <span>|</span>
      <button
        onClick={() => changeLanguage("en")}
        className={`transition-colors duration-300 ${
          i18n.resolvedLanguage === "en" ? "text-orange-400" : "hover:text-orange-400"
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;

