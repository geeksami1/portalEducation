// material-ui
import { Box, Typography } from '@mui/material';

// project imports
import frame16 from 'assets/images/framer16.png';
import banner from 'assets/images/banner-subject.png';
const SubjectBanner = () => {
  return (
    <Box position="relative" display="inline-block">
      <img src={frame16} alt="Frame16" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <Box position="absolute" top={0} left={40} p={2}>
        <Typography variant="h5" component="h2" sx={{ color: 'white', fontWeight: 700, mt: 2, fontSize: 30 }}>
          Let’s Sharp Your Preparations.
        </Typography>
        <Typography variant="h5" component="h2" sx={{ color: '#cac1f6', fontSize: 20, mt: 2 }}>
          Learn through Quizzes!
        </Typography>
      </Box>
      <Box position="absolute" top={0} right={40} p={2}>
        <img src={banner} alt="Banner" style={{ width: '250px', height: '220px', objectFit: 'cover' }} />
      </Box>
    </Box>
  );
};

export default SubjectBanner;
