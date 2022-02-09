import React from "react";

const SliderIndicators = ({ total = 1, activeIndicator = 0, onClick }) => {
  return (
    <div className="flex gap-2">
      {Array.from(Array(total)).map((item, index) => (
        <button
          key={index}
          className={`inline-block text-4xl  ${
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
