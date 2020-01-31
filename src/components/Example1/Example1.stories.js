import React from "react";
import Example1 from "./Example1";
import ApiDoc from "./Example1.md";

export default {
  component: Example1,
  title: "Example1",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Example1 />;
