import React from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';
import bulb from '../../../assets/images/bulb.png';

const SubjectResultCard = ({ backgroundColor, heading, number, circle }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: backgroundColor,
        width: '100%',
        height: '100px',
        borderRadius: '20px',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 20px'
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      {/* BOX 1  */}
      <Box sx={{ position: 'relative' }}>
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: circle, // Background color of the circle
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: '-30px',
            color: '#000',
            fontWeight: 'bold'
          }}
        >
          {number}
        </div>
      </Box>
      {/* BOX 2  */}
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <Typography variant="h4" sx={{ fontWeight: 600, fontSize: '14px', color: 'rgba(0, 0, 0, 0.7)', marginLeft: '55px' }}>
          {heading}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 1, ml: 5 }}>
          <LinearProgress
            variant="determinate"
            value={number}
            sx={{
              height: 10,
              borderRadius: '20px',
              width: '100px',
              '& .MuiLinearProgress-barColorPrimary': {
                backgroundColor: circle // Set the color to white
              }
            }}
          />
        </Box>
      </Box>
      {/* BOX 3  */}
      <Box>
        <img src={bulb} alt="bulb" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </Box>
    </Box>
  );
};

export default SubjectResultCard;
