import PropTypes from "prop-types";
import SelectLangBtn from "./SelectLangBtn";

const Navbar = ({ lang, setLang, isVisible }) => {
  let navbarItems = [];
  if (lang === "uz") {
    navbarItems = ["Asosiy", "Portfolio", "Hujjatlar", "Bog'lanish"];
  } else if (lang === "en") {
    navbarItems = ["Main", "Portfolio", "Documents", "Contact"];
  } else if (lang === "ru") {
    navbarItems = ["Главный", "Портфолио", "Документы", "Контакт"];
  } else throw new Error("Something went wrong with language!");
  const navbarLinks = ["#main", "#portfolio", "#documents", "#contact"];

  return (
    // <!-- NAVBAR SECTION -->
    // Initially navbar is invisible
    <nav className={`navbar ${!isVisible ? "invisible" : ""} has-transition`}>
      {/* <img src="./assets/logo.png" alt="Korxona Logosi" class="navbar__logo" /> */}
      <h2 className="navbar__logo">MoorfoTech</h2>

      <div className="navbar__menu">
        <ul className="navbar__list">
          {navbarItems.map((navbarItem, index) => (
            <li className="navbar__item" key={index}>
              <a href={navbarLinks[index]}>{navbarItem}</a>
            </li>
          ))}
        </ul>
        {/* Change Language */}
        <SelectLangBtn lang={lang} setLang={setLang} />
        {/* <!-- Dark and Light Mode --> */}
        <button className="toggle-mode-btn">
          <i className="fa-solid fa-sun fa_icon destroyed"></i>
          <i className="fa-solid fa-moon fa_icon"></i>
        </button>
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
