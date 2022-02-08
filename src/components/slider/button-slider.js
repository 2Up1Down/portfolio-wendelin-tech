import React from "react";
import PropTypes from "prop-types";
import { MdArrowForward, MdArrowBack } from "react-icons/md";

const ButtonSlider = ({ direction = "next", onClick }) => {
  return (
    <button onClick={() => onClick()}>
      {direction === "next" && <MdArrowForward size={24} />}
      {direction === "prev" && <MdArrowBack size={24} />}
    </button>
  );
};

ButtonSlider.propTypes = {
  direction: PropTypes.oneOf(["next", "prev"]),
};

export default ButtonSlider;
