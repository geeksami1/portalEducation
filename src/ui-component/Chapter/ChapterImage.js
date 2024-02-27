import { Box } from '@mui/material';
import React from 'react';
import chapterimg from '../../assets/images/green.png';

const ChapterImage = () => {
  return (
      <Box>
        <img src={chapterimg} alt="chapter" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '20px' }} />
      </Box>
  );
};

export default ChapterImage;
