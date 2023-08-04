import PropTypes from "prop-types";
import SelectLangBtn from "./SelectLangBtn";
import { useEffect, useState } from "react";

const Navbar = ({ lang, setLang, isVisible }) => {
  const [width, setWidth] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  // Translations
  let navbarItems = [];
  if (lang === "uz") {
    navbarItems = ["Asosiy", "Portfolio", "Hujjatlar", "Bog'lanish"];
  } else if (lang === "en") {
    navbarItems = ["Main", "Portfolio", "Documents", "Contact"];
  } else if (lang === "ru") {
    navbarItems = ["Главный", "Портфолио", "Документы", "Контакт"];
  } else throw new Error("Something went wrong with language!");
  const navbarLinks = ["#main", "#portfolio", "#documents", "#contact"];

  // TODO: make responsive
  useEffect(() => {
    if (width < 880) {
      setShowBurgerMenu(true);
    } else {
      setShowBurgerMenu(false);
    }
  }, [width]);

  const getWindowWidth = () => {
    return window.innerWidth;
  };

  const setWindowWidth = () => {
    setWidth(getWindowWidth());
  };

  useEffect(() => {
    setWindowWidth();
    window.addEventListener("resize", setWindowWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // handle Modes
  useEffect(() => {
    if (isDark) {
      // LightMode
      document.documentElement.style.setProperty(
        "--secondary-color",
        "#0c0c0c",
      );
      document.documentElement.style.setProperty("--primary-text", "white");
      document.documentElement.style.setProperty("--secondary-text", "white");

      // Cards
      document.documentElement.style.setProperty(
        "--card-bgcolor",
        "linear-gradient(225deg, #1b1b1b, #202020)",
      );
      document.documentElement.style.setProperty(
        "--card-shadow",
        "-5px 5px 15px #161616, 5px -5px 15px #262626",
      );
    } else {
      // DarkMode
      document.documentElement.style.setProperty(
        "--secondary-color",
        "aliceblue",
      );
      document.documentElement.style.setProperty("--primary-text", "#0e3842");
      document.documentElement.style.setProperty("--secondary-text", "black");

      // Cards
      document.documentElement.style.setProperty(
        "--card-bgcolor",
        "linear-gradient(225deg, #cacaca, #f0f0f0)",
      );
      document.documentElement.style.setProperty(
        "--card-shadow",
        "-20px 20px 60px #bebebe, 20px -20px 60px #ffffff",
      );
    }
  }, [isDark]);

  const handleMode = () => {
    setIsDark(!isDark);
  };

  return (
    // <!-- NAVBAR SECTION -->
    // Initially navbar is invisible
    <nav
      className={`navbar ${
        !isVisible && !isOpened ? "invisible" : ""
      } has-transition`}
    >
      {/* <img src="./assets/logo.png" alt="Korxona Logosi" class="navbar__logo" /> */}
      <h2 className="navbar__logo">
        {getWindowWidth() < 400 ? "MT" : "MoorfoTech"}
      </h2>

      <div className="navbar__menu">
        <ul
          className={`navbar__list ${isOpened ? "active" : ""}`}
          onClick={() => {
            isOpened && setIsOpened(false);
          }}
        >
          {(!showBurgerMenu || isOpened) &&
            navbarItems.map((navbarItem, index) => (
              <li className="navbar__item" key={index}>
                <a href={navbarLinks[index]}>{navbarItem}</a>
              </li>
            ))}
        </ul>
        {/* Change Language */}
        <SelectLangBtn lang={lang} setLang={setLang} />
        {/* <!-- Dark and Light Mode --> */}
        <button className="navbar__toggle-mode-btn" onClick={handleMode}>
          {isDark ? (
            <i className="fa-solid fa-sun fa_icon"></i>
          ) : (
            <i className="fa-solid fa-moon fa_icon"></i>
          )}
        </button>
        {/* Burger Menu */}
        {showBurgerMenu && (
          <button
            className="navbar__burger-btn"
            onClick={() => setIsOpened(!isOpened)}
          >
            <i className="fa-solid fa-bars fa_icon"></i>
          </button>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  lang: PropTypes.string,
  setLang: PropTypes.func,
  isVisible: PropTypes.bool,
};

export default Navbar;
