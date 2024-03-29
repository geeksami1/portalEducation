import { Box, Typography } from '@mui/material';
import React from 'react';
import upcomingquiz from 'assets/images/upcomingquiz.png';
const UpcomingQuiz = () => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', gap: 3, p: 0, m: 0 }}>
      <Box sx={{ width: '30%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img src={upcomingquiz} alt="Quiz" style={{ width: '100%', height: '285px', objectFit: 'contain', backgroundColor: '#E5B1C7' }} />
  </Box>

        <Box sx={{ width: '70%', my: 2 }}>
          <Box sx={{ width: '100%', display: 'flex', gap: 2, flexDirection: 'column' }}>
            <Typography variant="h4" sx={{ color: 'rgba(0, 0, 0, 0.75)' }}>
              Mock Test
            </Typography>
            <Typography variant="h5" sx={{ color: 'rgba(255, 0, 0, 0.41)', fontSize: 12 }}>
              On 22nd Oct 2022
            </Typography>
          </Box>
          <Box sx={{ borderBottom: '1px solid #E0E0E0', width: '100%', mt: 2, mb: 2 }}></Box>
          <Box sx={{ width: '100%', display: 'flex', gap: 2, flexDirection: 'column' }}>
            <Typography variant="h4" sx={{ color: 'rgba(0, 0, 0, 0.75)' }}>
              Mock Test
            </Typography>
            <Typography variant="h5" sx={{ color: 'rgba(255, 0, 0, 0.41)', fontSize: 12 }}>
              On 22nd Oct 2022
            </Typography>
          </Box>
          <Box sx={{ borderBottom: '1px solid #E0E0E0', width: '100%', mt: 2, mb: 2 }}></Box>
          <Box sx={{ width: '100%', display: 'flex', gap: 2, flexDirection: 'column' }}>
            <Typography variant="h4" sx={{ color: 'rgba(0, 0, 0, 0.75)' }}>
              Mock Test
            </Typography>
            <Typography variant="h5" sx={{ color: 'rgba(255, 0, 0, 0.41)', fontSize: 12 }}>
              On 22nd Oct 2022
            </Typography>
          </Box>
          <Box sx={{ borderBottom: '1px solid #E0E0E0', width: '100%', mt: 2, mb: 2 }}></Box>
        </Box>
      </Box>
    </>
  );
};

export default UpcomingQuiz;
