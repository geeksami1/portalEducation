import { Box, LinearProgress, Typography } from '@mui/material';
import React from 'react';

const SubjectwiseResult = ({ title, quiz, perc, color }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 3 }}>
      <Box sx={{ width: '20%' }}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="h5">{quiz}</Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '80%' }}>
        <LinearProgress
          variant="determinate"
          value={perc}
          sx={{
            height: '20px',
            width: '100%',
            borderRadius: '10px',
            '.MuiLinearProgress-barColorPrimary': {
              backgroundColor: color, // Set the background color to red
            }
          }}
        />

        <Typography variant="h4">{perc}%</Typography>
      </Box>
    </Box>
  );
};

export default SubjectwiseResult;
