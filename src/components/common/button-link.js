import React from "react";
import Link from "next/link";
import { cls } from "../../utils/helpers";
import PropTypes from "prop-types";

// Reusable ButtonLink component inspired by
// https://www.luckymedia.dev/blog/creating-a-reusable-button-component-with-react-and-tailwind

const ButtonLink = ({
  children,
  url = "",
  variant = "base",
  size = "normal",
  width = "default",
  className,
  ...rest
}) => {
  return (
    <Link href={url} {...rest}>
      <a
        className={cls(` 
            ${classes.base}
            ${classes.size[size]}
            ${classes.width[width]}
            ${classes.variant[variant]}
            ${className}`)}
      >
        {children}
      </a>
    </Link>
  );
};

const classes = {
  base: "text-white inline-block font-medium tracking-wide",
  size: {
    small: "text-sm py-1 px-2",
    normal: "py-2 px-4",
    large: "text-lg py-3 px-6",
  },
  width: {
    default: "",
    full: "w-full text-center",
  },
  variant: {
    base: "bg-text-base",
    primary: "bg-primary",
    "primary-light": "bg-primary-light",
    accent: "bg-accent",
  },
};

ButtonLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  width: PropTypes.oneOf(["default", "full"]),
  variant: PropTypes.oneOf(["primary", "primary-light", "accent", "base"]),
  size: PropTypes.oneOf(["small", "normal", "large"]),
};

export default ButtonLink;
