import { Box } from '@mui/material';
import React from 'react';
import teacherstudent1 from '../../../assets/images/teacherstudent1.png';

const TeachingStudentsCard = () => {
  return (
    <>
      {/* Top BOX  */}
      <Box>
        {/* LEFT BOX */}
        <Box>

        </Box>
        {/* RIGHT BOX */}
        <Box>
            <img src={teacherstudent1} alt="teacherstudent1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </Box>
      </Box>
      {/* BOTTOM BOX  */}
      <Box></Box>
    </>
  );
};

export default TeachingStudentsCard;
