import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';

const CompletionProgress = ({title, subtitle, percentage}) => {
    // PROGRESS BAR
  const completionPercentage = percentage;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
      <Box>
        {/* TITLE  */}
        <Typography variant="h4" sx={{ fontWeight: 600, fontSize: '20px', color: '#000' }}>
          {title}
        </Typography>
        {/* SUBTITLE  */}
        <Typography variant="h4" sx={{ fontWeight: 600, fontSize: '16px', color: '#000000AB' }}>
          {subtitle}
        </Typography>
      </Box>
      <Box sx={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
        <CircularProgress variant="determinate" value={completionPercentage} sx={{ color: 'primary.main' }} size={60} thickness={4} />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center'
          }}
        >
          <Typography variant="body1" component="div" sx={{ color: 'black' }}>
            {`${completionPercentage}%`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CompletionProgress;
