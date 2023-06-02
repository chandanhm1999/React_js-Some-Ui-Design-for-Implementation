import React from 'react'
import "./IncidentM.css"
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
      ["Cleared",36, "Green", null],
      ["Not Cleared", 18, "Red", null],
];

export const options = {
    hAxis: { minValue: 0, maxValue: 40 },
    chartArea: { left: 0, top: 0, right: 0, bottom: 0 },
    colors: ['black', 'blue', 'red', 'green', 'yellow', 'gray'],
    backgroundColor: '#F8FBFF',
};

const IncidentM = () => {
    return (
        <div className='card_inciM'>
            <h4 className='exp_iniM'>Incident Management</h4>
            <div className='chart_In'>
                <Chart
                    chartType="BarChart"
                    width="85%"
                    height="180px"
                    data={data}
                    options={options}
                    chartPackages={["corechart", "controls"]}
                />
                <div className='cleared'>Cleared</div>
                <div className='clearedN'>Not Cleared</div>
                <div className='three'>36</div>
                <div className='three_1'>18</div>
            </div>
        </div>
    )
}

export default IncidentM



##css Responsive!
  
  .card_inciM{
    position: absolute;
    left: 571px;
    top: 943px;
    width: 250px;
    height: 280px;

    background: #F8FBFF;
    box-shadow: 0px 4px 8px -2px rgba(0, 79, 149, 0.25);
    border-radius: 30px;
}

@media (max-width: 599px) {
    .card_inciM{
        left: 305px;
        top: 692px;
        width: 200px;
        height: 250px;
    }
}

@media (min-width: 600px) and (max-width: 899px) {
    .card_inciM{
        left: 498px;
        top: 800px;
        width: 250px;
        height: 280px;
    }
}

@media (min-width: 900px) and (max-width: 1199px) {
    .card_inciM {
        left: 915px;
        top: 732px;
        width: 230px;
        height: 270px;
    }
}

@media (min-width: 1200px) {
    .card_inciM {
        left: 1101px;
        top: 943px;
        width: 280px;
        height: 320px;
    }
}
.exp_iniM{
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
    .exp_iniM{
        font-weight: 500;
        font-size: 22px;
        margin-top: 20px;
        line-height: 20px;
    }
}

@media (min-width: 600px) and (max-width: 899px) {
    .exp_iniM {
        font-weight: 500;
        font-size: 28px;
    }
}

@media (min-width: 900px) and (max-width: 1199px) {
    .exp_iniM {
        font-weight: 500;
        font-size: 32px;
    }
}

@media (min-width: 1200px) {
    .exp_iniM {
        font-weight: 500;
        font-size: 32px;
    }
}


.chart_In{
    display: flex;
    margin-top: -15px;
    align-items: center;
    justify-content: center;
}

@media (max-width: 599px) {
    .chart_In{
        margin-top: -23px;
        margin-left: 20px;
    }
}

@media (min-width: 600px) and (max-width: 899px) {
    .chart_In {
        margin-top: -32px;
        margin-left: 20px;
    }
}

@media (min-width: 900px) and (max-width: 1199px) {
    .chart_In {
        margin-top: -32px;
        margin-left: 20px;
    }
}

@media (min-width: 1200px) {
    .chart_In {
        margin-top: -18px;
        margin-left: 15px;
    }
}


.cleared{
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
    .cleared{
        width: 93px;
        height: 24px;
        left: 35px;
        top: 63px;
        font-size: 12px;
    }
}

@media (min-width: 600px) and (max-width: 899px) {
    .cleared {
        width: 93px;
        height: 24px;
        left: 37px;
        top: 75px;
        font-size: 14px;
    }
}

@media (min-width: 900px) and (max-width: 1199px) {
    .cleared {
        width: 73px;
        height: 24px;
        left: 35px;
        top: 86px;
        font-size: 14px;
    }
}

@media (min-width: 1200px) {
    .cleared {
        width: 73px;
        height: 24px;
        left: 35px;
        top: 99px;
        font-size: 16px;
    }
}


.clearedN{
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
    .clearedN{
        width: 93px;
        height: 24px;
        left: 35px;
        top: 153px;
        font-size: 12px;
    }
}

@media (min-width: 600px) and (max-width: 899px) {
    .clearedN {
        width: 93px;
        height: 24px;
        left: 37px;
        top: 164px;
        font-size: 14px;
    }
}

@media (min-width: 900px) and (max-width: 1199px) {
    .clearedN {
        width: 93px;
        height: 24px;
        left: 35px;
        top: 176px;
        font-size: 14px;
    }
}

@media (min-width: 1200px) {
    .clearedN {
        width: 103px;
        height: 24px;
        left: 35px;
        top: 188px;
        font-size: 16px;
    }
}

.three{
    position: absolute;
    width: 30px;
    height: 29px;
    left: 230px;
    top: 135px;

    font-family: 'Futura Md BT';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */


    color: #2A2A2A;

}
@media (max-width: 599px) {
    .three{
        width: 30px;
        height: 29px;
        left: 168px;
        top: 100px;
        font-size: 18px;
    }
}

@media (min-width: 600px) and (max-width: 899px) {
    .three {
        width: 30px;
        height: 29px;
        left: 208px;
        top: 110px;
        font-size: 22px;
    }
}

@media (min-width: 900px) and (max-width: 1199px) {
    .three {
        width: 30px;
        height: 29px;
        left: 190px;
        top: 124px;
        font-size: 22px;
    }
}

@media (min-width: 1200px) {
    .three {
        width: 30px;
        height: 29px;
        left: 230px;
        top: 135px;
        font-size: 24px;
    }
}

.three_1{
    position: absolute;
    width: 30px;
    height: 29px;
    left: 230px;
    top: 135px;

    font-family: 'Futura Md BT';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */


    color: #2A2A2A;

}
@media (max-width: 599px) {
    .three_1{
        width: 30px;
        height: 29px;
        left: 168px;
        top: 185px;
        font-size: 18px;
    }
}

@media (min-width: 600px) and (max-width: 899px) {
    .three_1 {
        width: 30px;
        height: 29px;
        left: 207px;
        top: 200px;
        font-size: 22px;
    }
}

@media (min-width: 900px) and (max-width: 1199px) {
    .three_1 {
        width: 30px;
        height: 29px;
        left: 190px;
        top: 206px;
        font-size: 22px;
    }
}

@media (min-width: 1200px) {
    .three_1 {
        width: 30px;
        height: 29px;
        left: 227px;
        top: 235px;
    }
}
