import React from 'react';
import { Box } from '@mui/material';
import bulb from '../../../assets/images/bulb.png';
// import rectangle2 from '../../../assets/images/Rectangle 8721.png';

const SubjectResultCard = ({ rectangle, elipse, heading, number }) => {
  return (
    <Box position="relative" display="inline-block" width="300px" height="200px">
      <Box>
        <img src={rectangle} alt="rectangle" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Box>
      <Box position="absolute" zIndex="1" top="10px" transform="translateY(-50%)" left="20px">
        <img src={elipse} alt="elipse" style={{ width: '80%', height: '80%', objectFit: 'contain', position: 'relative' }} />
        <div style={{ position: 'absolute', top: '50%', left: '40%', fontSize:18,transform: 'translate(-50%, -50%)', color: 'white' }}>{number}</div>
      </Box>
      <Box position="absolute" zIndex="1" top="8px" transform="translateY(-50%)" right="20px">
        <img src={bulb} alt="bulb" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
      </Box>
      <Box position="absolute" zIndex="2" top="20px" left="90px" transform="translate(-50%, -50%)" textAlign="center">
        <h2 style={{ margin: 0, color: 'gray', fontSize: 12 }}>{heading}</h2>
      </Box>
    </Box>
  );
};

export default SubjectResultCard;
