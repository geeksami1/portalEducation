import { Box, Typography } from '@mui/material';
import React from 'react';
import courseteach from '../../assets/images/courseteach.jpeg';

const TopicSlider = ({ title }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRadius: '10px',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${courseteach})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '10px',
        }}
      />
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          p: 2,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 700, fontSize: '32px', color: '#fff', mt: 4 }}>
          {title}
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 700, fontSize: '32px', color: '#fff' }}>
          Course
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 200, fontSize: '14px', color: '#fff', width: '60%', mt: 3 }}>
          The course is for beginners. It will interest for people who like {title}.
        </Typography>
      </Box>
    </Box>
  );
};

export default TopicSlider;
