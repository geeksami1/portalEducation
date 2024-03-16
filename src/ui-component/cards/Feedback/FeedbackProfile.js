import { Avatar, Box, Card, Typography } from '@mui/material';
import React from 'react';
import avatarcourse from '../../../../src/assets/images/avatarcourse.png';
import feedback1 from '../../../../src/assets/images/feedback1.png';
import feedback2 from '../../../../src/assets/images/feedback2.png';

const FeedbackProfile = () => {
  return (
    <Box>
      {/* TOP BOX  */}
      <Card sx={{ backgroundColor: '#ffffff', width: '100%', borderRadius: '10px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column' }}>
          {/* PROFILE WITH FEEDBACK IMG 1  */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <Typography variant="h4" sx={{ ml: 2, fontWeight: 700, fontSize: '18px', color: 'rgba(0, 0, 0, 0.85)' }}>
              Profile
            </Typography>
            <img src={feedback1} alt="feedback1" style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '10px' }} />
          </Box>
          {/* USER DETAILS  */}
          <Box
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', flexDirection: 'column', my: 2 }}
          >
            <Avatar alt="Remy Sharp" src={avatarcourse} sx={{ width: 80, height: 80 }} />
            <Typography variant="h4" sx={{ my: 1, fontWeight: 700, fontSize: '18px', color: 'rgba(0, 0, 0, 0.85)' }}>
              Jane Cooper
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 400, fontSize: '14px', color: 'rgba(0, 0, 0, 0.54)' }}>
              Elementary
            </Typography>
          </Box>
          {/* ADD A LINE BREAK  */}
          <Box sx={{ borderBottom: '2px solid rgba(0, 0, 0, 0.12)', width: '100%' }}></Box>
          
          {/* FEEDBACK IMAGE AND GRADE */}
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            {/* Feedback Image (Aligned to the left) */}
            <Box sx={{ flex: '0 0 auto', marginRight: '16px' }}>
              <img src={feedback2} alt="feedback2" style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '10px' }} />
            </Box>
            
            {/* Grade (Centered horizontally) */}
            <Box sx={{ flex: '1', textAlign: 'center' }}>
              <Typography variant="h4" sx={{ my: 2, fontWeight: 500, fontSize: '14px', color: '#BE7885' }}>
                Grade 9
              </Typography>
            </Box>
          </Box>
        </Box>
      </Card>

      {/* BOTTOM BOX  */}
      <Box></Box>
    </Box>
  );
};

export default FeedbackProfile;
