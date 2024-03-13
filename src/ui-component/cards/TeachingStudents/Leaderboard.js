import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import avatarcourse from '../../../../src/assets/images/avatarcourse.png';
import LeaderboardList from './LeaderboardList';

// LEADERSHIP LIST DATA

const leadershipList = [
  {
    id: 1,
    name: 'John Doe',
    progress: '75%',
    ranking: 1,
    avatar: avatarcourse,
    color: '#80DEEA'
  },
  {
    id: 2,
    name: 'Jasmin Jones',
    progress: '80%',
    ranking: 2,
    avatar: avatarcourse,
    color: '#FFD9D9'
  },
  {
    id: 3,
    name: 'Emily Smith',
    progress: '65%',
    ranking: 3,
    avatar: avatarcourse,
    color: '#FCE8B3'
  }
];

const Leaderboard = () => {
  return (
    <>
      <Box>
        {/* LeaderBoard Heading  */}

        <Typography
          variant="h4"
          component="h2"
          sx={{ marginTop: 4, color: 'rgba(0, 0, 0, 0.7)', fontWeight: 600, fontSize: '28px', marginBottom: 4, textAlign: 'center' }}
        >
          Leaderboard
        </Typography>

        {/*USE  AVATAR  */}

        <Avatar
          alt="Remy Sharp"
          src={avatarcourse}
          sx={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto', marginBottom: 2 }}
        />

        {/* LEADERBOARD Name*/}

        <Typography variant="h4" sx={{ color: 'rgba(0, 0, 0, 0.85)', fontWeight: 600, fontSize: 20, textAlign: 'center' }}>
          Jane Cooper
        </Typography>

        {/* LEADERBOARD Progress*/}

        <Typography
          variant="h4"
          sx={{
            color: '#fff',
            backgroundColor: '#000',
            py: 1.25,
            px: 0,
            borderRadius: 4,
            fontWeight: 400,
            fontSize: 14,
            textAlign: 'center',
            mb: 5,
            mt: 1
          }}
        >
          80% Completed
        </Typography>

        {/* LEADERBOARD List */}

        {leadershipList.map((data) => (
          <>
            <Box sx={{ py: 2 }}>
              <LeaderboardList key={data.id} {...data} />
            </Box>
          </>
        ))}
      </Box>
    </>
  );
};

export default Leaderboard;
