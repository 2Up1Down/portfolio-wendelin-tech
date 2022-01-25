import React from "react";

const FormInput = ({
  label = "",
  type = "text",
  name,
  placeholder,
  required = false,
}) => {
  return (
    <>
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="mb-4"
      />
    </>
  );
};

export default FormInput;
