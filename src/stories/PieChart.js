import React from "react";
import { Pie } from "react-chartjs-2";
import PropTypes from "prop-types";
import { PieOptions, PieData } from './Data';

const PieChart = ({ option = PieOptions, Data = PieData }) => {
  return (
    <div style={{ height: "300px", width: "300px", margin: "40px" }}>
      <Pie
        options={option}
        data={Data}
      />
    </div>
  )
}

PieChart.propTypes = {
  option: PropTypes.object.isRequired,
  Data: PropTypes.object.isRequired
}

export default PieChart;