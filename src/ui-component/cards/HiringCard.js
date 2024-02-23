import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import book from '../../../src/assets/images/teacher.jpg';

const HiringCard = () => {
  return (
    <Box>
      {/* BOX 1  */}
      <Box>
        <img src={book} alt="subject1" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px' }} />
      </Box>
      {/* BOX 2  */}
      <Box sx={{ mb:5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2, mt: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '15px', color: '#28b1f8', marginLeft: 2 }}>
            5975 Enrolled Students
          </Typography>
          <Button sx={{ color: '#28b1f8' }}>See Details</Button>
        </Box>
        <Typography variant="h4" sx={{ fontWeight: 600, fontSize: '16px', color: '#00000082', marginLeft: 2 }}>
          Want to hire a personal teacher?
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
          <Button sx={{ color: '#28b1f8', border: '1px solid #28b1f8', px: 3, borderRadius: '10px', mb: 3 }}>Hire Now</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HiringCard;
