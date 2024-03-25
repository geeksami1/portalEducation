import React from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';

const FeedbackStar = ({star, percentage}) => {
  return (
    <>
      <Box my={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
        <Typography variant="h4" sx={{ fontWeight: 600, fontSize: '14px', color: '#0674F8' }}>
        {star} star
        </Typography>
        {/* Linear Progress */}
        <Box sx={{ width: '70%', height: '18px' }}>
          <LinearProgress
            variant="determinate"
            value={percentage}
            sx={{
              height: '100%',
              borderRadius: '4px',
              bgcolor: '#f5f5f5', // Set background color to white
              '& .MuiLinearProgress-bar': {
                bgcolor: '#FFC107', // Set filled color to yellow
              },
            }}
          />
        </Box>
        {/* Progress Label */}
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 400, fontSize: '14px', color: 'rgba(0, 0, 0, 0.54)' }}>
            {percentage}%
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default FeedbackStar;
