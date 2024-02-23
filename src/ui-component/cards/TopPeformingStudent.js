import { Box, Typography } from '@mui/material';
import React from 'react';

const TopPerformingStudent = ({ points, name, bgColor, color}) => {
  // Extracting the first character of the name
  const firstLetter = name.charAt(0).toUpperCase();

  return (
    <Box sx={{ width: '100%', height: '30%', bgcolor: bgColor, p: 2, display: 'flex', justifyContent: 'space-between', borderRadius: '20px', my: 2 }}>
      <Box sx={{ width: '30%', display: 'flex', alignItems: 'center' }}>
        {/* 1st BOX - Circular Box */}
        <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: color, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant="h4" sx={{ fontWeight: 600, fontSize: '20px', color: '#fff' }}>
            {firstLetter}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {/* 2nd BOX */}
        <Typography variant="h4" sx={{ fontWeight: 600, fontSize: '20px', color: '#fff' }}>
          {/* NAME */}
          {name}
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 200, fontSize: '10px', color: '#fff' }}>
          {/* POINTs */}
          {points}/10 POINTS
        </Typography>
      </Box>
    </Box>
  );
};

export default TopPerformingStudent;
