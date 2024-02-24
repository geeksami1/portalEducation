import { Avatar, Box, Switch, Typography } from '@mui/material';
import user from '../../../assets/images/users/user-round.svg';
const Email = () => {
  const username = JSON.parse(localStorage.getItem('user'));
  const firstName = username?.fname;
  const lastName = username?.lname;

  return (
    <>
      <Box sx={{ width: '500px' }}>
        {/* AVATAR WITH NAME  */}
        <Box display="flex" alignItems="center" justifyContent={'center'}>
          <Avatar alt="User Avatar" src={user} />
          <Box ml={1}>
            {' '}
            {/* Adjust margin as needed */}
            {/* Your content */}
            <Typography variant="h4" sx={{ fontWeight: 500, fontSize: '18px', color: '#000' }}>
              {username ? `${firstName} ${lastName}` : 'User Name'}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ borderTop: '2px solid #999fa1', marginTop: '30px', marginBottom: '30px' }}></Box>
        {/*OPINION EMAIL  */}
        <Box display="flex" alignItems="center" justifyContent={'space-between'}>
          {/* BOX 1  */}
          <Box>
            <Typography variant="h5" sx={{ color: 'rgba(0, 0, 0, 0.7)', mb: 0.5 }}>
              Opinion Emails
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(0, 0, 0, 0.55)' }}>
              Give Feedback on Portal
            </Typography>
          </Box>
          {/* BOX 2  */}
          <Box>
            <Switch color="secondary" />
          </Box>
        </Box>

        <Box sx={{ borderTop: '2px solid #999fa1', marginTop: '30px', marginBottom: '30px' }}></Box>

        {/*REMINDER EMAIL  */}
        <Box display="flex" alignItems="center" justifyContent={'space-between'}>
          {/* BOX 1  */}
          <Box>
            <Typography variant="h5" sx={{ color: 'rgba(0, 0, 0, 0.7)', mb: 0.5 }}>
              Reminder Emails
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(0, 0, 0, 0.55)' }}>
              Get notification you have missed.
            </Typography>
          </Box>
          {/* BOX 2  */}
          <Box>
            <Switch color="secondary" />
          </Box>
        </Box>

        <Box sx={{ borderTop: '2px solid #999fa1', marginTop: '30px', marginBottom: '30px' }}></Box>

        {/*NEWS EMAIL  */}
        <Box display="flex" alignItems="center" justifyContent={'space-between'}>
          {/* BOX 1  */}
          <Box>
            <Typography variant="h5" sx={{ color: 'rgba(0, 0, 0, 0.7)', mb: 0.5 }}>
              News Email
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(0, 0, 0, 0.55)' }}>
              Get notification you have missed.
            </Typography>
          </Box>
          {/* BOX 2  */}
          <Box>
            <Switch color="secondary" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Email;
