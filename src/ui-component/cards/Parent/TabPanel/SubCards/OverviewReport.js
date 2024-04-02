import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const OverviewReport = () => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py:5 , borderBottom: '2px solid rgba(0, 0, 0, 0.12)', px:5, borderTop: '2px solid rgba(0, 0, 0, 0.12)' }}>
        {/* LEFT  */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant="h2" sx={{ color: 'rgba(0, 0, 0, 0.75)' }}>
            Progress Report
          </Typography>
          <Typography variant="h5" sx={{ color: 'rgba(0, 0, 0, 0.75))' }}>
            Last Updated : Oct 19, 2023
          </Typography>

        </Box>
        {/* RIGHT  */}

        <Box>
        <Button variant= "text" sx={{ color: '#FF8300' , fontWeight: 'bold', fontSize: 15}} >
            Download Report
        </Button>
        </Box>
      </Box>
    </>
  );
};

export default OverviewReport;
