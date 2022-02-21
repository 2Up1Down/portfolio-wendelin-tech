import React from "react";
import ContactForm from "../forms/contact-form";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { renderTitleOptions } from "../../styles/contentful-rich-text";

const ContactSection = ({ title, subtitle, formId }) => {
  return (
    <section className="bg-primary" id="contact">
      <div className="container grid min-h-screen place-items-center py-32">
        <div className="w-[32rem]">
          <div className="mb-4 text-center text-white">
            {title &&
              documentToReactComponents(title.json, renderTitleOptions())}
          </div>
          <div className="mb-8 max-w-lg text-center text-white opacity-70">
            {subtitle}
          </div>
          <ContactForm formId={formId} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
