import React from 'react'
import "./Calibarated.css"
import { Chart } from "react-google-charts";

export const data = [
  [
    "Element",
    "Density",
    { role: "style" },
    {
      sourceColumn: 0,
      role: "annotation",
      type: "string",
      calc: "stringify",
    },
  ],
  ["Calibrated", 36, "#3DA5D9", null],
  ["Not Calibrated", 16, "#EA7317", null],
  ["Not Required", 16, "#FEC601", null],

];

export const options = {
  chartArea: { left: 0, top: 0, right: 0, bottom: 0 },
  width: 400,
  height: 180,
  bar: { groupWidth: "35%" },
  legend: { position: "none" },
  backgroundColor: '#F8FBFF',
};

const Calibrated = () => {
  return (
    <div className='card_calib'>
      <h4 className='exp_Ca'>Calibrated</h4>
      <div className='chart_calibrates'>
        <Chart
          chartType="BarChart"
          data={data}
          options={options}
        />
      </div>
      <div className='Laboratory9'>Calibrated</div>
      <div className='Laboratory_19'>NotCalibrated</div>
      <div className='Laboratory_129'>Not Required</div>
    </div>

  )
}

export default Calibrated
