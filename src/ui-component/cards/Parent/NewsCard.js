import { Box, Typography } from '@mui/material';
import React from 'react';

const NewsCard = ({
    title,
    description,
    date,
    img
}) => {
  return (
    <Box sx={{ py:2, backgroundColor: 'background.paper', borderRadius: 5, borderBottom: '1px solid rgba(0, 0, 0, 0.12)', display: 'flex', gap:2, justifyContent: 'space-between', alignItems: 'center' }}>
      {/* LEFT SECTION HERE */}
      <Box sx={{ width: '30%', height: '100%' }}>
        <img src={img} alt="news01" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
      </Box>

      {/* RIGHT SECTION HERE */}
      <Box sx={{ width: '70%', height: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'left', flexDirection: 'column' }}>
          {/* DATE  */}
          <Typography variant="h5"  sx={{ color: 'rgba(0, 0, 0, 0.55)' }}>
           {date}
          </Typography>
          {/* TITLE  */}
          <Typography variant="h5"  sx={{ color: 'rgba(75, 189, 189, 1)' }}>
        {title}
          </Typography>
          {/* DESCRIPTION  */}
          <Typography variant="h5"  sx={{ color: 'rgba(0, 0, 0, 0.75)' }}>
            {/* TO LOWER CASE  */}
            {description && description.toLowerCase()}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsCard;
