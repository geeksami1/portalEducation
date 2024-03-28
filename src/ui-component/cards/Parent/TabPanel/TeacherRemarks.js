import { Box, Typography } from '@mui/material';
import React from 'react';
import RemarksCard from './SubCards/RemarksCard';
import avatarcourse from '../../../../assets/images/avatarcourse.png';
const RemarksData = [
  {
    id: 1,
    title: 'Anatomy Quiz',
    img: avatarcourse,
    duration: '20 Minutes, 25 Nov 2023',
    description: '“ I’m glad to hear plenty of answers from you on all my lessons! you’re so energetic! “'
  },
  {
    id: 2,
    title: 'Math Quiz',
    img: avatarcourse,
    duration: '20 Minutes, 25 Nov 2023',
    description: '“ I’m glad to hear plenty of answers from you on all my lessons! you’re so energetic! “'
  },
  {
    id: 3,
    title: 'English Quiz',
    img: avatarcourse,
    duration: '20 Minutes, 25 Nov 2023',
    description: '“ I’m glad to hear plenty of answers from you on all my lessons! you’re so energetic! “'
  },
  {
    id: 4,
    title: 'Physics Quiz',
    img: avatarcourse,
    duration: '20 Minutes, 25 Nov 2023',
    description: '“ I’m glad to hear plenty of answers from you on all my lessons! you’re so energetic! “'
  }
];

const TeacherRemarks = () => {
  return (
    <>
      <Typography variant="h2">Teacher Feedback</Typography>
      <Box my={2}>
        {RemarksData.map((item, index) => (
          <RemarksCard key={index} {...item} />
        ))}
      </Box>
    </>
  );
};

export default TeacherRemarks;
