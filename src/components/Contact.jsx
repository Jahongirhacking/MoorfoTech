const Contact = () => {
  return (
    // <!-- CONTACT -->
    <footer id="contact" className="contact">
      {/* <!-- TITLE --> */}
      <div className="contact__title-field title-field">
        <span className="contact__title-line title-line"></span>
        <h1 className="contact__title title">Bog`lanish</h1>
        <span className="contact__title-line title-line"></span>
      </div>
      <ul className="contact__address-list">
        <li>
          <ul className="contact__address-item">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              voluptate, saepe sed quidem maiores ratione hic consectetur quod
              atque commodi.
            </li>
            <li>
              &copy; Copyright Jahongir Hayitov
              <span id="current-year"></span>
            </li>
          </ul>
        </li>
        <li>
          <ul className="contact__address-item">
            <li>
              <a href="#">
                <i className="fa-solid fa-location-dot"></i> Qashqadaryo
                viloyati, G`uzor tumani, Tinchlik mahallasi
              </a>
            </li>
            <li>
              <a href="tel:+998(XX)-XXX-XX-XX">
                <i className="fa-solid fa-phone"></i> +998(XX)-XXX-XX-XX
              </a>
            </li>
            <li>
              <a href="mailto:J*******@gmail.com">
                <i className="fa-solid fa-envelope"></i>{" "}
                Jahongirhacking@gmail.com
              </a>
            </li>
          </ul>
        </li>
        <li>
          <ul className="contact__address-item">
            <form className="contact__form">
              <input type="text" placeholder="Izoh qoldiring" />
              <input type="email" placeholder="email" />
              <button className="form__btn btn has-transition">Yuborish</button>
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

export default Contact;
