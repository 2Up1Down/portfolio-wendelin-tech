import React, { useState } from "react";

const Button = ({ className, children }) => {
  const [activated, setActivated] = useState(false);

  return (
    <button
      className={`button ${className}`}
      aria-pressed={activated ? "true" : "false"}
      onClick={() => setActivated(!activated)}
    >
      {children}
    </button>
  );
};

export default Button;
