import PropTypes from "prop-types";

const Banner = ({ lang }) => {
  // Translations
  const bannerObj = {};
  if (lang === "uz") {
    bannerObj.title = "MoorfoTech'ga Xush Kelibsiz!";
    bannerObj.paragraph =
      "Biz sizning kelajakdagi biznesingiz uchun samarali va ishonchli web-loyihalar ishlab chiqishni ta'minlaymiz";
    bannerObj.btn = "Batafsil";
  } else if (lang === "en") {
    bannerObj.title = "Welcome to MoorfoTech!";
    bannerObj.paragraph =
      "We provide you with an effective and reliable web project development for your future business";
    bannerObj.btn = "More Details";
  } else if (lang === "ru") {
    bannerObj.title = "Добро пожаловать в MoorfoTech!";
    bannerObj.paragraph =
      "Мы обеспечиваем эффективную и надежную разработку веб-проектов для вашего будущего бизнеса";
    bannerObj.btn = "Подробнее";
  }

  return (
    // <!-- BANNER -->
    // <!-- Warning: I am using AOS here -->
    <article className="banner">
      <h1 className="banner__title" data-aos="fade-up" data-aos-duration="1500">
        {bannerObj.title}
      </h1>
      <p data-aos="fade-up" data-aos-duration="1500">
        {bannerObj.paragraph}
      </p>
      <a
        className="banner__btn btn has-transition"
        href="#"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        {bannerObj.btn}
      </a>
    </article>
  );
};

Banner.propTypes = {
  lang: PropTypes.string,
};

export default Banner;
