import { Box, Paper, Typography } from '@mui/material';
import React from 'react';
import teachercourse1 from '../../../assets/images/teachercourse1.png';
import teachercourse2 from '../../../assets/images/teachercourse2.png';
import teachercourse3 from '../../../assets/images/teachercourse3.png';

const TeachingCourse = ({ img, title, weeks, hours, quizes }) => {
  return (
    <>
      <Box
        component={Paper}
        sx={{
          width: '100%',
          height: 'auto',
          borderRadius: '20px',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          padding: '10px 20px'
        }}
      >
        <img src={img} alt="img1" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '20px' }} />
        <Typography
          variant="h4"
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', my: 1, mx: 1, color: 'rgba(0, 0, 0, 0.7)' }}
        >
          {title}
        </Typography>
        {/* ADD A BOX HERE WHICH CONTAINS THREE BOXES IN A ROW  */}

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 1,
            flexDirection: { xs: 'column', sm: 'row', md: 'row' },
            my: 1,
            mx: 1,
            color: 'rgba(0, 0, 0, 0.7)'
          }}
        >
          {/* WEEKS  */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* //Add LOGO  */}
            <img
              src={teachercourse1}
              alt="img1"
              style={{ width: '15px', height: '15px', objectFit: 'contain', color: 'rgba(0, 0, 0, 0.7)' }}
            />
            {/* Add TEXT  */}
            <Typography variant="h4" sx={{ fontWeight: 400, p: 1, fontSize: '12px', color: 'rgba(0, 0, 0, 0.7)' }}>
              {weeks} Weeks
            </Typography>
          </Box>

          {/* HOURS  */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* //Add LOGO  */}
            <img
              src={teachercourse2}
              alt="img1"
              style={{ width: '15px', height: '15px', objectFit: 'contain', color: 'rgba(0, 0, 0, 0.7)' }}
            />
            {/* Add TEXT  */}
            <Typography variant="h4" sx={{ fontWeight: 400, p: 1, fontSize: '12px', color: 'rgba(0, 0, 0, 0.7)' }}>
              {hours} Hours
            </Typography>
          </Box>

          {/* QUIZ  */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* //Add LOGO  */}
            <img
              src={teachercourse3}
              alt="img1"
              style={{ width: '15px', height: '15px', objectFit: 'contain', color: 'rgba(0, 0, 0, 0.7)' }}
            />
            {/* Add TEXT  */}
            <Typography variant="h4" sx={{ fontWeight: 400, p: 1, fontSize: '12px', color: 'rgba(0, 0, 0, 0.7)' }}>
              {quizes} Quiz
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TeachingCourse;
