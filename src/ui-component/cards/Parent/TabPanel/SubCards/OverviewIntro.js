import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';
import CircularProgressBar from 'ui-component/Progress/CircularProgressBar';

const OverviewIntro = () => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py:5 , borderBottom: 'px solid rgba(0, 0, 0, 0.12)', px:5 }}>
        {/* LEFT  */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant="h2" sx={{ color: 'rgba(0, 0, 0, 0.75)' }}>
            Floyd Miles
          </Typography>
          <Typography variant="h5" sx={{ color: 'rgba(0, 0, 0, 0.75))' }}>
            5th Grade | Year 2023 - 2024
          </Typography>
          <Typography variant="h5" sx={{ color: 'rgba(0, 0, 0, 0.75)' }}>
            ABC School
          </Typography>
          <Typography variant="h5" sx={{ color: 'rgba(0, 0, 0, 0.75)' }}>
            Attendance
             <span style={{ color: '#FF8300', fontWeight: 'bold' }}> 45/50
            </span>
          </Typography>
        </Box>
        {/* RIGHT  */}

        <Box>
        <CircularProgressBar value={75} size={120} color="#FF8300" />
        </Box>
      </Box>
    </>
  );
};

export default OverviewIntro;
