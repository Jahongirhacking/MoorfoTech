import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ArrowUpBtn = () => {
  return (
    // <!-- ARROW UP -->
    <button
      className="arrow-up-btn"
      onClick={() => {
        window.scroll(0, 0);
      }}
    >
      <FontAwesomeIcon icon={faArrowUp} className="fa_icon" />
    </button>
  );
};

export default ArrowUpBtn;
