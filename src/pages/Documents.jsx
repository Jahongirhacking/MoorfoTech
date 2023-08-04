import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../components/Modal";

const Documents = ({ lang }) => {
  const [currentDoc, setCurrentDoc] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const docObj = { cards: [] };
  for (let index = 0; index < 4; index++) {
    docObj.cards.push({
      img: `./qrCode-images/qr-${index}.jpg`,
      description:
        lang !== "ru"
          ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores,asperiores morales... "
          : "Лорем ипсум долор сит амет,  cонсеcтетур адиписиcинг элит.  Маиорес, аспериорес моралес...",
    });
  }
  if (lang === "uz") {
    docObj.title = "Hujjatlar";
  } else if (lang === "en") {
    docObj.title = "Documents";
  } else if (lang === "ru") {
    docObj.title = "Документы";
  }

  return (
    // <!-- DOCUMENTS -->
    <>
      {showModal && (
        <Modal setShowModal={setShowModal}>
          <img
            id="qr-code"
            src={docObj.cards[currentDoc].img}
            alt={`QR code no:${currentDoc}`}
          />
        </Modal>
      )}
      <section id="documents" className="documents">
        {/* <!-- TITLE --> */}
        <div className="documents__title-field title-field">
          <span className="main__title-line title-line"></span>
          <h1 className="main__title title">{docObj.title}</h1>
          <span className="main__title-line title-line"></span>
        </div>
        {/* <!-- docs --> */}
        <ul className="documents__list">
          {docObj.cards.map((card, index) => (
            <li
              className="documents__item documents__btn btn has-transition"
              data-aos={`fade-up-${index % 2 === 0 ? "right" : "left"}`}
              onClick={() => {
                setCurrentDoc(index);
                setShowModal(true);
              }}
              key={index}
            >
              <p className="documents__caption">{card.description}</p>
              <i className="fa-solid fa-right-long"></i>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

Documents.propTypes = {
  lang: PropTypes.string,
};

export default Documents;
