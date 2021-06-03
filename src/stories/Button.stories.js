import React from 'react';

import { ButtonCom as Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button
};

const Template = (args) => <Button {...args} />;

export const Button_box = Template.bind({});
Button_box.args = {
  label: "Click me",
  variant: "outlined"
}

