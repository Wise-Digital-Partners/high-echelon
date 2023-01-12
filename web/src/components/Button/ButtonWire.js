import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Button = ({
  className,
  href,
  outboundLink,
  modal,
  onClick,
  type,
  altStyle,
  icon,
  text,
}) => {
  const Tag = href ? AniLink : "button";
  const target = outboundLink && "_blank";
  const rel = outboundLink && "noopener noreferrer";
  let link = true;

  href && (link = !href.includes("tel:") && !href.includes("mailto:"));

  return (
    <Tag
      className={`group relative overflow-hidden min-w-[160px] h-[48px] px-6 rounded-[8px] border-2 border-primary-100 inline-flex items-center justify-center text-center font-body font-semibold no-underline whitespace-nowrap ${
        altStyle
          ? "bg-primary-700 hover:bg-primary-700 text-primary-100 hover:text-primary-600"
          : "bg-primary-700 hover:bg-primary-700 text-primary-100 hover:text-primary-600"
      } ${className || ""}`}
      {...(link ? { fade: "true", to: href } : { href: href })}
      target={target}
      rel={rel}
      data-modal-open={modal}
      onClick={onClick}
      type={type}
      alt-style={true}
    >
      {icon && (
        <i
          className={`mr-2 relative left-0 group-hover:left-2 transition-all duration-300 ease-linear z-10 ${
            altStyle ? "text-white" : "text-white"
          } ${icon}`}
        ></i>
      )}
      {text}
    </Tag>
  );
};

export default Button;
