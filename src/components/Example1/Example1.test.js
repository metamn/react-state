import React from "react";
import { render } from "@testing-library/react";
import Example1 from "./Example1";

it("has a Example1 component", () => {
  const { getByText } = render(<Example1 />);
  expect(getByText("Example1")).toBeInTheDocument();
});
