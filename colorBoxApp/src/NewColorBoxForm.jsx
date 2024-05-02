import React, { useState } from "react";
import "./NewColorBoxForm.css";

const NewColorBoxForm = ({ addBox }) => {
  const INITIAL_STATE = { backgroundColor: "", width: "", height: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ ...formData });
    setFormData(INITIAL_STATE);
  };

  return (
    <form className="AddBoxForm" onSubmit={handleSubmit}>
      <label htmlFor="backgroundColor">Background Color🌈: </label>
      <input
        id="backgroundColor"
        type="text"
        name="backgroundColor"
        value={formData.backgroundColor}
        placeholder="background color"
        onChange={handleChange}
      />

      <label htmlFor="width">Width: </label>
      <input
        id="width"
        type="text"
        name="width"
        value={formData.width}
        placeholder="width"
        onChange={handleChange}
      />

      <label htmlFor="height">Height: </label>
      <input
        id="height"
        type="text"
        name="height"
        value={formData.height}
        placeholder="height"
        onChange={handleChange}
      />
      <button>Create Color Box</button>
    </form>
  );
};

export default NewColorBoxForm;
