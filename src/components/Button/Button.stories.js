import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  includeStories: ["withText", "withIcon"]
};

export const withText = () => (
  <Button
    altText="click for greeting"
    onClick={() => window.alert("Howdy there, partner!")}
    buttonText="Click for Greeting!"
  />
);
