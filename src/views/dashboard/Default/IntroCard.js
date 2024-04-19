import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import introCardImg1 from '../../../../src/assets/images/introcard1.png';
import alert from '../../../../src/assets/images/alert.png';

const IntroCard = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const fullName = user?.fullname;
  return (
    <div className="intro-card" style={{ backgroundColor: '#fdedc9', borderRadius: 20 }}>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          {/* First section */}
          <Box sx={{ p: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, fontSize: 35 }}>
            Hi, {fullName ? fullName : 'Guest'}!
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 200, mt: 2, fontSize: 16 }}>
              Welcome to the student portal. we always appreciate you to stay connected and stay updated on Student portal
            </Typography>
            <Typography sx={{display: 'flex', alignItems: 'center', mt: 2, }}>
              <img src={alert} alt="Alert " style={{ width: 20, height: 20, objectFit: 'cover' }} />
              <Typography variant="h5" sx={{ fontWeight: 700, fontSize: 13, mx: 1 }}>
                Don&apos;t forget to check out daily notices!
              </Typography>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          {/* Second section */}

          <img src={introCardImg1} alt="Authentication " style={{ width: '100%', height: '100%', objectFit: 'cover' , padding: 29}} />
        </Grid>
      </Grid>
    </div>
  );
};

export default IntroCard;
