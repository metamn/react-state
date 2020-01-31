import React from "react";
import { render } from "@testing-library/react";
import Example5 from "./Example5";

it("has a Example5 component", () => {
  const { getByText } = render(<Example5 />);
  expect(getByText("Example5")).toBeInTheDocument();
});
