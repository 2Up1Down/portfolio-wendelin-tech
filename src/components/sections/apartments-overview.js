import React from "react";
import ApartmentCard from "../apartments/apartment-card";

const ApartmentsOverview = ({ apartments }) => {
  if (!apartments) return <p>Loading...</p>;

  return (
    <section>
      <div className="container">
        <div className="text-center">
          <h1 className="text-2xl">Here is the title</h1>
        </div>
        <div className="flex">
          {apartments.map(({ id, slug, title, description, image }) => (
            <ApartmentCard
              key={id}
              title={title}
              slug={slug}
              description={description}
              image={image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApartmentsOverview;
