import React from "react";
import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";
import { LineOptions, LineData } from './Data';

const LineChart = ({ option = LineOptions, Data = LineData }) => {
  return (
    <div style={{ height: "500px", width: "500px", margin: "40px" }}>
      <Line
        options={option}
        data={Data}
      />
    </div>
  )
}

LineChart.propTypes = {
  option: PropTypes.object.isRequired,
  Data: PropTypes.object.isRequired
}

export default LineChart;