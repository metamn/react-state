import React from "react";
import { render } from "@testing-library/react";
import Example2 from "./Example2";

it("has a Example2 component", () => {
  const { getByText } = render(<Example2 />);
  expect(getByText("Example2")).toBeInTheDocument();
});
