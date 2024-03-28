import { Avatar, Box, Button, Card, Typography } from '@mui/material';
import React from 'react';
import childstats1 from 'assets/images/childstats1.png';
import childstats2 from 'assets/images/childstats2.png';
import childstats3 from 'assets/images/childstats3.png';
import CircularProgressBar from 'ui-component/Progress/CircularProgressBar';
import { Edit } from '@mui/icons-material';

const ChildStats = () => {
  return (
    <>
      <Card sx={{ mt: 2, width: '100%', background: 'background.paper', px: 4, py: 4, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h3">Your Child Stats</Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 2 }}>
          <img src={childstats1} alt="childstats1" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
          <Box>
            <Typography variant="h5"> Problem Solved</Typography>
            <Typography variant="h3">15</Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 2 }}>
          <img src={childstats2} alt="childstats1" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
          <Box>
            <Typography variant="h5"> Points Collected</Typography>
            <Typography variant="h3">15</Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 2 }}>
          <img src={childstats3} alt="childstats1" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
          <Box>
            <Typography variant="h5"> Solution Sumitted</Typography>
            <Typography variant="h3">15</Typography>
          </Box>
        </Box>

        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}></Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 2 }}>
          <CircularProgressBar value={75} size={80} color="#FF8300" />

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant="h3" sx={{ color: 'rgba(0, 0, 0, 0.75)' }}>
              {' '}
              Complete Assessment
            </Typography>
            <Typography variant="h5" sx={{ color: 'rgba(0, 0, 0, 0.75)' }}>
              {' '}
              Overall Quizzes and Assignment Results
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
            mt: 3,
            border: '1px solid rgba(0, 0, 0, 0.12)'
          }}
        >
          <Button variant="text" sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <Edit sx={{ mr: 1, color: '#333' }} />
            <Typography variant="h5" style={{ color: '#333' }}>
              Add Comments
            </Typography>
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default ChildStats;
