import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import './Dash.css';

const Dash = () => {
  const [selectedBarIndex, setSelectedBarIndex] = useState(null);
  const chartRef = useRef(null);

  // Chart data
  const data = [
    { value: 83, color: "#004F95", bgColorRight: "#ADCCE9", title: 'Laboratory' },
    { value: 59, color: "#3DA5D9", bgColorRight: "#ADCCE9", title: 'Radiology' },
    { value: 95, color: "#73BFB8", bgColorRight: "#ADCCE9", title: 'ICU' },
    { value: 78, color: "#FEC601", bgColorRight: "#ADCCE9", title: 'Operation' },
    { value: 46, color: "#EA7317", bgColorRight: "#ADCCE9", title: 'OPD' },
  ];

  const handleClick = (index) => {
    setSelectedBarIndex(index);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (chartRef.current && !chartRef.current.contains(event.target)) {
        setSelectedBarIndex(null);
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  // Find the maximum value in the data
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <Box
      sx={{
        position: 'absolute',
        width: { xl: '280px', lg: '280px', md: '20%', sm: '38%', xs: '50%' },
        height: { xl: '320px', lg: '320px', md: '270px', sm: '280px', xs: '250px' },
        marginLeft: { xl: '74.5%', lg: '74.5%', md: "45%", sm: "54%", xs: "25%" },
        marginRight: { xl: '50%', lg: '50%', md: '50%', sm: '50%', xs: '50%' },
        marginTop: { xl: '20px', lg: '20px', md: '310px', sm: '320px', xs: '800px' },
        bgcolor: '#F8FBFF',
        borderRadius: '10px',
        boxShadow: '0px 4px 8px -2px rgba(0, 79, 149, 0.25)',
      }}
    >
      <Typography
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Poppins',
          fontWeight: 500,
          color: '#004F95',
          textAlign: 'center',
          lineHeight: { xl: '26px', lg: '26px', md: '20px', sm: '17px', xs: '15px' },
          fontSize: { xl: '32px', lg: '32px', md: '24px', sm: '20px', xs: '18px' },
          paddingTop: { xl: '23px', lg: '23px', md: '20px', sm: '20px', xs: '25px' },
        }}
      >
        Incident Management
      </Typography>

      <div className="chart-wrapper" ref={chartRef}>
        {data.map((item, index) => {
          const barWidth = (item.value / maxValue) * 100 + '%';

          return (
            <div className="card_card" key={index}>
              <div
                className={`chart-bar ${selectedBarIndex === index ? 'selected' : ''}`}
                style={{ width: barWidth, backgroundColor: item.color }}
                onClick={() => handleClick(index)}
                initial={{ width: '0%' }}
                animate={{ width: barWidth }}
                transition={{ duration: 0.3 }}
              />
            </div>
          );
        })}
        {selectedBarIndex !== null && (
          <div className="popup" style={{ top: selectedBarIndex * 80 + 40 }}>
            <div className="popup-title">
              <h3>{data[selectedBarIndex].title}</h3>
            </div>
          </div>
        )}
      </div>
      <div className="cleared">Cleared</div>
      <div className="clearedN">Not Cleared</div>
      <div className="three">36</div>
      <div className="three_1">18</div>
    </Box>
  );
};

export default Dash;
