import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import CircularProgressBar from 'ui-component/Progress/CircularProgressBar';

const AssessmentCard = ({ title, img, description, attempts, test, progress, progressColor }) => {
  return (
    <>
      <Card sx={{ width: '100%', background: 'background.paper', height: '100%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', my:4 }}>
        {/* TOP  */}

        <Box
          p={1}
          sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2, borderBottom: 1, borderColor: 'divider' }}
        >
          <Box my={2}>
            <Typography variant="h2">{title}</Typography>
            <Typography mt={1} variant="h5" sx={{color: "rgba(0, 0, 0, 0.55)"}}>{description}</Typography>
          </Box>
          <CircularProgressBar size={80} color={progressColor} value={progress} />
        </Box>

        {/* BOTTOM  */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
          <Box>
            <Typography mt={2} variant="h5" mb={1} sx={{color: "rgba(0, 0, 0, 0.55)"}}>Attempts</Typography>
            <Typography variant="h3"> {attempts}</Typography>
          </Box>
          <Box>
            <Typography mt={2} variant="h5" mb={1} sx={{color: "rgba(0, 0, 0, 0.55)"}}>Test</Typography>
            <Typography variant="h3"> { test}</Typography>
          </Box>
          <img src={img} alt="assessment1" style={{ width: '60px' , height: '60px', objectFit: 'contain' }} />
        </Box>
      </Card>
    </>
  );
};

export default AssessmentCard;
