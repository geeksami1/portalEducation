import React from 'react';
import { Box,  Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const TimelineCard = ({ title, classNo, time }) => {
  // PROGRESS BAR

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2, mt: 2 }}>
      <Box>
        {/* TITLE  */}
        <Typography variant="h4" sx={{ fontWeight: 600, fontSize: '20px', color: '#000' }}>
          {title}
        </Typography>
        {/* class  */}

        <Typography variant="h4" sx={{ fontWeight: 600, fontSize: '16px', color: '#FF0000BD', mt: 1 }}>
          {classNo}
        </Typography>
        {/* BUTTON */}

        <Link to={`#`} style={{ textDecoration: 'none' }}>
          <Typography variant="h4" sx={{ color: '#4BBDBD', textDecoration: 'none', fontWeight: 600, fontSize: '16px', mt: 1 }}>
            See Details
          </Typography>
        </Link>
      </Box>
      <Box sx={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
        {/* BOX 2 */}
        <Typography variant="h4" sx={{ fontWeight: 600, fontSize: '12px', color: '#00000082' }}>
          {time}
        </Typography>
      </Box>
    </Box>
  );
};

export default TimelineCard;
