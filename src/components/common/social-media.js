import React from "react";
import SocialItem from "./social-item";

const SocialMedia = ({ accounts }) => {
  return (
    <div className="text-primary flex text-3xl space-x-4">
      {Object.entries(accounts).map(([key, value]) => (
        <SocialItem key={key} platform={key} url={value} />
      ))}
    </div>
  );
};

export default SocialMedia;
