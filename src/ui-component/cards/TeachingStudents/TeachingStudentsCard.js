import { Box, Button, Card, Typography } from '@mui/material';
import React from 'react';

import clock from '../../../assets/images/clock.png';

const TeachingStudentsCard = ({ data }) => {
  return (
    <>
      {/* Top BOX  */}
      <Box sx={{ backgroundColor: '#fff', p: 1, height: 250, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* LEFT BOX */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, flexDirection: 'column' }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, fontSize: '18px', color: 'rgba(0, 0, 0, 0.85)' }}>
              {data.date}
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 400, fontSize: '18px', color: 'rgba(0, 0, 0, 0.54)' }}>
              {data.month}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 700, fontSize: '32px', color: 'rgba(0, 0, 0, 0.85)' }}>
              {data.firstName}
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700, fontSize: '32px', color: 'rgba(0, 0, 0, 0.85)' }}>
            {data.lastName}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 500, fontSize: '14px', color: 'rgba(0, 0, 0, 0.54)' }}>
              Grade {data.grade}
            </Typography>
          </Box>
        </Box>
        {/* RIGHT BOX */}
        <Box sx={{}}>
          {/* ADD IMAGE  */}
          <img src={data.img} alt="DS" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
        </Box>
      </Box>
      {/* BOTTOM BOX  */}
      <Card
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 2,
          py: 4,
          backgroundColor: data.cardColor,
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
        }}
      >
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 500, fontSize: '14px', color: '#000' }}>
            Class Within
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <img src={clock} alt="teacherstudent1" style={{ width: '15px', height: '15px', objectFit: 'cover' }} />
            <Typography variant="h4" sx={{ fontWeight: 500, fontSize: '14px', color: '#000' }}>
              {data.duration}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Button
            size="small"
            variant="outlined"
            sx={{ color: 'rgba(0, 0, 0, 0.45)', borderRadius: '20px', border: '1px solid rgba(0, 0, 0, 0.45)' }}
          >
            <Typography variant="h4" sx={{ fontWeight: 700, fontSize: '14px', color: 'rgba(0, 0, 0, 0.45)' }}>
              See Details
            </Typography>
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default TeachingStudentsCard;
