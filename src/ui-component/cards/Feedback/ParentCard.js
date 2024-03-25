import { Avatar, Box, Card, Typography } from '@mui/material';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';

const ParentCard = () => {
  return (
    <Card  sx={{
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' ,
      width: '100%', borderRadius: '10px', height: '100%', backgroundColor: 'white', p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    {/* LEFT */}
    <Box sx={{ display: 'flex', alignItems: 'center', width: '40%' }}>
      {/* AVATAR */}
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 80, height: 80, margin: 'auto' }} />
      {/* TEXT AREA */}
      <Box >
        <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 500, fontSize: '18px', color: 'rgba(0, 0, 0, 0.85)' }}>
          Parent (2023-180-D)
        </Typography>
        <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 400, fontSize: '14px', color: 'rgba(0, 0, 0, 0.54)' }}>
          20 Minutes, 25 Nov, 2023
        </Typography>
        <Box>
          {Array(5)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} sx={{ color: '#FFC107' }} />
            ))}
        </Box>
      </Box>
    </Box>

    {/* RIGHT */}
    <Box sx={{ width: '60%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 400, fontSize: '14px', color: 'rgba(0, 0, 0, 0.54)' }}>
      “ I’m  glad to hear plenty of answers from you on all my lessons! 
you’re so energetic! “
      </Typography>
    </Box>
  </Card>
  );
};

export default ParentCard;
