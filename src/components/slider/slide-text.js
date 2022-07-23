import React from "react";
import ArrowLink from "../common/arrow-link";
import en from "../../../public/locales/en/portfolio";
import de from "../../../public/locales/de/portfolio";
import { useRouter } from "next/router";

const SlideText = ({ project, labelServices, active }) => {
  const { title, excerpt, customer, services } = project;
  const { locale } = useRouter();
  const t = locale === "de" ? de : en;

  return (
    <article
      className={`transition-opacity duration-500 ease-in-out ${
        active ? "opacity-100" : "hidden opacity-0"
      }`}
    >
      <div className="lg:pr-32">
        <h3 className="pb-3 text-xl font-bold">
          {title} | {customer.customer}
        </h3>
        <p className="pb-8">{excerpt}</p>
        <h4 className="pb-3 font-semibold">{labelServices}</h4>
        <p className="pb-11">{services.join(", ")}</p>
        <ArrowLink
          url={customer.url}
          variant="white"
          size="large"
          direction="north-east"
        >
          {t.slugText}
        </ArrowLink>
      </div>
    </article>
  );
};

export default SlideText;
