import React from "react";
import { useRouter } from "next/router";
import FormInput from "./form-input";
import FormTextarea from "./form-textarea";
import Button from "../common/button";
import en from "../../../public/locales/en/contact";
import de from "../../../public/locales/de/contact";

const ContactForm = ({ formId }) => {
  const { locale } = useRouter();
  const t = locale === "de" ? de : en;

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
          label={t.name}
          placeholder={t.name}
          required={true}
        />
        <FormInput
          name="email"
          type="email"
          label={t.email}
          placeholder={t.email}
          required={true}
        />
        <FormTextarea
          name="message"
          label={t.message}
          placeholder={t.message}
          required
        />
        <Button
          type="submit"
          value="Submit"
          className="py-2 bg-accent text-white"
        >
          {t.submit}
        </Button>
      </fieldset>
    </form>
  );
};

export default ContactForm;
