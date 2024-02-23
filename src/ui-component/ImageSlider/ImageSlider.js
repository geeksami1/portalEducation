import { Box, Typography } from '@mui/material';
import React from 'react';
import slider1 from '../../../src/assets/images/education.jpg';

const ImageSlider = ({title}) => {
  return (
    <>

      <Box  sx={{ position: 'relative' }}>
        <img src={slider1} alt="slider1" style={{ width: "100%", height: "auto", borderRadius: '10px' }} />
        <Typography
          variant="h4"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            padding: '8px',
            borderRadius: '5px',
          }}
        >
          {title}
        </Typography>
      </Box>
  
    
    </>
  );
}

export default ImageSlider;
