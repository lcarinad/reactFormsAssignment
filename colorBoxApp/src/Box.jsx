import React from "react";
import "./Box.css";

const Box = ({ id, backgroundColor, width, height, handleRemove }) => {
  const remove = () => handleRemove(id);

  return (
    <div className="Box">
      <div
        id={id}
        style={{
          backgroundColor: backgroundColor,
          width: width,
          height: height,
        }}
      ></div>
      <button className="remove" onClick={remove}>
        x
      </button>
    </div>
  );
};

export default Box;
