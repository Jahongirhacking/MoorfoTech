import { useRef, useState } from "react";
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
  const [isArrowSticky, setIsArrowSticky] = useState(false);
  const [lang, setLang] = useState("uz");
  const contactRef = useRef(null);

  const handleScroll = () => {
    const { current: contact } = contactRef;
    //   Make Navbar visible
    if (window.scrollY >= 70) {
      setIsVisible(true);
      // Todo: Make arrow up sticky
      const offsetToFooter = contact.offsetTop - 70;
      if (window.scrollY + window.innerHeight < offsetToFooter) {
        setIsArrowSticky(false);
      } else {
        setIsArrowSticky(true);
      }
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
      {isVisible && (
        <ArrowUpBtn isArrowSticky={isArrowSticky} refContact={contactRef} />
      )}
      <Contact lang={lang} contactRef={contactRef} />
    </>
  );
}

export default App;
