import React from "react";

const SliderIndicators = ({ total = 1, activeIndicator = 0, onClick }) => {
  // index + 1 is used as the slider numeration starts at 1
  return (
    <div className="">
      {Array.from(Array(total)).map((item, index) => (
        <button
          key={index}
          className={`inline-block mr-3 text-4xl  ${
            index === activeIndicator ? "text-gray-white" : "text-gray-dark"
          }`}
          onClick={() => onClick(index)}
        >
          •
        </button>
      ))}
    </div>
  );
};

export default SliderIndicators;
