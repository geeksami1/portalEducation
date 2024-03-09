import { Box, Typography } from '@mui/material';
import React from 'react';
import Rectangle from '../../assets/images/slidercover.png';
const TopicSlider = ({ title }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${Rectangle})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        p: 2
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
  );
};

export default TopicSlider;
