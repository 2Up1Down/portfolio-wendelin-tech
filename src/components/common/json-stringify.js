import React from "react";

const JsonStringify = ({ jsonObj }) => {
  return (
    <section className="bg-lime-100 ">
      <div className="container py-16">
        <pre>{JSON.stringify(jsonObj, null, 2)}</pre>
      </div>
    </section>
  );
};

export default JsonStringify;
