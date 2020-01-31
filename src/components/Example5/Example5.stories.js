import React from "react";
import Example5 from "./Example5";
import ApiDoc from "./Example5.md";

export default {
  component: Example5,
  title: "Example5",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Example5 />;
