import React from "react";
import { render } from "@testing-library/react";
import Example3 from "./Example3";

it("has a Example3 component", () => {
  const { getByText } = render(<Example3 />);
  expect(getByText("Example3")).toBeInTheDocument();
});
