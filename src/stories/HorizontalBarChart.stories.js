import React from "react";
import HorizontalBarChart from './HorizontalBarChart';

export default {
	title: 'Example/HorizontalBarChart',
	component: HorizontalBarChart
};

const Template = (args) => <HorizontalBarChart {...args} />;

export const Primary = Template.bind({});
