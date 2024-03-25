import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import penciledut from '../../../assets/images/penciledut.png';
const TeachingEvents = ({ img, title, calenderDate, time }) => {
  return (
    <Card
      sx={{
        my: 2,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: '10px',
        display: 'flex',
        maxHeight: '100px',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Box sx={{ width: '25%' }}>
        <img src={img} alt="zoom" style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '10px' }} />
      </Box>

      {/* RIGHT BOX  */}
      <Box sx={{ width: '75%', pr: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
          <Typography variant="h4" sx={{ fontWeight: 600, fontSize: '14px', color: 'rgba(0, 0, 0, 0.7)' }}>
            {title}
          </Typography>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 600, fontSize: '16px', color: 'rgba(0, 0, 0, 0.7)' }}>
              {calenderDate}
            </Typography>
          </Box>
        </Box>
        {/* CHAPTER NAME  */}

        {/* TIme  */}

        <Typography variant="h5" sx={{ fontWeight: 600, fontSize: '14px', color: 'rgba(0, 0, 0, 0.7)' }}>
          {time}
        </Typography>
      </Box>
    </Card>
  );
};

export default TeachingEvents;
