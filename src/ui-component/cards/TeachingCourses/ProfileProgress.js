import { Box, Typography } from '@mui/material';
import React from 'react';
import profile from '../../../../src/assets/images/avatarcourse.png';
import correct from '../../../../src/assets/images/correct.png';
import HomeworkCard from './HomeworkCard';
// import tick from '../../../../src/assets/images/tick.png';
// import { ArrowRightAlt } from '@mui/icons-material';
const ProfileProgress = ({ value }) => {
  return (
    <Box sx={{ backgroundColor: 'white', borderRadius: '10px', p: 2 }}>
      <Box>
        <Typography variant="h4" sx={{ fontWeight: 600, fontSize: '16px', color: 'rgba(0, 0, 0, 0.7)', p: 2 }}>
          Profile
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column' }}>
          <img src={profile} alt="profile" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '10px' }} />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: 600, fontSize: '16px', color: 'rgba(0, 0, 0, 0.7)', pt: 2 }}>
              Leslie Alexander
            </Typography>
            <img src={correct} alt="correct" style={{ width: '20px', height: '20px', objectFit: 'cover', borderRadius: '10px' }} />
          </Box>
          <Typography variant="h4" sx={{ fontWeight: 200, fontSize: '14px', color: 'rgba(0, 0, 0, 0.7)' }}>
            Elementary
          </Typography>
        </Box>
        <Box sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.15)', mt: 3 }}></Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
          <Typography variant="h4" sx={{ fontWeight: 600, fontSize: '16px', color: 'rgba(0, 0, 0, 0.7)', p: 2, mb: 2 }}>
            Homework progress
          </Typography>
          <Box sx={{ py: 1 }}>
            <HomeworkCard
              bgCard={'#8A70D6'}
              textColor={'white'}
              progressColor={'white'}
              value={value}
              heading={'Linear Algebra'}
              tasks={40}
            />
          </Box>
          <Box sx={{ py: 1 }}>
            <HomeworkCard bgCard={'white'} textColor={'black'} progressColor={'#8A70D6'} value={value} heading={'Integers'} tasks={20} />
          </Box>
          <Box sx={{ py: 1 }}>
            <HomeworkCard bgCard={'white'} textColor={'black'} progressColor={'#8A70D6'} value={value} heading={'Geometry'} tasks={30} />
          </Box>
          <Box sx={{ py: 1 }}>
            <HomeworkCard
              bgCard={'white'}
              textColor={'black'}
              progressColor={'#8A70D6'}
              value={value}
              heading={'Food and Science'}
              tasks={30}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileProgress;
