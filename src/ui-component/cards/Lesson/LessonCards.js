import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const LessonCards = ({ img, title, bgColor }) => {
  return (
   <Link to={`/dashboard/chapter`} style={{ textDecoration: 'none' }}>
      <Box
        style={{ backgroundColor: bgColor, width: '100%', height: '200px', }}
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
        <img src={img} alt="subject1" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }} />
        <Typography variant="h5" sx={{ color: '#fff', mt: 2, textAlign: 'center', fontSize: '11px', fontWeight: 600 }}>
          {title}
        </Typography>
      </Box>

   </Link>
  );
};

export default LessonCards;
