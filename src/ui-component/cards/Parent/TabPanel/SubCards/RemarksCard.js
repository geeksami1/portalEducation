import { Box, Card, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';

const RemarksCard = ({ title, description, img, duration }) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Card
      sx={{
        width: '100%',
        background: 'background.paper',
        height: '100%',
        padding: 2,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        mb: 5,
        minHeight: '130px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: isSmallScreen ? 'center' : 'space-between',
          flexDirection: isSmallScreen ? 'column' : 'row',
          width: '100%'
        }}
      >
        {/* LEFT  */}
        <Box sx={{ width: isSmallScreen ? '100%' : '30%' }}>
          {/* AVATAR  */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 3 }}>
            <img src={img} alt="avatarcourse" style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '10px' }} />

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column' }}>
              <Typography variant="h4" sx={{ my: 1, fontWeight: 700, fontSize: '20px', color: '#7000FF' }}>
                {title}
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 500, fontSize: '14px', color: 'rgba(0, 0, 0, 0.65)' }}>
                {duration}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* MIDDLE  */}
        <Box sx={{ width: isSmallScreen ? '100%' : '50%', mt: isSmallScreen ? 2 : 0 }}>
          <Typography variant="h4" sx={{ my: 2, fontWeight: 500, fontSize: '14px', color: 'rgba(0, 0, 0, 0.65)' }}>
            {description}
          </Typography>
        </Box>

        {/* RIGHT  */}
        {!isSmallScreen && (
          <Box sx={{ width: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {Array(5)
              .fill()
              .map((_, i) => (
                <StarIcon key={i} sx={{ color: '#FFC107' }} />
              ))}
          </Box>
        )}
      </Box>
    </Card>
  );
};

export default RemarksCard;
