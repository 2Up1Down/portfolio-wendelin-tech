import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { renderTitleOptions } from "../../styles/contentful-rich-text";
import PartnerCard from "../cards/partner-card";

const PartnersSection = ({ title, subtitle, partnersCollection }) => {
  const partners = partnersCollection.items;

  return (
    <section className="grid  place-items-center bg-white">
      <div className="content-section container py-28">
        <div className="text-center">
          <div className="pb-8">
            {title &&
              documentToReactComponents(title.json, renderTitleOptions())}
          </div>
          <div className="pb-12">{subtitle}</div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {partners &&
            partners.map((partner) => (
              <PartnerCard key={partner.sys.id} {...partner} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
