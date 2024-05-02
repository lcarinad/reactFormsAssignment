import React from "react";

const Box = ({ id, backgroundColor, width, height }) => {
  return (
    <div
      style={{ backgroundColor: backgroundColor, width: width, height: height }}
    ></div>
  );
};

export default Box;
