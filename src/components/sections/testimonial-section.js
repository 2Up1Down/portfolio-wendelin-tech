import React from "react";
import TestimonialCard from "../testimonial/testimonial-card";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { renderTitleOptions } from "../../styles/contentful-rich-text";

const TestimonialSection = ({ title, subtitle, testimonialsCollection }) => {
  const testimonials = testimonialsCollection.items;

  return (
    <section className="bg-white py-28">
      <div className="container mb-14">
        <div className="mb-4">
          {title && documentToReactComponents(title.json, renderTitleOptions())}
        </div>
        <div className="mb-8 max-w-lg">{subtitle}</div>
      </div>

      <div className="container-snap snap-x flex space-x-5 overflow-x-scroll overflow-x-hidden">
        {testimonials &&
          testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.sys.id}
              testimonial={testimonial}
            />
          ))}
      </div>
      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .container-snap::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .container-snap {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;
