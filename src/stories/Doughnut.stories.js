import React from "react";
import DoughnutChart from './Doughnut';

export default {
	title: 'Example/DoughnutChart',
	component: DoughnutChart,
};

const Template = (args) => <DoughnutChart {...args} />;

export const Primary = Template.bind({});
