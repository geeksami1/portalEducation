import { Box, Typography } from '@mui/material';
import React from 'react';
import ParentCard from './ParentCard';

const ParentFeedback = () => {
  return (
    <Box my={2}>
      <Typography variant="h4" sx={{ fontWeight: 500, fontSize: '18px', color: 'rgba(0, 0, 0, 0.85)' }}>
        Parent Feedback
      </Typography>
      <Box my={4}>
        <ParentCard />
      </Box>
      <Box my={4}>
        <ParentCard />
      </Box>
      <Box my={4}>
        <ParentCard />
      </Box>
      <Box my={4}>
        <ParentCard />
      </Box>
    </Box>
  );
};

export default ParentFeedback;
