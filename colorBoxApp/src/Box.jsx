import React from "react";

const Box = ({ id, backgroundColor, width, height }) => {
  return (
    <div
      style={{ backgroundColor: backgroundColor, width: width, height: height }}
    >
      <p>backgroundColor: {backgroundColor}</p>
    </div>
  );
};

export default Box;
