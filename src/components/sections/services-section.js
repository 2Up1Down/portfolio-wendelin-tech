import React from "react";
import ServiceOverview from "../service/service-overview";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { renderTitleOptions } from "../../styles/contentful-rich-text";

const ServicesSection = ({ title, servicesCollection }) => {
  if (!servicesCollection) return <section>Loading</section>;

  const services = servicesCollection.items;

  return (
    <section className="">
      <div className="container min-h-screen py-32 grid place-items-center">
        <div className="w-full">
          <div className="mb-8">
            {title &&
              documentToReactComponents(title.json, renderTitleOptions())}
          </div>
          <div className="grid grid-ram">
            {services.map((service) => (
              <ServiceOverview key={service.sys.id} {...service} />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .grid-ram {
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
