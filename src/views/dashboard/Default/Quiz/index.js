import { Box, Button, Card, Typography } from '@mui/material';
import React from 'react';
import clocky from 'assets/images/clocky.png';
import '../../../../assets/scss/quiz.scss';
import quizimage from '../../../../assets/images/quizimage.png';

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
            <Typography variant="h5" className="header-question">
              1. When encountering a difficult math problem, a helpful emotional management strategy is to:
            </Typography>

            <Box className="answer-section">
              <Typography variant="h6" className="answer">
                A. Avoid the problem
              </Typography>
            </Box>
            <Box className="answer-section">
              <Typography variant="h6" className="answer">
                A. Avoid the problem
              </Typography>
            </Box>
            <Box className="answer-section">
              <Typography variant="h6" className="answer">
                A. Avoid the problem
              </Typography>
            </Box>
            <Box className="answer-section">
              <Typography variant="h6" className="answer">
                A. Avoid the problem
              </Typography>
            </Box>
          </Box>
          <Box className="image-section">
            <img src={quizimage} alt="Quiz" className="quiz-image" />
          </Box>
        </Box>
        <Box className="line-break"></Box>
        {/* BOTTOM SECTION  */}
        <Box className="bottom-section">
          <Button className="previous-button">Previous Question</Button>
          <Button className="next-button">Next Question</Button>
        </Box>
      </Card>
    </>
  );
};

export default Quiz;
