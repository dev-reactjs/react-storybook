import React from "react";
import { Doughnut } from "react-chartjs-2";
import PropTypes from "prop-types";
import { DoughOptions, DoughData } from './Data';

const DoughnutChart = ({ option = DoughOptions, Data = DoughData }) => {
  return (
    <div style={{ height: "300px", width: "300px", margin: "40px" }}>
      <Doughnut
        options={option}
        data={Data}
      />
    </div>
  )
}

DoughnutChart.propTypes = {
  option: PropTypes.object.isRequired,
  Data: PropTypes.object.isRequired
}

export default DoughnutChart;