import PropTypes from "prop-types";

const Portfolio = ({ lang }) => {
  // Translations
  const portfolioObj = {
    cards: [],
  };
  for (let index = 0; index < 6; index++)
    portfolioObj.cards.push({
      img: `./portfolio-images/portfolio-${index}.jpg`,
      description:
        lang !== "ru"
          ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptates, harum, magnam dicta ut eaque reprehenderit..."
          : "Лорем, ипсум долор сит амет cонсеcтетур адиписиcинг элит. риc волуптатес, дарум, магнам диcта ут эақуе репревендерит...",
      btn:
        lang === "uz"
          ? "Batafsil"
          : lang === "en"
          ? "More Details"
          : "Подробнее",
    });

  if (lang === "uz") {
    portfolioObj.title = "Portfolio";
    portfolioObj.more = "Ko'proq Ko'rish";
  } else if (lang === "en") {
    portfolioObj.title = "Portfolio";
    portfolioObj.more = "See More";
  } else if (lang === "ru") {
    portfolioObj.title = "Портфолио";
    portfolioObj.more = "Узнать Больше";
  }

  return (
    <section id="portfolio" className="portfolio">
      {/* <!-- TITLE --> */}
      <div className="portfolio__title-field title-field">
        <img src="" alt="" />
        <span className="portfolio__title-line title-line"></span>
        <h1 className="portfolio__title title">{portfolioObj.title}</h1>
        <span className="portfolio__title-line title-line"></span>
      </div>
      {/* <!-- CARDS --> */}
      <div className="portfolio__card-container">
        {portfolioObj.cards.map((card, index) => (
          <div
            className="portfolio__card has-transition"
            data-aos="fade-up-right"
            key={index}
          >
            <div
              className="portfolio__img-wrapper img-wrapper has-transition"
              style={{ backgroundImage: `url(${card.img})` }}
            ></div>
            <div className="portfolio__body">
              <p className="portfolio__description">{card.description}</p>
              <button className="portfolio__btn btn has-transition">
                {card.btn}
              </button>
            </div>
          </div>
        ))}

        {/* <!-- Link to full article --> */}
        <a href="#" className="small">
          {portfolioObj.more}
        </a>
      </div>
    </section>
  );
};

Portfolio.propTypes = {
  lang: PropTypes.string,
};

export default Portfolio;
