import React from "react";

const FormTextarea = ({
  label = "",
  name = "",
  rows = 5,
  placeholder = "",
  required = false,
}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <textarea
        rows={rows}
        name={name}
        placeholder={placeholder}
        required={required}
        className="mb-4"
      />
    </>
  );
};

export default FormTextarea;
