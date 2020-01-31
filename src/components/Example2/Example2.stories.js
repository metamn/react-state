import React from "react";
import Example2 from "./Example2";
import ApiDoc from "./Example2.md";

export default {
  component: Example2,
  title: "Example2",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Example2 />;
