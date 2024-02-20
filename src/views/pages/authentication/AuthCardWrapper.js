import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
// import { Image } from '@mui/icons-material';
import educationImage from 'assets/images/education.jpg';

const AuthCardWrapper = ({ children, ...other }) => (
  <MainCard
    sx={{
      maxWidth: '100%', // Set max width to 100%
      margin: {}
    }}
    content={false}
    {...other}
  >
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ flex: '50%' }}>
        {' '}
        {/* Set flex to 50% for the left box */}
        <Box sx={{}}>
          <img src={educationImage} alt="Authentication " style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
        </Box>
      </Box>
      <Box sx={{ flex: '50%' }}>
        {' '}
        {/* Set flex to 50% for the right box */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', p: 10 }}>{children}</Box>
      </Box>
    </Box>
  </MainCard>
);

AuthCardWrapper.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string // PropType for the image URL
};

export default AuthCardWrapper;
