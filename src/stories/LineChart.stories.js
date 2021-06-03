import React from "react";
import LineChart from "./LineChart";

export default {
	title: 'Example/LineChart',
	component: LineChart,
};

const Template = (args) => <LineChart {...args}/>;

export const Primary = Template.bind({});
