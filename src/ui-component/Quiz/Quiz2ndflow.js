import { Box, Button, Card, Radio, RadioGroup, Typography } from '@mui/material';
import React, { useState } from 'react';
import clocky from 'assets/images/clocky.png';
import '../../../../assets/scss/quiz.scss';
import quizimage from '../../../../assets/images/quizimage.png';

const Quiz = () => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleAnswerChange = (event) => {
    console.log(event.target.value, 'answer');
    setSelectedAnswer(event.target.value);
  };

  return (
    <>
      <Card className="quiz-card">
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
            <RadioGroup
              aria-label="answer"
              name="answer"
              value={selectedAnswer}
              onChange={handleAnswerChange}
            >
              <Box className="answer-section">
                <Radio value="A" />
                <Typography variant="h6" className="answer">
                   Avoid the problem
                </Typography>
              </Box>
              <Box className="answer-section">
                <Radio value="B" />
                <Typography variant="h6" className="answer">
                   Break the problem into smaller parts
                </Typography>
              </Box>
              <Box className="answer-section">
                <Radio value="C" />
                <Typography variant="h6" className="answer">
                   Seek help from a teacher or peer
                </Typography>
              </Box>
              <Box className="answer-section">
                <Radio value="D" />
                <Typography variant="h6" className="answer">
                   Give up and try another subject
                </Typography>
              </Box>
            </RadioGroup>
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
