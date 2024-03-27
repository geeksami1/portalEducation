import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import pdf from '../../../assets/images/pdf.png';

const DocumentCards = ({ title, pages }) => {
  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: 'background.paper',
        borderRadius: 5,
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        display: 'flex',
        gap: 2,
        justifyContent: 'space-between',
        alignItems: 'center'
        
      }}
    >
      {/* LEFT SECTION HERE */}
      <Box sx={{ width: '60%', height: '100%', display: 'flex', alignItems: 'center', gap: 2 }}>
        <img src={pdf} alt="news01" style={{ width: '40px', height: '40px', objectFit: 'cover' }} />

        <Box>
          <Typography variant="h4" sx={{ color: 'rgba(0, 0, 0, 0.75)' }}>
            {title}
          </Typography>
          <Typography variant="h5" sx={{ color: 'rgba(0, 0, 0, 0.55)' }}>
            {pages} Pages
          </Typography>
        </Box>
      </Box>

      {/* RIGHT SECTION HERE */}
      <Box sx={{ width: '30%', height: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'left', flexDirection: 'column' }}>
          {/* View Button  */}
          <Button sx={{ color: 'rgba(151, 145, 208, 1)' }}>View</Button>
          {/* DOWNLOAD BUTTON  */}
          <Button sx={{ color: 'rgba(33, 149, 98, 1)' }}>Download</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default DocumentCards;
