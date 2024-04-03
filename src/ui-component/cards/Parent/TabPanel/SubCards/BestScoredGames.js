import { Box, Card, Typography } from '@mui/material';
import React from 'react';

const BestScoredGames = ({ title, img, words, bgColor }) => {
  return (
    <Card
      sx={{
        my: 2,
        width: '100%',
        background: bgColor,
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        p: 2
      }}
    >
      <Box sx={{bgcolor: 'purple', borderRadius: '30px', p: 1}}>
        <img src={img} alt="bestscored games" style={{ width: '120px', height: '120px', objectFit: 'contain', borderRadius: '30px' }} />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'left', alignItems: 'left', gap: 1 }}>
        <Typography variant="h2" sx={{ color: 'rgba(0, 0, 0, 0.75)' }}>
          {title}
        </Typography>
        <Typography variant="h4" sx={{ color: 'rgba(0, 0, 0, 0.75)', fontSize: 12 }}>
          {words}
        </Typography>
      </Box>
    </Card>
  );
};

export default BestScoredGames;
