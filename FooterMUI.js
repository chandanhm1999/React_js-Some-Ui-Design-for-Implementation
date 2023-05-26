import React from 'react'
import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import google from "../../assets/img/google.png"
import App from "../../assets/img/app1.png"

const Footer = () => {
    const [isMobileView, setIsMobileView] = useState(false);
    useEffect(() => {
        const handleResize = () => {
          setIsMobileView(window.innerWidth <= 600);
        };
    
        handleResize();
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    return (
        <Box>
            {/* Funct fo footer app download */}
            <Box sx={{
                color:"#FF731D",
                fontSize: "12px",
                position: "relative",
                ml: {sm: "157px", xs: "157px" },
                top: {sm: "120px", xs: "1360px" },
            }}>
            {isMobileView ? "Download Our App" : ""}
            </Box>
            <Box sx={{
                position: "relative",
                ml: {sm: "105px", xs: "105px" },
                top: {sm: "140px", xs: "1380px" },
            }}>
                {isMobileView ? <img src={google} alt=""/>:""}
            </Box>
            <Box sx={{
                position: "relative",
                ml: {sm: "225px", xs: "225px" },
                top: {sm: "105px", xs: "1346px" },
            }}>
                {isMobileView ? <img src={App} alt=""/>:""}
            </Box>

            {/* footer bar */}

            <Box sx={{
                height: { xl: "80px", lg: "80px", md: "80px", sm: "50px", xs: "50px" },
                background: "#1746A2",
                display: "flex",
                justifyContent: 'left',
                position: "relative",
                left: "0px",
                mt: { xl: "1200px", lg: "1200px", md: "-8px", sm: "-14px", xs: "1480px" },
                ml:"-8px",
                mb: "-10px",
                mr: { xl: "-8px", lg: "-8px", md: "-8px", sm: "-14px", xs: "-24px" },
            }}
            >
                <Typography sx={{
                    color: "white",
                    ml: { xl: "100px", lg: "100px", md: "100px", sm: "60px", xs: "24px" },
                    mt: { xl: "27px", lg: "27px", md: "27px", sm: "18px", xs: "18px" },
                    fontSize: { xl: "18px", lg: "18px", md: "18px", sm: "10px", xs: "10px" },
                }}>
                    © 2020 Vajra, All Rights Reserved
                </Typography>
                <Typography sx={{
                    color: "white",
                    ml: { xl: "750px", lg: "750px", md: "350px", sm: "370px", xs: "104px" },
                    mt: { xl: "27px", lg: "27px", md: "27px", sm: "18px", xs: "18px" },
                    fontSize: { xl: "18px", lg: "18px", md: "18px", sm: "10px", xs: "10px" },
                }}>
                    Terms & Conditions | FAQ’s
                </Typography>
            </Box>
        </Box>
    )
}

export default Footer
