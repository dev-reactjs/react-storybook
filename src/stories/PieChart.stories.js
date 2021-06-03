import React from "react";
import PieChart from "./PieChart";

export default {
  title: 'Example/PieChart',
  component: PieChart,
};

const Template = (args) => <PieChart {...args} />;

export const Primary = Template.bind({});
