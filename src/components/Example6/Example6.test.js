import React from "react";
import { render } from "@testing-library/react";
import Example6 from "./Example6";

it("has a Example6 component", () => {
  const { getByText } = render(<Example6 />);
  expect(getByText("Example6")).toBeInTheDocument();
});
