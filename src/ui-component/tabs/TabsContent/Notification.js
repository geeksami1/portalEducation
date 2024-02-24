import { Avatar, Box, Switch, Typography } from '@mui/material';
import user from '../../../assets/images/users/user-round.svg';
const Notification = () => {
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
        {/*Reminders  */}
        <Box display="flex" alignItems="center" justifyContent={'space-between'}>
          {/* BOX 1  */}
          <Box>
            <Typography variant="h5" sx={{ color: 'rgba(0, 0, 0, 0.7)', mb: 0.5 }}>
            Reminders
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(0, 0, 0, 0.55)' }}>
            You have notifications you haven’t seen and other notification
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
            Games Reminder
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(0, 0, 0, 0.55)' }}>
            Get notification when a new game is unlocked.
            </Typography>
          </Box>
          {/* BOX 2  */}
          <Box>
            <Switch color="secondary" />
          </Box>
        </Box>

        <Box sx={{ borderTop: '2px solid #999fa1', marginTop: '30px', marginBottom: '30px' }}></Box>

        {/*Quiz Reminder  */}
        <Box display="flex" alignItems="center" justifyContent={'space-between'}>
          {/* BOX 1  */}
          <Box>
            <Typography variant="h5" sx={{ color: 'rgba(0, 0, 0, 0.7)', mb: 0.5 }}>
            Quiz Reminder
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(0, 0, 0, 0.55)' }}>
            Get notification when you have an upcoming quiz.
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

export default Notification;
