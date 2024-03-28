import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import alert from 'assets/images/alert.png';

const Quizzes = () => {
  return (
    <>
      <Grid container spacing={2}>
        {/* LEFT  */}
        <Grid item xs={12} md={4}>
          <Typography variant="h3" sx={{ color: 'rgba(0, 0, 0, 0.75)' }}>
            Subjectwise Result
          </Typography>
        </Grid>

        {/* Middle  */}
        <Grid item xs={12} md={4}>
          <Typography variant="h3" sx={{ color: 'rgba(0, 0, 0, 0.75)' }}>
            Discuss your confusion
          </Typography>
        </Grid>
        {/* RIGHT  */}
        <Grid item xs={12} md={4}>
          <Typography variant="h3" sx={{ color: 'rgba(0, 0, 0, 0.75)' }}>
            Average Quiz Progress
          </Typography>
        </Grid>
        {/* Bottom  */}
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 2,
              my: 2,
              width: '100%',
              background: '#FFEDE9'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mx: 2 }}>
              <img src={alert} alt="alert" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />

              <Typography variant="h5" sx={{ color: '#F68683' }}>
                Your child least progress subject is History
              </Typography>
            </Box>

            <Button variant="contained" sx={{ bgcolor: '#F44336', color: 'white', borderRadius: 3, mx: 2 }}>
              View
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Quizzes;
