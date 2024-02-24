import { Box, Typography } from '@mui/material';
import React from 'react';

const ResultQuiz = ({ rectangleQuiz, heading, points, quizImg }) => {
    // const ResultQuiz = () => {
  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%', p:1 }}>
      {/* Render quizImg on the left */}
      <img src={quizImg} alt="QuizImage" style={{ position: 'absolute', top: 20, left: -2, width: '60%', height: '60%', objectFit: 'contain'}} />

      {/* Render rectangleQuiz on the right */}
      <img src={rectangleQuiz} alt="RectangleQuiz1" style={{ width: '100%', height: '100%', objectFit: 'contain'}} />

      {/* Heading and points on top of rectangleQuiz */}
      <Box sx={{ position: 'absolute', top: 10, right: 10, padding: 2 }}>
        <Typography variant="h4" component="h2" sx={{ color: '#fff', fontWeight: 600, fontSize: 20, marginBottom: 1 , textAlign: 'center' }}>
          {heading}
        </Typography>
        <Typography variant="h4" component="h2" sx={{ color: '#fff', fontSize: 35 ,fontStyle: 'italic' , fontWeight: 100 }}>
          {points}
        </Typography>
      </Box>
    </Box>
   
  );
};

export default ResultQuiz;
