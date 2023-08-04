import { useState } from "react";
import PropTypes from "prop-types";

const Contact = ({ lang, contactRef }) => {
  const [feedback, setFeedback] = useState("");
  const [email, setEmail] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    // Some Code
    console.log(feedback, email);
    console.log("Data is sent to the backend");
  };

  const footerObj = {};
  if (lang === "uz") {
    footerObj.title = "Bog`lanish";
    footerObj.info =
      "Savol va murojaatlaringiz bo'lsa ushbu manzillarga yo'llashingiz mumkin. Takliflar uchun oldindan rahmat!";
    footerObj.feedbackPlaceholder = "Fikr qoldiring...";
    footerObj.emailPlaceholder = "Emailingiz...";
    footerObj.send = "Yuborish";
    footerObj.location =
      "Qashqadaryo viloyati, G`uzor tumani, Tinchlik mahallasi";
  } else if (lang === "en") {
    footerObj.title = "Contact";
    footerObj.info =
      "If you have questions and requests, you can send them to these addresses. Thanks in advance for the suggestions!";
    footerObj.feedbackPlaceholder = "Leave feedback...";
    footerObj.emailPlaceholder = "Your email...";
    footerObj.send = "Send";
    footerObj.location = "Tinchlik mahalla, Guzor region, Kashkadarya district";
  } else if (lang === "ru") {
    footerObj.title = "Контакт";
    footerObj.info =
      "Если у вас есть вопросы и пожелания, вы можете отправить их по этим адресам. Заранее спасибо за предложения!";
    footerObj.feedbackPlaceholder = "Оставить отзыв...";
    footerObj.emailPlaceholder = "Ваш э-почта...";
    footerObj.send = "Отправить";
    footerObj.location = "Тинчлик, Гузорский район, Кашкадарьинская область";
  }

  return (
    // <!-- CONTACT -->
    <footer id="contact" className="contact" ref={contactRef}>
      {/* <!-- TITLE --> */}
      <div className="contact__title-field title-field">
        <span className="contact__title-line title-line"></span>
        <h1 className="contact__title title">{footerObj.title}</h1>
        <span className="contact__title-line title-line"></span>
      </div>
      <ul className="contact__address-list">
        <li>
          <ul className="contact__address-item">
            <li>{footerObj.info}</li>
            <li>&copy; Copyright Jahongir Hayitov 2023</li>
          </ul>
        </li>
        <li>
          <ul className="contact__address-item">
            <li>
              <a href="#">
                <i className="fa-solid fa-location-dot"></i>{" "}
                {footerObj.location}
              </a>
            </li>
            <li>
              <a href="tel:+998(XX)-XXX-XX-XX">
                <i className="fa-solid fa-phone"></i> +998(XX)-XXX-XX-XX
              </a>
            </li>
            <li>
              <a href="mailto:Jahongirhacking@gmail.com">
                <i className="fa-solid fa-envelope"></i>{" "}
                Jahongirhacking@gmail.com
              </a>
            </li>
          </ul>
        </li>
        <li>
          <ul className="contact__address-item">
            <form className="contact__form">
              <input
                type="text"
                placeholder={footerObj.feedbackPlaceholder}
                onChange={(e) => setFeedback(e.target.value)}
              />
              <input
                type="email"
                placeholder={footerObj.emailPlaceholder}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="form__btn btn has-transition"
                onClick={handleForm}
              >
                {footerObj.send}
              </button>
            </form>
            <ul className="contact__social-links">
              <li>
                <a href="https://t.me/JahongirKhayitov">
                  <i className="fa-brands fa-telegram fa_icon"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/Jahongir_Khayitov/">
                  <i className="fa-brands fa-instagram fa_icon"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook fa_icon"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-youtube fa_icon"></i>
                </a>
              </li>
            </ul>
          </ul>
        </li>
      </ul>
    </footer>
  );
};

Contact.propTypes = {
  lang: PropTypes.string,
  contactRef: PropTypes.object,
};

export default Contact;
