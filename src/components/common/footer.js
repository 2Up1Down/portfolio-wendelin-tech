import React from "react";
import Link from "next/link";
import SocialMedia from "./social-media";

const Footer = ({ footer }) => {
  const {
    copyright,
    companyName,
    companyAddress,
    companyPlace,
    email,
    socialMedia,
    linksCollection,
  } = footer;
  const links = linksCollection.items;

  return (
    <footer className="bg-gray-light text-gray-dark">
      <div className="container pt-24">
        <h4 className="mb-4 text-2xl font-semibold text-text-base">Contact</h4>
        <div className="pb-20 md:flex">
          <div className="mb-4 flex-1">
            <address className="not-italic">
              {companyName} <br />
              {companyAddress} <br />
              {companyPlace}
            </address>
          </div>
          <div className="mb-8 flex-1 lg:flex-[2_2_0%]">
            <address className="not-italic">
              <a href={`mailto:${email}`} className="underline">
                {email}
              </a>
            </address>
          </div>
          <div className="flex justify-end">
            <SocialMedia accounts={socialMedia} />
          </div>
        </div>
        <div className="justify-between pb-6 text-sm md:flex">
          <p className="mb-2 text-gray-dark opacity-60">
            &copy; {new Date().getFullYear()} {copyright}
          </p>
          <p className="text-gray-dark">
            {links.map((link) => (
              <Link key={link.sys.id} href={link.url}>
                <a className="after:not-last:mx-2 after:not-last:content-['|']">
                  {link.text}
                </a>
              </Link>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
