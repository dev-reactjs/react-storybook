import React from 'react';

import { Input } from './Input';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Input',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Input',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Input',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Input',
};
