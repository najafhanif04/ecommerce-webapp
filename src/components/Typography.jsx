import classNames from "classnames";
import React from "react";

export default function Typography({ children, type, color, className }) {
  return (
    <div
      className={classNames(
        {
          "text-3xl font-bold": type === "h1",
          "text-lg font-semibold": type === "p",
          "text-green-600": color === "primary",
          "text-blue-600": color === "secondary",
        },
        className
      )}
    >
      {children}
    </div>
  );
}
