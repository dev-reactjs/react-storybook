import React from 'react';
import RadioBt from './Radio';

export default {
  title: 'Example/Radio',
  component: RadioBt
}

const Template = (args) => <RadioBt {...args} />;

export const RadioButton = Template.bind({});
RadioButton.args = {
  label: "Radio1",
}

