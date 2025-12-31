import { useTranslation } from "react-i18next";
import type { ChangeEvent } from "react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="relative">
      <select
        value={i18n.resolvedLanguage}
        onChange={changeLanguage}
        className="appearance-none bg text-white  cursor-pointer focus:outline-none hover:text-orange-400 transition-colors duration-300 py-1 pr-6 pl-2"
        style={{
          backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 0.7em top 50%",
          backgroundSize: "0.65em auto",
        }}
        aria-label="Select Language"
      >
        <option value="sv" className="text-black">SV</option>
        <option value="en" className="text-black">EN</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;

