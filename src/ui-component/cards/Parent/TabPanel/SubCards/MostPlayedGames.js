import { Box, Card, Typography } from '@mui/material';
import React from 'react';

const MostPlayedGames = ({ title, img, completion, bg }) => {
  return (
    <Card
      sx={{
        background: bg,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1),'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', p: 2, width: '100%' }}>
        <img src={img} alt="most played games" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '30px' }} />
      </Box>
      <Typography variant="h3" sx={{ color: 'white' }}>
        {title}
      </Typography>
      <Typography variant="h5" sx={{ color: 'rgba(255, 255, 255, 0.67)', mb:1 }}>
        <span style={{ color: '#FFC200' }}>{completion}%</span> complete{' '}
      </Typography>
    </Card>
  );
};

export default MostPlayedGames;
