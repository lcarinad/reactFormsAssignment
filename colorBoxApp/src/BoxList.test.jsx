import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(boxList, height = "2", width = "2", color = "peachpuff") {
  const heightInput = boxList.getByLabelText("Height");
  const widthInput = boxList.getByLabelText("Width");
  const backgroundInput = boxList.getByLabelText("Background Color🌈");
  fireEvent.change(backgroundInput, { target: { value: color } });
  fireEvent.change(widthInput, { target: { value: width } });
  fireEvent.change(heightInput, { target: { value: height } });
  const button = boxList.getByText("Add a new box!");
  fireEvent.click(button);
}

it("renders without crashing", function () {
  render(<BoxList />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

describe("adding box", function () {
  it("should add new box", function () {
    const BoxList = render(<BoxList />);
    //no boxes
    expect(BoxList.getByClass("Box")).not.toBeInTheDocument();
    const input = getByLabelText("Height");
    const btn = queryByText("Create Color Box");
    expect(queryByClassName("Box")).not.toBeInTheDocument();

    addBox(BoxList);

    //expect to see box
    const removeButton = BoxList.queryByClassName("remove");
    expect(removeButton).toBeInTheDocument();
  });
});
