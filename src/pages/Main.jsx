import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreen,
  faRectangleAd,
  faGear,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
import { faFirefoxBrowser, faFigma } from "@fortawesome/free-brands-svg-icons";

const Main = ({ lang }) => {
  // Translations
  const mainObj = {
    title: "",
    cardIcons: [
      faMobileScreen,
      faFirefoxBrowser,
      faRectangleAd,
      faGear,
      faFigma,
      faLaptop,
    ],
    cardInfos: [],
  };
  if (lang === "uz") {
    mainObj.title = "Asosiy";
    mainObj.paragraph =
      "Biz IT-ni kompleks rivojlantirish sohasidagi professionallar jamoasimiz. Professional dasturiy mahsulotlar, mobil ilova, veb-sayt va IT loyihalarni texnik qo'llab quvvatlash bilan shug'ullanamiz. Siz uchun aloqalarimizni sezilarli darajada mustahkamlash uchun bizning jamoamiz zamonaviy texnologiyalar va SCRUM metodidan foydalangan holda ishlaydi.";
    mainObj.cardInfos = [
      "Mobil Ilovalar Yaratish",
      "Web Saytlar yaratish",
      "Reklama Web Saytlari",
      "Texnik Yordam",
      "UI/UX Dizayn",
      "Dasturlar Ishlab Chiqish",
    ];
  } else if (lang === "en") {
    mainObj.title = "Main";
    mainObj.paragraph =
      "We are a team of professionals in the field of complex development of IT. We provide technical support for professional software products, mobile application, website and IT projects. Our team works using modern technologies and the SCRUM method to significantly strengthen our relationships for you.";
    mainObj.cardInfos = [
      "Developing Mobile Apps",
      "Building Web Sites",
      "Advertisement Web Sites",
      "Technical Support",
      "UI/UX Design",
      "Creating Programs",
    ];
  } else if (lang === "ru") {
    mainObj.title = "Главный";
    mainObj.paragraph =
      "Мы команда профессионалов в области комплексной разработки IT. Осуществляем техническую поддержку профессиональных программных продуктов, мобильных приложений, веб-сайтов и ИТ-проектов. Наша команда работает с использованием современных технологий и метода SCRUM, чтобы значительно укрепить наши отношения для вас.";
    mainObj.cardInfos = [
      "Создание Мобильных Приложений",
      "Разработка Веб-Сайтов",
      "Рекламные Веб-Сайты",
      "Техническая Поддержка",
      "UI/UX Дизайн",
      "Разработка Программ",
    ];
  }

  return (
    // <!-- MAIN SECTION -->
    <main id="main" className="main">
      {/* <!-- TITLE --> */}
      <div className="main__title-field title-field">
        <span className="main__title-line title-line"></span>
        <h1 className="main__title title">{mainObj.title}</h1>
        <span className="main__title-line title-line"></span>
      </div>
      {/* <!-- INFO --> */}
      <p className="main__about" data-aos="fade-up">
        {mainObj.paragraph}
      </p>
      {/* <!-- CARDS --> */}
      <div className="main__card-container">
        {mainObj.cardIcons.map((cardIcon, index) => (
          <div
            className="main__card has-transition"
            data-aos={`zoom-in-${
              index % 3 === 0 ? "right" : index % 3 === 1 ? "up" : "left"
            }`}
            key={index}
          >
            <FontAwesomeIcon icon={cardIcon} className="fa_icon" />
            <p>{mainObj.cardInfos[index]}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

Main.propTypes = {
  lang: PropTypes.string,
};

export default Main;
