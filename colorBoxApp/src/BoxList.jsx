//renders Box components and New Box Form
import React, { useState } from "react";
import Box from "./Box";
import NewColorBoxForm from "./NewColorBoxForm";
import { v4 as uuid } from "uuid";

const BoxList = () => {
  const INITIAL_STATE = [
    { id: uuid(), backgroundColor: "blue", width: "50px", height: "50px" },
  ];

  const [boxes, setBoxes] = useState(INITIAL_STATE);

  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, { ...newBox, id: uuid() }]);
  };
  return (
    <div>
      <h1>Box List</h1>
      <NewColorBoxForm addBox={addBox} />
      <div>
        {boxes.map(({ id, backgroundColor, width, height }) => (
          <Box
            id={id}
            backgroundColor={backgroundColor}
            width={width}
            height={height}
            key={id}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxList;
