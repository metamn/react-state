import React from "react";
import { render } from "@testing-library/react";
import Example4 from "./Example4";

it("has a Example4 component", () => {
  const { getByText } = render(<Example4 />);
  expect(getByText("Example4")).toBeInTheDocument();
});
