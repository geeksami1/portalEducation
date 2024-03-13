import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';

import avatarcourse from '../../../../src/assets/images/avatarcourse.png';

const LeaderboardList = ({ name, progress, ranking, avatar, color }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', px: 5 }}>
      <Box sx={{ width: '20%' }}>
        <Avatar alt="Remy Sharp" src={avatar} sx={{ width: 60, height: 60 }} />
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'left',
          textAlign: 'left',
          width: '50%'
        }}
      >
        <Typography variant="h4" sx={{ color: 'rgba(0, 0, 0, 0.85)', fontWeight: 600, fontSize: 20 }}>
          {name}
        </Typography>
        <Typography variant="h4" sx={{ color: 'rgba(0, 0, 0, 0.55)', fontWeight: 600, fontSize: 14, textAlign: 'left' }}>
          {progress} Completed
        </Typography>
      </Box>

      {/* Rankings  */}

      <Typography
        variant="h4"
        sx={{
          color: 'rgba(0, 0, 0, 0.85)',
          fontWeight: 600,
          fontSize: 14,
          backgroundColor: color,
          padding: 1.25,
          borderRadius: 2,
          width: '10%'
        }}
      >
        {ranking}
      </Typography>
    </Box>
  );
};

export default LeaderboardList;
