import React from "react";
import Link from "next/link";
import { MdNorthEast } from "react-icons/md";
import { cls } from "../../utils/helpers";
import PropTypes from "prop-types";

// Reusable Link component inspired by
// https://www.luckymedia.dev/blog/creating-a-reusable-button-component-with-react-and-tailwind

const ArrowLink = ({
  children,
  url = "",
  variant = "base",
  size = "normal",
  className,
  direction = "none",
  ...rest
}) => {
  return (
    <Link href={url} {...rest}>
      <a
        className={cls(` 
            ${classes.base}
            ${classes.size[size]}
            ${classes.variant[variant]}
            ${className}`)}
      >
        {children}
        {direction !== "none" && (
          <span className="inline-block pl-1">
            <MdNorthEast size={16} />
          </span>
        )}
      </a>
    </Link>
  );
};

const classes = {
  base: "",
  size: {
    small: "text-sm border-b-[1px]",
    normal: "border-b-2",
    large: "text-lg border-b-2",
  },
  variant: {
    base: "text-text-base border-b-text-base",
    primary: "text-primary border-b-primary",
    white: "text-white border-b-white",
    "primary-light": "text-primary-light border-b-primary-light",
    accent: "text-accent border-b-accent",
  },
};

ArrowLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf([
    "primary",
    "primary-light",
    "accent",
    "base",
    "white",
  ]),
  size: PropTypes.oneOf(["small", "normal", "large"]),
  direction: PropTypes.oneOf(["", "none", "north-east"]),
};

export default ArrowLink;
