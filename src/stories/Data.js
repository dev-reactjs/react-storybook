export const PieData = {
	labels: ['January', 'Febraury', 'March', 'April', 'May'],

	datasets: [{
		backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
		data: [2500, 3300, 700, 1100, 433]
	}]
}

export const PieOptions = {
	title: {
		display: true,
		text: 'Pie Chart'
	},

	legend: {
		display: true,
		position: 'bottom'
	},

	responsive: true,
	maintainAspectRatio: true
}

export const BarData = {
	datasets: [
		{
			label: "Label1",
			backgroundColor: ["#3e95cd"],
			data: [2500]
		},
		{
			label: "Label2",
			backgroundColor: ["#8e5ea2"],
			data: [3003]
		},
		{
			label: "Label3",
			backgroundColor: ["#3cba9f"],
			data: [700]
		},
		{
			label: "Label4",
			backgroundColor: ["#e8c3b9"],
			data: [1100]
		},
		{
			label: "Label5",
			backgroundColor: ["#c45850"],
			data: [555]
		}
	]
}

export const BarOptions = {
	title: {
		display: true,
		text: 'Bar Graph'
	},

	legend: {
		display: true,
		position: "bottom"
	},

	responsive: true,
	maintainAspectRatio: true
}

export const LineData = {
	labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],

	datasets: [
		{
			data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
			label: "Label1",
			borderColor: "#3e95cd",
			fill: false
		},
		{
			data: [200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100],
			label: "Label2",
			borderColor: "#8e5ea2",
			fill: false
		},
	]
}

export const LineOptions = {
	title: {
		display: true,
		text: 'Line Graph'
	},
	legend: {
		display: true,
		position: "bottom"
	},
	responsive: true,
	maintainAspectRatio: true
}


export const DoughData = {
	labels: ["Label1", "Label2", "Label3", "Label4", "Label5"],
	datasets: [
		{
			backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
			data: [200, 400, 900, 1300, 2100]
		}
	]
}

export const DoughOptions = {
	title: {
		display: true,
		text: 'DoughNut Graph'
	},
	legend: {
		display: true,
		position: "bottom"
	},
	responsive: true,
	maintainAspectRatio: true
}



export const HrBarData = {
	labels: ["Label1", "Label2", "Label3", "Label4", "Label5", "Label6", "Label7"],
	datasets: [{
		label: 'My First Dataset',
		data: [65, 59, 80, 81, 56, 55, 40],
		backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(255, 159, 64, 0.2)',
			'rgba(255, 205, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(201, 203, 207, 0.2)'
		],
		borderColor: [
			'rgb(255, 99, 132)',
			'rgb(255, 159, 64)',
			'rgb(255, 205, 86)',
			'rgb(75, 192, 192)',
			'rgb(54, 162, 235)',
			'rgb(153, 102, 255)',
			'rgb(201, 203, 207)'
		],
		borderWidth: 1
	}]
};

export const HrBarOptions = {
	title: {
		display: true,
		text: 'Bar Graph'
	},

	legend: {
		display: true,
		position: "bottom"
	},

	indexAxis: 'y',
	responsive: true,
	maintainAspectRatio: true
}