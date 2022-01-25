import React from "react";
import Layout from "../components/common/layout";
import ContactForm from "../components/forms/contact-form";

const ContactPage = () => {
  return (
    <Layout>
      <div className="container">
        <h1>Hello from Contact page</h1>

        <div className="flex flex-col items-center">
          <ContactForm formId="myyokala" />
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
