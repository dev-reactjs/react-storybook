import React from "react";
import { Bar } from 'react-chartjs-2';
import PropTypes from "prop-types";
import { HrBarOptions, HrBarData, data } from './Data';

const HorizontalBarChart = ({ option = HrBarOptions, Data = HrBarData }) => {
  return (
    <div style={{ height: "300px", width: "300px", margin: "40px" }}>
      <Bar
        options={option}
        data={Data}
      />
    </div>
  )
}

HorizontalBarChart.propTypes = {
  option: PropTypes.object.isRequired,
  Data: PropTypes.object.isRequired
}

export default HorizontalBarChart;