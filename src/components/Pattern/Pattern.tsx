import React from "react";
import { SingleGameboy } from "../SingleGameboy/SingleGameboy";

export const PatternRow = () => {
  return (
    <svg width="200%" height="100%">
      <pattern
        id="pattern-checkers"
        x="0"
        y="0"
        width="100"
        height="150"
        patternUnits="userSpaceOnUse"
      >
        <SingleGameboy />
      </pattern>

      <rect
        x="0"
        y="0"
        width="150%"
        height="80%"
        fill="url(#pattern-checkers)"
      ></rect>
    </svg>
  );
};
