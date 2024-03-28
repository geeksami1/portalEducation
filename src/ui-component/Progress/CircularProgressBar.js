import React from 'react';
import { CircularProgress, Box, Typography } from '@mui/material';

const CircularProgressBar = ({ value, size = 100, color = '#3f51b5' }) => {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" value={value} size={size} style={{ color }} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h2" sx={{ color: 'rgba(0, 0, 0, 0.75)' }}>
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
};

export default CircularProgressBar;
