//renders Box components and New Box Form
import React, { useState } from "react";
import Box from "./Box";
import NewColorBoxForm from "./NewColorBoxForm";
import { v4 as uuid } from "uuid";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = (newBoxFormData) => {
    setBoxes((boxes) => [...boxes, { ...newBoxFormData, id: uuid() }]);
  };

  const removeBox = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id != id));
  };
  return (
    <div>
      <h1>Box List</h1>
      <NewColorBoxForm addBox={addBox} />
      <div>
        {boxes.map(({ id, backgroundColor, width, height }) => (
          <Box
            handleRemove={removeBox}
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
