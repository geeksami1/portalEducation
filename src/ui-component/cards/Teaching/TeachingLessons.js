import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import penciledut from '../../../assets/images/penciledut.png';
const TeachingLessons = ({ bg, subject, chapter, time}) => {
  return (
    <Card
      sx={{
        my:2,
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
      <Box sx={{ width: '5%' }}>
        <Box
          sx={{
            backgroundColor: bg,
            width: '10px',
            height: '100px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        ></Box>
      </Box>

      {/* RIGHT BOX  */}
      <Box sx={{ width: '95%' , pr:2}}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
          <Typography variant="h4" sx={{ fontWeight: 600, fontSize: '14px', color: 'rgba(0, 0, 0, 0.7)' }}>
            {subject}
          </Typography>
          <Box>
            <img src={penciledut} alt="penciledut" style={{ width: '20px', height: '20px', objectFit: 'cover', borderRadius: '10px' }} />
          </Box>
        </Box>
        {/* CHAPTER NAME  */}

        <Typography variant="h5" sx={{ fontWeight: 600, fontSize: '16px', color: 'rgba(0, 0, 0, 0.7)' }}>
         {chapter}
        </Typography>
        {/* TIme  */}

        <Typography variant="h5" sx={{ fontWeight: 600, fontSize: '14px', color: 'rgba(0, 0, 0, 0.7)' }}>
          {time}
        </Typography>
      </Box>
    </Card>
  );
};

export default TeachingLessons;
