import React from "react";

const SlideText = ({ project, labelTechnologies, labelServices, active }) => {
  const { title, excerpt, technologies, customer, services } = project;

  return (
    <article
      className={`absolute  transition-opacity duration-500 ease-in-out ${
        active ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className=" max-w-lg lg:pr-32">
        <h3 className="pb-3 text-xl font-bold">
          {title} | {customer.customer}
        </h3>
        <p className="pb-8">{excerpt}</p>
        <h4 className="pb-3 font-semibold">{labelTechnologies}</h4>
        <p className="pb-8">{technologies.join(", ")}</p>
        <h4 className="pb-3 font-semibold">{labelServices}</h4>
        <p className="">{services.join(", ")}</p>
      </div>
    </article>
  );
};

export default SlideText;
