import { Box } from '@mui/material';
import React from 'react';
import emotionmath from '../../assets/images/emotionmath.jpeg';

const ChapterImage = () => {
  return (
    <Box>
      <img 
        src={emotionmath} 
        alt="chapter" 
        style={{ 
          width: '100%', 
          height: '280px', 
          objectFit: 'cover', 
          borderRadius: '20px',
          objectPosition: 'top' // Set object position to top
        }} 
      />
    </Box>
  );
};

export default ChapterImage;
