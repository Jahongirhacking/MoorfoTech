import { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Main from "./pages/Main";
import ArrowUpBtn from "./components/ArrowUpBtn";
import Contact from "../src/components/Contact";
import Portfolio from "./pages/Portfolio";
import Documents from "./pages/Documents";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  // Languages: uz, en, ru
  const [isVisible, setIsVisible] = useState(false);
  const [lang, setLang] = useState("uz");

  const handleScroll = () => {
    //   Make Navbar visible
    if (window.scrollY >= 70) {
      setIsVisible(true);
      // Todo: Make arrow up sticky
      //   const offsetToFooter = footer.offsetTop - arrowUpBtn.offsetHeight - 20;
      //   if (window.scrollY + window.innerHeight < offsetToFooter) {
      //     arrowUpBtn.style.position = "fixed";
      //     arrowUpBtn.style.bottom = "20px";
      //   } else {
      //     arrowUpBtn.style.position = "absolute";
      //     arrowUpBtn.style.bottom = `${footer.offsetHeight + 20}px`;
      //   }
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    AOS.init();
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar lang={lang} setLang={setLang} isVisible={isVisible} />
      <Banner lang={lang} />
      <Main lang={lang} />
      <Portfolio lang={lang} />
      <Documents lang={lang} />
      {isVisible && <ArrowUpBtn />}
      <Contact lang={lang} />
    </>
  );
}

export default App;
