import React from "react";
import ServiceCard from "../cards/service-card";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { renderTitleOptions } from "../../styles/contentful-rich-text";

const ServicesSection = ({ title, servicesCollection }) => {
  if (!servicesCollection) return <section>Loading</section>;

  const services = servicesCollection.items;

  return (
    <section className="" id="services">
      <div className="container grid min-h-screen place-items-center py-32">
        <div className="w-full">
          <div className="mb-8">
            {title &&
              documentToReactComponents(title.json, renderTitleOptions())}
          </div>
          <div className="grid-ram grid">
            {services.map((service) => (
              <ServiceCard key={service.sys.id} {...service} />
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
