import { Avatar, Box, Card, Typography } from '@mui/material';
import React from 'react';

const LeadershipGame = ({ avatar, name, position, badge }) => {
  return (
    <>
      <Card sx={{my:2, width: '100%', background: 'background.paper', color: 'black', display: 'flex', alignItems: 'center', gap: 4, justifyContent: 'space-between', p: 2 }}>
        {/* AVATAR  */}
        <Box>
          <Avatar sx={{ width: 60, height: 60 }} src={avatar} />
        </Box>

        {/* CONTENT  */}
        <Box>
          <Typography variant="h4" sx={{ color: 'rgba(0, 0, 0, 0.75)' }}>
            {name}
          </Typography>
          <Typography variant="h5" sx={{ color: '#FF0000', fontSize: 12 }}>
            {position}
          </Typography>
        </Box>

        {/* BADGE  */}
        <Box>
          <img src={badge} alt="leadership game" style={{ width: '60px', height: '60px', objectFit: 'contain', borderRadius: '30px' }} />
        </Box>
      </Card>
    </>
  );
};

export default LeadershipGame;
