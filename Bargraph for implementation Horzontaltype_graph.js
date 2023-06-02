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
      <div className='Laboratory_129'>NotRequired</div>


      <div className='Laboratory36'>36</div>
      <div className='Laboratory_16'>16</div>
      <div className='Laboratory_1616'>16</div>
    </div>

  )
}

export default Calibrated



Csss

.card_calib{
    position: absolute;
    left: 199px;
    top: 943px;
    width: 250px;
    height: 280px;

    background: #F8FBFF;
    box-shadow: 0px 4px 8px -2px rgba(0, 79, 149, 0.25);
    border-radius: 30px;
}
@media (max-width: 599px) {
    .card_calib{
        left: 85px;
        top: 1792px;
        width: 410px;
        height: 250px;
    }
}

@media (min-width: 600px) and (max-width: 899px) {
    .card_calib {
        left: 209px;
        top: 2030px;
        width: 500px;
        height: 280px;
    }
}

@media (min-width: 900px) and (max-width: 1199px) {
    .card_calib {
        left: 179px;
        top: 1500px;
        width: 478px;
        height: 270px;
    }
}

@media (min-width: 1200px) {
    .card_calib {
        left: 199px;
        top: 1783px;
        width: 580px;
        height: 320px;
    }
}

.exp_Ca{
    justify-content: center;
    display: flex;
    margin-top: 32px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 73.37%;
    /* or 23px */

    text-align: center;
    text-transform: capitalize;

    color: #004F95;
}
@media (max-width: 599px) {
    .exp_Ca{
        font-weight: 500;
        font-size: 22px;
    }
}

@media (min-width: 600px) and (max-width: 899px) {
    .exp_Ca {
        font-weight: 500;
        font-size: 28px;
    }
}

@media (min-width: 900px) and (max-width: 1199px) {
    .exp_Ca {
        font-weight: 500;
        font-size: 32px;
    }
}

@media (min-width: 1200px) {
    .exp_Ca {
        font-weight: 500;
        font-size: 32px;
    }
}


.chart_calibrates{
    display: flex;
    align-items: center;
    justify-content: center;
}
@media (max-width: 599px) {
    .chart_calibrates{
        margin-top: -25px;
    }
}

@media (min-width: 600px) and (max-width: 899px) {
    .chart_calibrates {
        margin-top: -10px;
    }
}

@media (min-width: 900px) and (max-width: 1199px) {
    .chart_calibrates {
        margin-top: -10px;
    }
}

@media (min-width: 1200px) {
    .chart_calibrates {
        margin-top: 0px;
    }
}

.Laboratory9{
    position: absolute;
    width: 73px;
    height: 24px;
    left: 0px;
    top: 0px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */


    color: #004F95;

}
@media (max-width: 599px) {
    .Laboratory9{
        width: 93px;
        height: 24px;
        left: 8px;
        top: 50px;
        font-size: 14px;
    }
}

@media (min-width: 600px) and (max-width: 899px) {
    .Laboratory9 {
        width: 93px;
        height: 24px;
        left: 52px;
        top: 76px;
        font-size: 14px;
    }
}

@media (min-width: 900px) and (max-width: 1199px) {
    .Laboratory9 {
        width: 73px;
        height: 24px;
        left: 42px;
        top: 86px;
        font-size: 14px;
    }
}

@media (min-width: 1200px) {
    .Laboratory9 {
        width: 73px;
        height: 24px;
        left: 95px;
        top: 92px;
        font-size: 16px;
    }
}


.Laboratory_19{
    position: absolute;
    width: 73px;
    height: 24px;
    left: 0px;
    top: 0px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */


    color: #004F95;

}
@media (max-width: 599px) {
    .Laboratory_19{
        width: 93px;
        height: 24px;
        left: 8px;
        top: 112px;
        font-size: 14px;
    }
}

@media (min-width: 600px) and (max-width: 899px) {
    .Laboratory_19 {
        width: 93px;
        height: 24px;
        left: 52px;
        top: 138px;
        font-size: 14px;
    }
}

@media (min-width: 900px) and (max-width: 1199px) {
    .Laboratory_19 {
        width: 73px;
        height: 24px;
        left: 42px;
        top: 147px;
        font-size: 14px;
    }
}

@media (min-width: 1200px) {
    .Laboratory_19{
        width: 73px;
        height: 24px;
        left: 95px;
        top: 156px;
        font-size: 16px;
    }
}


.Laboratory_129{
    position: absolute;
    width: 73px;
    height: 24px;
    left: 0px;
    top: 0px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */


    color: #004F95;

}
@media (max-width: 599px) {
    .Laboratory_129{
        width: 93px;
        height: 24px;
        left: 8px;
        top: 171px;
        font-size: 14px;
    }
}

@media (min-width: 600px) and (max-width: 899px) {
    .Laboratory_129 {
        width: 93px;
        height: 24px;
        left: 52px;
        top: 198px;
        font-size: 14px;
    }
}

@media (min-width: 900px) and (max-width: 1199px) {
    .Laboratory_129 {
        width: 73px;
        height: 24px;
        left: 42px;
        top: 208px;
        font-size: 14px;
    }
}

@media (min-width: 1200px) {
    .Laboratory_129{
        width: 73px;
        height: 24px;
        left: 95px;
        top: 214px;
        font-size: 16px;
    }
}


.Laboratory36{
    position: absolute;
    width: 73px;
    height: 24px;
    left: 0px;
    top: 0px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */


    color: #2A2A2A;

}
@media (max-width: 599px) {
    .Laboratory36{
        width: 93px;
        height: 24px;
        left: 330px;
        top: 72px;
        font-size: 14px;
    }
}

@media (min-width: 600px) and (max-width: 899px) {
    .Laboratory36 {
        width: 93px;
        height: 24px;
        left: 456px;
        top: 99px;
        font-size: 14px;
    }
}

@media (min-width: 900px) and (max-width: 1199px) {
    .Laboratory36 {
        width: 73px;
        height: 24px;
        left: 442px;
        top: 109px;
        font-size: 14px;
    }
}

@media (min-width: 1200px) {
    .Laboratory36 {
        width: 73px;
        height: 24px;
        left: 497px;
        top: 117px;
        font-size: 16px;
    }
}

.Laboratory_16{
    position: absolute;
    width: 73px;
    height: 24px;
    left: 0px;
    top: 0px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */


    color: #2A2A2A;

}
@media (max-width: 599px) {
    .Laboratory_16{
        width: 93px;
        height: 24px;
        left: 330px;
        top: 134px;
        font-size: 14px;
    }
}

@media (min-width: 600px) and (max-width: 899px) {
    .Laboratory_16 {
        width: 93px;
        height: 24px;
        left: 456px;
        top: 160px;
        font-size: 14px;
    }
}

@media (min-width: 900px) and (max-width: 1199px) {
    .Laboratory_16 {
        width: 73px;
        height: 24px;
        left: 442px;
        top: 169px;
        font-size: 14px;
    }
}

@media (min-width: 1200px) {
    .Laboratory_16{
        width: 73px;
        height: 24px;
        left: 497px;
        top: 179px;
        font-size: 16px;
    }
}

.Laboratory_1616{
    position: absolute;
    width: 73px;
    height: 24px;
    left: 0px;
    top: 0px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */


    color: #2A2A2A;

}
@media (max-width: 599px) {
    .Laboratory_1616{
        width: 93px;
        height: 24px;
        left: 330px;
        top: 193px;
        font-size: 14px;
    }
}

@media (min-width: 600px) and (max-width: 899px) {
    .Laboratory_1616 {
        width: 93px;
        height: 24px;
        left: 456px;
        top: 216px;
        font-size: 14px;
    }
}

@media (min-width: 900px) and (max-width: 1199px) {
    .Laboratory_1616 {
        width: 73px;
        height: 24px;
        left: 442px;
        top: 230px;
        font-size: 14px;
    }
}

@media (min-width: 1200px) {
    .Laboratory_1616{
        width: 73px;
        height: 24px;
        left: 497px;
        top: 238px;
        font-size: 16px;
    }
}
