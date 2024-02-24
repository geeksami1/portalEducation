import { Box, Typography } from '@mui/material';
import React from 'react';

// const QuizResult = ({ rectangleQuiz, heading, points, quizImg }) => {
const QuizResult = ({ color, heading, points, quizImg }) => {
  return (
    <Box
      sx={{
        backgroundColor: color,
        width: '100%',
        height: '100px',
        py:2,
        px:3,
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: '20px'
      }}
    >
      <Box>
        <img src={quizImg} alt="QuizImage" style={{ width: '100%', height: '75px', objectFit: 'cover' }} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2, flexDirection: 'column' }}>
        <Typography variant="h4" component="h2" sx={{ color: '#fff', fontWeight: 600, fontSize: 20, marginBottom: 1, textAlign: 'center' }}>
          {heading}
        </Typography>
        <Typography variant="h4" component="h2" sx={{ color: '#fff', fontSize: 35, fontStyle: 'italic', fontWeight: 100 }}>
          {points}
        </Typography>
      </Box>
    </Box>
  );
};

export default QuizResult;
