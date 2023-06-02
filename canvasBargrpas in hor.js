import React, { useEffect, useRef } from 'react';

const Dash = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Chart data
    const data = [
      { label: "Laboratory", value: 91, color: "#004F95" },
      { label: "Radiology", value: 53, color: "#3DA5D9" },
      { label: "ICU", value: 98, color: "#73BFB8" },
      { label: "Operation", value: 75, color: "#FEC601" },
      { label: "OPD", value: 36, color: "#EA7317" },
    ];

    // Chart options
    const options = {
      chartArea: { left: 100, top: 10, right: 20, bottom: 60 },
      width: 400,
      height: 280,
      barPadding: 20,
      barColor: '#F8FBFF',
    };

    // Calculate chart dimensions
    const chartWidth = options.width - options.chartArea.left - options.chartArea.right;
    const chartHeight = options.height - options.chartArea.top - options.chartArea.bottom;

    // Find the maximum value in the data
    const maxValue = Math.max(...data.map(item => item.value));

    // Calculate the width of each bar based on the maximum value
    const barWidth = chartWidth / maxValue;

    // Clear canvas
    ctx.clearRect(0, 0, options.width, options.height);

    // Draw bars
    data.forEach((item, index) => {
      const barX = options.chartArea.left;
      const barY = options.chartArea.top + index * (options.barPadding + chartHeight / data.length);
      const barHeight = chartHeight / data.length - options.barPadding;

      // Draw bar
      ctx.fillStyle = item.color;
      ctx.fillRect(barX, barY, item.value * barWidth, barHeight);

      // Draw label
      ctx.fillStyle = '#000';
      ctx.font = '12px Arial';
      ctx.textBaseline = 'middle';
      ctx.fillText(item.label, barX + 10, barY + barHeight / 2);

      // Draw value
      ctx.fillStyle = '#000';
      ctx.font = '12px Arial';
      ctx.textBaseline = 'middle';
      ctx.fillText(item.value.toString(), barX + item.value * barWidth + 10, barY + barHeight / 2);
    });
  }, []);

  return (
    <div className='card_dept'>
      <h4 className='exp_deptD'>Departments</h4>
      <div className='chart_Deptments'>
        <canvas ref={canvasRef} width="400" height="280"></canvas>
      </div>
    </div>
  );
};

export default Dash;
