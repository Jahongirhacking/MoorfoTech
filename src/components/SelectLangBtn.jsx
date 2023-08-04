import PropTypes from "prop-types";
import flagUzb from "../assets/flags/flag-of-Uzbekistan.png";
import flagUsa from "../assets/flags/flag-of-United-States-of-America.png";
import flagRus from "../assets/flags/flag-of-Russia.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const SelectLangBtn = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);

  const countries = [
    { lang: "uz", flag: flagUzb },
    { lang: "en", flag: flagUsa },
    { lang: "ru", flag: flagRus },
  ];
  const currentFlag = countries.find((country) => country.lang === lang).flag;

  const changeLanuage = (e, lang) => {
    e.stopPropagation();
    setLang(lang);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={() => setIsOpen((prev) => !prev)}>
        <img src={currentFlag} alt="flag of country" />
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          className="fa_icon"
        />
      </button>
      <div className={`dropdown-content ${isOpen ? "active" : ""}`}>
        {countries.map((country) => (
          <button
            key={country.lang}
            onClick={(e) => changeLanuage(e, country.lang)}
          >
            <img src={country.flag} alt={`flag of ${country.lang}`} />
          </button>
        ))}
      </div>
    </div>
  );
};

SelectLangBtn.propTypes = {
  lang: PropTypes.string,
  setLang: PropTypes.func,
};

export default SelectLangBtn;
