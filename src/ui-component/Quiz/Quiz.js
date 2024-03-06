import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import clocky from 'assets/images/clocky.png';
import '../../../../assets/scss/quiz.scss';
// import quizimage from '../../../../assets/images/quizimage.png';

const Quiz = () => {
  return (
    <>
      <Card className="quiz-card">
        {' '}
        {/* Use className instead of sx */}
        {/* TOP SECTION  */}
        <Box className="top-section">
          <Typography variant="h5" className="question-number">
            Question 1/10
          </Typography>
          <Box className="question-info">
            <img src={clocky} alt="Quiz" className="clocky-image" />
            <Typography variant="h5">10s?</Typography>
          </Box>
        </Box>
        <Box className="line-break"></Box>
        {/* CONTENT SECTION  */}
        <Box className="content-section">
          <Box className="question-section">
            <Typography variant="h5">
              1. When encountering a difficult math problem, a helpful emotional management strategy is to:
            </Typography>

            <Box className="answer-section">
              <Typography variant="h5">A. Use your fingers</Typography>
            </Box>
          </Box>
          <Box className="image-section">{/* <img src={quizimage} alt="Quiz" className="quiz-image" /> */}</Box>
        </Box>
        {/* BOTTOM SECTION  */}
        <Box></Box>
      </Card>
    </>
  );
};

export default Quiz;
