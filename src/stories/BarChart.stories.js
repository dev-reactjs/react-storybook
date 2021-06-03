import React from "react";
import BarChart from "./BarChart";

export default {
	title: 'Example/BarChart',
	component: BarChart,
};

const Template1 = (args) => <BarChart {...args} />;

export const Primary = Template1.bind({});
