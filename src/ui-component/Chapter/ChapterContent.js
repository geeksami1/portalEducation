import { Box, Typography } from '@mui/material';
import React from 'react';
import chapterrating from '../../assets/images/chapterrating.png';

const ChapterContent = () => {
  return (
    <>
    {/* CONTINUE READING  */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2, mt: 2 }}>
        <Typography variant="h2" sx={{ fontWeight: 600, fontSize: '25pxx', color: '#000' }}>
          Continue Reading
        </Typography>
        <Box>
          <img src={chapterrating} alt="chevron-right" style={{ width: '100%', height: '30px', objectFit: 'contain' }} />
        </Box>
      </Box>
   
      <Box sx={{ width: '50%' }}>
      <Typography variant="h6" sx={{ fontWeight: 200, fontSize: '14px', color: '#000', display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '25%', fontWeight: 600, fontSize: '14px', color: '#7000FF', mr: 2 }}>1142 </Box>
        <Box sx={{ width: '25%', fontWeight: 200, fontSize: '14px', color: '#000' }}>Words</Box>
      </Typography>
    </Box>
    <Box sx={{ width: '50%' }}>
      <Typography variant="h6" sx={{ fontWeight: 200, fontSize: '14px', color: '#000', display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '25%', fontWeight: 600, fontSize: '14px', color: '#7000FF', mr: 2 }}>ENG </Box>
        <Box sx={{ width: '25%', fontWeight: 200, fontSize: '14px', color: '#000' }}>Language</Box>
      </Typography>
    </Box>
    <Box sx={{ width: '50%' }}>
      <Typography variant="h6" sx={{ fontWeight: 200, fontSize: '14px', color: '#000', display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '25%', fontWeight: 600, fontSize: '14px', color: '#7000FF', mr: 2 }}>02 </Box>
        <Box sx={{ width: '25%', fontWeight: 200, fontSize: '14px', color: '#000' }}>Pages</Box>
      </Typography>
    </Box>
    </>
  );
};

export default ChapterContent;
