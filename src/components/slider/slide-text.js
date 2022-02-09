import React from "react";

const SlideText = ({ project, labelTechnologies, labelServices, active }) => {
  const { title, excerpt, technologies, customer } = project;

  return (
    <article
      className={`absolute  transition-opacity duration-500 ease-in-out ${
        active ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className=" max-w-lg lg:pr-32 whitespace-pre-wrap">
        <h3 className="mb-6 text-xl font-bold">
          {title} | {customer.customer}
        </h3>
        <p className="mb-8">{excerpt}</p>
        <h4 className="mb-6 font-bold">{labelTechnologies}</h4>
        <p className="mb-8">{technologies.join(", ")}</p>
        <h4 className="mb-6 font-bold">{labelServices}</h4>
        <p className="mb-8">{technologies.join(", ")}</p>
      </div>
    </article>
  );
};

export default SlideText;
