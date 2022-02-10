import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const supportedPlatforms = {
  github: "github",
  linkedin: "linkedin",
  twitter: "twitter",
  instagram: "instagram",
};

const SocialItem = ({ platform = "", url = "/" }) => {
  if (!supportedPlatforms[platform]) return <></>;
  if (!url) return <></>;

  return (
    <Link href={url}>
      <a>
        {platform === supportedPlatforms.linkedin && <FaLinkedin />}
        {platform === supportedPlatforms.twitter && <FaTwitter />}
        {platform === supportedPlatforms.instagram && <FaInstagram />}
        {platform === supportedPlatforms.github && <FaGithub />}
      </a>
    </Link>
  );
};

export default SocialItem;
