import React from "react";

const sizeClasses = {
  txtInterRegular40: "font-inter font-normal italic",
  txtInterRegular32: "font-inter font-normal italic",
  txtInterRegular32Black90001: "font-inter font-normal italic",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
