import React, { useEffect, useRef } from 'react';

const Dash = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Chart data
    const data = [
      { value: 91, color: "#3DA5D9" },
      { value: 53, color: "#EA7317" },
      { value: 53, color: "#FEC601" },
    ];

    // Chart options
    const options = {
      chartArea: { left: 100, top: 10, right: 20, bottom: 60 },
      width: 400,
      height: 280,
      barPadding: 42,
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
