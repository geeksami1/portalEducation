import React from 'react';
import { Box, Typography } from '@mui/material';

const TeachingData = ({ color, number, title, img }) => {
  return (
    <Box sx={{ display: 'flex', backgroundColor: color, borderRadius: '20px', gap:2, justifyContent: 'center', alignItems: 'center', px:1, py:2 }}>
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img src={img} alt="img1" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 600, fontSize: '20px', color: '#fff' }}>
          {number}
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 400, fontSize: '14px', color: '#fff' }}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default TeachingData;
