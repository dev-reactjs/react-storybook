import React from "react";
import CheckBox from "./CheckBox";

export default {
  title: 'Example/CheckBox',
  component: CheckBox
};

const Template = (args) => <CheckBox {...args} />;

export const Check_Box = Template.bind({});
Check_Box.args = {
  label: "Pets"
};
