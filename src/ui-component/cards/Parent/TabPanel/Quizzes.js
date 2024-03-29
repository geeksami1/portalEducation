import { Box, Button, Card, Grid, Typography } from '@mui/material';
import React from 'react';
import alert from 'assets/images/alert.png';
import SubjectwiseResult from './SubCards/SubjectwiseResult';
import AverageQuizProgress from './SubCards/AverageQuizProgress';
import QuizLeaderboardCard from './SubCards/QuizLeaderboardCard';
import DiscussCard from './SubCards/DiscussCard';
import UpcomingQuiz from './SubCards/UpcomingQuiz';

const subjectwiseResultsData = [
  {
    id: 1,
    title: "Maths",
    quiz: 'Quiz-01',
    perc: 50,
    color: '#80DEEA'
  },
  {
    id: 2,
    title: "English",
    quiz: 'Quiz-01',
    perc: 80,
    color: '#78FFD6'
  },
  {
    id: 3,
    title: "Science",
    quiz: 'Quiz-01',
    perc: 50,
    color: '#FFECB3'
  },
  {
    id: 4,
    title: "Social",
    quiz: 'Quiz-01',
    perc: 5,
    color: '#FFCCBC'
  },
  {
    id: 5,
    title: "Computer",
    quiz: 'Quiz-01',
    perc: 78,
    color: '#ff0000'
  },
  {
    id: 6,
    title: "Maths",
    quiz: 'Quiz-01',
    perc: 50,
    color: '#80DEEA'
  }
]

const Quizzes = () => {
  return (
    <>
      <Grid container spacing={2}>
        {/* LEFT  */}
        <Grid item xs={12} md={4}>
          <Typography variant="h3" sx={{ color: 'rgba(0, 0, 0, 0.75)' }}>
            Subjectwise Result
          </Typography>

          <Card sx={{borderRadius: '10px', border: '1px solid #E0E0E0', p: 2, my:2}} >
          {
            subjectwiseResultsData.map((item, index) => (
              <SubjectwiseResult key={index} {...item} />
            ))
          }
          </Card>
        </Grid>

        {/* Middle  */}
        <Grid item xs={12} md={5}>
          <Typography variant="h3" sx={{ color: 'rgba(0, 0, 0, 0.75)' }}>
            Discuss your confusion
          </Typography>

          <Card sx={{borderRadius: '10px', border: '1px solid #E0E0E0', p: 2, my:2}} >
            <DiscussCard/>
          </Card>


          <Typography variant="h3" sx={{ color: 'rgba(0, 0, 0, 0.75)' }}>
           Upcoming Quiz
          </Typography>

          <Card sx={{borderRadius: '10px', border: '1px solid #E0E0E0', my:2}} >
            <UpcomingQuiz/>
          </Card>
        </Grid>
        {/* RIGHT  */}
        <Grid item xs={12} md={3}>
          <Typography variant="h3" sx={{ color: 'rgba(0, 0, 0, 0.75)' }}>
            Average Quiz Progress
          </Typography>

          <Card sx={{borderRadius: '10px', border: '1px solid #E0E0E0', py:4,px:2, my:2}} >
            <AverageQuizProgress/>
          </Card>

          {/* QUIZ LEADERBOARD */}

          <Typography variant="h3" sx={{ color: 'rgba(0, 0, 0, 0.75)' }}>
            Quiz Leaderboard
          </Typography>

          <Card sx={{borderRadius: '10px', border: '1px solid #E0E0E0', p: 2, my:2}} >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
              <Typography variant="h5" sx={{ color: 'rgba(0, 0, 0, 0.75)' }}>Top Students</Typography>
              <Typography variant="h5" sx={{ color: 'rgba(0, 0, 0, 0.75)' }}>Grade 3</Typography>
            </Box>
            <QuizLeaderboardCard/>
            <QuizLeaderboardCard/>
            <QuizLeaderboardCard/>
          </Card>
        </Grid>
        {/* Bottom  */}
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 2,
              my: 2,
              width: '100%',
              background: '#FFEDE9'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mx: 2 }}>
              <img src={alert} alt="alert" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />

              <Typography variant="h5" sx={{ color: '#F68683' }}>
                Your child least progress subject is History
              </Typography>
            </Box>

            <Button variant="contained" sx={{ bgcolor: '#F44336', color: 'white', borderRadius: 3, mx: 2 }}>
              View
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Quizzes;
