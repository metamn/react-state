import React from "react";
import Example3 from "./Example3";
import ApiDoc from "./Example3.md";

export default {
  component: Example3,
  title: "Example3",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Example3 />;
