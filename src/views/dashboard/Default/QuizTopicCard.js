import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import book from '../../../assets/images/bookclose.png';
import openbook from '../../../assets/images/openbook.png';

const QuizTopicCard = ({ title, bgColor, project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      style={{ backgroundColor: bgColor, width: '100%', height: "165px", transition: 'transform 0.3s' }}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        p: 2,
        borderRadius: 2,
        cursor: 'pointer',
        position: 'relative' // Added to position the image absolutely
      }}
      onMouseEnter={(e) => {
        setIsHovered(true);
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          p: 2,
          borderRadius: 2,
          cursor: 'pointer'
        }}
      >
        <img
          src={isHovered ? openbook : book}
          alt="subject1"
          style={{ width: '30%', height: '30%', objectFit: 'cover', position: 'absolute' }}
        />
      </Box>
      <Box sx={{textAlign: 'center'}}>
        <Typography variant="h5" sx={{ color: '#fff', mt: 2 }}>
          {title}
        </Typography>
        <Typography variant="h5" sx={{ color: '#fff', mt: 1 }}>
          {project}
        </Typography>
      </Box>
    </Box>
  );
};

export default QuizTopicCard;
