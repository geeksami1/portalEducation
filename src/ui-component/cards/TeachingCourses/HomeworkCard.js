import { ArrowRightAlt } from '@mui/icons-material';
import { Box, Card, CircularProgress, Typography } from '@mui/material';
import React from 'react';

const HomeworkCard = ({ value, bgCard, textColor, progressColor, heading, tasks }) => {
  return (
    <>
      {/* HOMEWORK CARD  */}

      <Card
        sx={{
          p: 2,
          background: bgCard,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* PROGRESS  */}
        <Box position="relative" display="inline-flex">
          <CircularProgress variant="determinate" value={value} sx={{ color: progressColor }} />
          <Box top={0} left={0} bottom={0} right={0} position="absolute" display="flex" alignItems="center" justifyContent="center">
            <Typography variant="caption" component="div" sx={{ color: textColor }}>
              {`${Math.round(value)}%`}
            </Typography> 
          </Box>
        </Box>
        {/* TEXT  */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'left', width: '80%' }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 500, fontSize: '14px', color: textColor, ml:2 }}>
              {heading}
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 200, fontSize: '12px', color: textColor, py: 1, ml:2 }}>
              {tasks} Task
            </Typography>
          </Box>
          {/* SVG  */}

          <Box>
            <ArrowRightAlt sx={{ color: textColor, fontSize: '40px' }} />
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default HomeworkCard;
