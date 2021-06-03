import React from "react";
import { Bar } from "react-chartjs-2";
import PropTypes from "prop-types";
import { BarOptions, BarData } from './Data';

const BarChart = ({ option = BarOptions, Data = BarData }) => {
  return (
    <div style={{ height: "500px", width: "500px", margin: "40px" }}>
      <Bar
        options={option}
        data={Data}
      />
    </div>
  )
}

BarChart.propTypes = {
  option: PropTypes.object.isRequired,
  Data: PropTypes.object.isRequired
}

export default BarChart;