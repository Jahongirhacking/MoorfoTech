import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const ArrowUpBtn = ({ isArrowSticky, refContact }) => {
  return (
    // <!-- ARROW UP -->
    <button
      style={
        isArrowSticky
          ? {
              position: "absolute",
              bottom: refContact.current.offsetHeight + 20 + "px",
            }
          : { position: "fixed", bottom: "20px" }
      }
      className="arrow-up-btn"
      onClick={() => {
        window.scroll(0, 0);
      }}
    >
      <FontAwesomeIcon icon={faArrowUp} className="fa_icon" />
    </button>
  );
};

ArrowUpBtn.propTypes = {
  isArrowSticky: PropTypes.bool,
  refContact: PropTypes.object,
};

export default ArrowUpBtn;
