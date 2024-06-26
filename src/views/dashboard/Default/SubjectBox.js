import { Box, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from 'views/utilities/Capitilize';

const SubjectBox = ({ img, title, bgColor, id }) => {
  return (
    <>
      <Link to={`/dashboard/topic/${id}`} style={{ textDecoration: 'none' }}>
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
            {capitalizeFirstLetter(title)}
          </Typography>
        </Box>
      </Link>
    </>
  );
};

export default SubjectBox;
