import { Grid, Typography } from '@mui/material';
import React from 'react';
import AssessmentCard from './SubCards/AssessmentCard';
import assessment1 from 'assets/images/assessment1.png';
import ChildStats from './SubCards/ChildStats';
const GradesData = [
  {
    id: 1,
    title: 'Mathematics',
    img: assessment1,
    attempts: '5',
    test: '15',
    progress: 80,
    progressColor: '#FF8300',
    description: 'Social-Emotional Learning Skills and the Mathematical Process'
  },
  {
    id: 2,
    title: 'English',
    img: assessment1,
    attempts: '5',
    test: '15',
    progress: 60,
    progressColor: '#898EFF',
    description: 'Social-Emotional Learning Skills and the Mathematical Process'
  },
  {
    id: 3,
    title: 'Science',
    img: assessment1,
    attempts: '5',
    test: '15',
    progress: 70,
    progressColor: '#34C759',
    description: 'Social-Emotional Learning Skills and the Mathematical Process'
  }
];

const GradesData2 = [
  {
    id: 1,
    title: 'Chemistry',
    img: assessment1,
    attempts: '5',
    test: '15',
    progress: 80,
    progressColor: '#65B2FF',
    description: 'Social-Emotional Learning Skills and the Mathematical Process'
  },
  {
    id: 2,
    title: 'Physics',
    img: assessment1,
    attempts: '5',
    test: '15',
    progress: 80,
    progressColor: '#23E5DB',
    description: 'Social-Emotional Learning Skills and the Mathematical Process'
  },
  {
    id: 3,
    title: 'History',
    img: assessment1,
    attempts: '5',
    test: '15',
    progress: 80,
    progressColor: '#9B51E0',
    description: 'Social-Emotional Learning Skills and the Mathematical Process'
  }
];

const Grades = () => {
  return (
    <>
      <Typography variant="h2" mb={2}>
        Assessment Result
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="h3">
                {GradesData.map((item, index) => (
                  <AssessmentCard key={index} {...item} />
                ))}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3">
                {GradesData2.map((item, index) => (
                  <AssessmentCard key={index} {...item} />
                ))}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid item xs={12} md={1} /> */}
        <Grid item xs={12} md={5}>
          <ChildStats />
        </Grid>
      </Grid>
    </>
  );
};

export default Grades;
