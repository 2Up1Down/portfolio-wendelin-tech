import React from "react";

const FormInput = ({
  label = "",
  type = "text",
  name,
  placeholder,
  required = false,
}) => {
  // inspired by "Floating Labels with Tailwind CSS" https://youtu.be/nJzKi6oIvBA
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="peer mb-4 w-full h-12 px-2 placeholder-transparent outline-none"
      />
      <label
        htmlFor={name}
        className="opacity-70 absolute left-2 -top-0.5 text-xs font-medium text-text-base peer-placeholder-shown:text-base peer-placeholder-shown:opacity-50 peer-placeholder-shown:top-3 peer-focus:-top-0.5 peer-focus:text-xs peer-focus:opacity-70  transition-all select-none pointer-events-none"
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
