import { Box, Typography } from '@mui/material';
import React from 'react';
import star from '../../../assets/images/star.png';
import nostar from '../../../assets/images/nostar.png';

const PremiumTopics = ({ data }) => {
  return (
    <>
      {/* IMAGE WITH BORDER */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: '10px', gap: 2, py: 1 }}>
        <Box sx={{ flex: '20%' }}>
          <img src={data.image} alt="premium" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </Box>
        {/* CONTENT SECTION */}
        <Box sx={{ flex: '60%' }}>
          <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '12px', color: '#000000AB' }}>
            {data.title}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 200, fontSize: '10px', color: '#000000AB', mb: 2 }}>
            {data.desc}
          </Typography>
        </Box>
        {/* RATINGS SECTION */}
        <Box sx={{ flex: '20%', px: 2 }} >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
            <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '14px', color: '#000000AB', mb: 2 }}>
              4.5
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 200, fontSize: '14px', color: '#000000AB', mb: 2 }}>
              (5.5k)
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
            {[...Array(4)].map((_, index) => (
              <img key={index} src={star} alt="star" style={{ width: '15px', height: '15px', objectFit: 'contain' }} />
            ))}
            <img src={nostar} alt="nostar" style={{ width: '15px', height: '15px', objectFit: 'contain' }} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PremiumTopics;
