import React from "react";
import SocialItem from "./social-item";

const SocialMedia = ({ accounts }) => {
  return (
    <div className="flex space-x-4 text-3xl">
      {Object.entries(accounts).map(([key, value]) => (
        <SocialItem key={key} platform={key} url={value} />
      ))}
    </div>
  );
};

export default SocialMedia;
