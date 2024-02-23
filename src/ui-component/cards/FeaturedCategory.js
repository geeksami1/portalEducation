import { Box, Typography } from '@mui/material';
import React from 'react';

const FeaturedCategory = ({ img, title, bgColor }) => {
  return (
   
      <Box
        style={{ backgroundColor: bgColor, width: '100%', height: '100%' }}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          p: 2,
          borderRadius: 2,
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <img src={img} alt="subject1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <Typography variant="h5" sx={{ color: '#fff', mt: 2 }}>
          {title}
        </Typography>
      </Box>
  );
};

export default FeaturedCategory;
