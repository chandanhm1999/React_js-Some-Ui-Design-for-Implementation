import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import './Dash.css';
import IconButton from '@mui/material/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Dash = () => {
  const [selectedBarIndex, setSelectedBarIndex] = useState(null);
  const chartRef = useRef(null);
  const popupRef = useRef(null);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClick = () => {
    setIsPopupOpen(!isPopupOpen);
    document.documentElement.style.setProperty(
      '--blur-intensity',
      isPopupOpen ? '0' : '8px'
    );
  };

  const handleCloseClick = () => {
    setIsPopupOpen(false);
  };

  // Chart data
  const data = [
    { value: 36, color: '#29A343', title: 'Calibrated' },
    { value: 21.5, color: '#E12C33', title: 'Not Calibrated' },
  ];

  const handleBarClick = (index) => {
    setSelectedBarIndex(index);
    handleClick();
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        chartRef.current &&
        !chartRef.current.contains(event.target) &&
        popupRef.current &&
        !popupRef.current.contains(event.target)
      ) {
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
        marginLeft: { xl: '74.5%', lg: '74.5%', md: '65%', sm: '54%', xs: '25%' },
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
          fontSize: { xl: '32px', lg: '32px', md: '24px', sm: '20px', xs: '19px' },
          paddingTop: { xl: '23px', lg: '23px', md: '20px', sm: '20px', xs: '25px' },
        }}
      >
        Incident Management
      </Typography>

      <div className="chart-wrapper" ref={chartRef}>
        {data.map((item, index) => {
          const barWidth = (item.value / maxValue) * 100 + '%';

          return (
            <div className="card_cardc" key={index}>
              <div
                className={`chart-barc ${selectedBarIndex === index ? 'selected' : ''}`}
                style={{ width: barWidth, backgroundColor: item.color }}
                onClick={() => handleBarClick(index)}
              />
            </div>
          );
        })}
        {selectedBarIndex !== null && isPopupOpen && (
          <div className="popupc" ref={popupRef}>
            <div className="popup-titlec">
              <Typography sx={{
                fontSize: { xl: '28px', lg: '28px', md: '24px', sm: '20px', xs: '19px' },
                fontWeight: 600,
              }}
              >Thank You</Typography>
              <Typography sx={{
                fontSize: { xl: '22px', lg: '22px', md: '18px', sm: '16px', xs: '16px' },
                fontWeight: 400,
              }}>You have clicked</Typography>
              <Typography sx={{
                fontSize: { xl: '32px', lg: '32px', md: '24px', sm: '20px', xs: '19px' },
                fontWeight: 600,
              }}>It is <span style={{color: "blue"}}>{data[selectedBarIndex].title}</span></Typography>
              <IconButton onClick={handleCloseClick} aria-label="delete" color="primary"
                sx={{
                  marginLeft: { xl: '400px', lg: '400px', md: '65%', sm: '54%', xs: '25%' },
                  marginTop: { xl: '-535px', lg: '-535px', md: '310px', sm: '320px', xs: '800px' },
                  fontSize: "30px",
                  color: "black",
                  fontWeight: 700,
                }}>
                <HighlightOffIcon sx={{
                  fontSize: "30px",
                  color: "white",
                  bgcolor: "black",
                  borderRadius: "25px",
                  fontWeight: 700,
                }}/>
              </IconButton>
            </div>
          </div>
        )}
      </div>
    </Box>
  );
};

export default Dash;
