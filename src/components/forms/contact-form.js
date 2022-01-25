import React from "react";
import FormInput from "./form-input";
import FormTextarea from "./form-textarea";

const ContactForm = ({ formId }) => {
  return (
    <form
      id="fs-frm"
      name="simple-contact-form"
      acceptCharset="utf-8"
      action={`https://formspree.io/f/${formId}`}
      method="post"
      className="w-full max-w-xl shadow-md"
    >
      <fieldset id="fs-frm-inputs" className="flex flex-col">
        <FormInput
          name="name"
          type="text"
          label="Full Name"
          placeholder="First and Last Name"
          required={true}
        />
        <FormInput
          name="email"
          type="email"
          label="Email"
          placeholder="email@domain.tld"
          required={true}
        />
        <FormTextarea
          name="message"
          label="Message"
          placeholder="Your message"
          required
        />
        <button type="submit" value="Submit" className="py-2 bg-orange-300">
          Submit
        </button>
      </fieldset>
    </form>
  );
};

export default ContactForm;
