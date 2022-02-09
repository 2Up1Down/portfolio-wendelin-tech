import React from "react";

const SlideText = ({ project, labelTechnologies, labelServices, active }) => {
  const { title, excerpt, technologies, customer } = project;

  return (
    <article
      className={`absolute inset-0 transition-opacity duration-500 max-w-md ease-in-out ${
        active ? "opacity-100" : "opacity-0"
      }`}
    >
      <h3 className="mb-6 text-xl font-bold">
        {title} | {customer.customer}
      </h3>
      <p className="mb-8">{excerpt}</p>
      <h4 className="mb-6 font-bold">{labelTechnologies}</h4>
      <p className="mb-8">{technologies.toString()}</p>
      <h4 className="mb-6 font-bold">{labelServices}</h4>
    </article>
  );
};

export default SlideText;
