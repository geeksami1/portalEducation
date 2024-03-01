import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import newCourses from '../../../assets/images/Groupx222.png';
// import AddIcon from '@mui/icons-material/Add';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const NewCourses = ({ image, backgroundColor, color }) => {
  return (
    <Box sx={{ backgroundColor: backgroundColor, p:2,borderRadius: '10px' }}>
      <Box sx={{ backgroundColor: color, p:2 , borderRadius: '10px'}}>
        <img src={image} alt="newcourse" style={{ width: '100%', height: '120px', objectFit: 'cover'}} />
      </Box>
      <Box sx={{ mt: 2, py:2 }}>
        <Typography variant="h6" sx={{ color: 'rgba(0, 0, 0, 0.45)', fontWeight: 300, fontSize: 12 }}>
          15 Lessons
        </Typography>
        <Typography variant="h6" sx={{ color: 'rgba(0, 0, 0, 0.7)', fontWeight: 600, fontSize: 20 }}>
          Geography
        </Typography>
        <Typography variant="h6" sx={{ color: 'rgba(0, 0, 0, 0.55)', fontWeight: 300, fontSize: 12 }}>
          Coming Soon
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <img src={newCourses} alt="newcourse" style={{ width: '80px', height: '40px', objectFit: 'contain' }} />
        <Button
          variant="contained"
          sx={{
            backgroundColor: color,
            '&:hover': {
              backgroundColor: color
            }
          }}
        >
          <ArrowForwardIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default NewCourses;
