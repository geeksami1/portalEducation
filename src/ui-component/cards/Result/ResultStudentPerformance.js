import { Box, Typography } from '@mui/material';
import React from 'react';

const ResultStudentPerformance = ({ title, perc, studentImg, color, imgHeight, imgWidth }) => {
  return (
    <Box
      sx={{
        backgroundColor: color,
        px: 2,
        borderRadius: '20px',
        height: '200px',
        position: 'relative' // Add relative positioning
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 200, fontSize: '17px', color: '#fff', pt: 4 }}>
        {title}
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: 600, fontSize: '40px', color: '#fff', mt: 2 }}>
        {perc}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h4" sx={{ fontWeight: 200, fontSize: '15px', color: '#fff', mt: 3 }}>
          Average of 5 courses
        </Typography>
        {/* Position the image absolutely */}
        <Box sx={{ position: 'absolute', bottom: -12, right: -25, p: 0, m: 0 }}>
          <img src={studentImg} alt="studentImg" style={{ width: imgWidth, height: imgHeight, objectFit: 'contain' }} />
        </Box>
      </Box>
    </Box>
  );
};

export default ResultStudentPerformance;
