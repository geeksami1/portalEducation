import React, { useState } from 'react';
import { Typography, List, ListItem, ListItemText, Radio, RadioGroup, FormControlLabel, Button, Box, Card } from '@mui/material';
import '../../../src/assets/scss/quiz.scss';
import { resultInitialState } from 'assets/data/quizdata';
import '../../../src/assets/scss/quiz.scss';

const QuizCard = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitialState);
  const [showResult, setShowResult] = useState(false);

  const { question, choices, correctAnswer } = questions[currentQuestion];

  const onAnwswerClick = (answer, index) => {
    setAnswerIdx(index);
    if (answer === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  const onClickNext = () => {
    setAnswerIdx(null);
    setResult((prev) =>
      answer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1
          }
    );

    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }
  };

  const onTryAgain = () => {
    setResult(resultInitialState);
    setShowResult(false);
  };

  return (
    <Box className="quiz-card-wrapper">
      <Card className="quiz-card">
        {!showResult ? (
          <>
            <Typography variant="h5" gutterBottom>
              <span className="active-question-no">{currentQuestion + 1}</span>
              <span className="total-question">/{questions.length}</span>
            </Typography>
            <Typography variant="h6" gutterBottom className="header-question">
              {question}
            </Typography>
            <RadioGroup>
              {choices.map((choice, index) => (
                <FormControlLabel
                  onClick={() => onAnwswerClick(choice, index)}
                  key={choice}
                  className={answerIdx === index ? 'selected-answer' : null}
                  value={choice}
                  control={<Radio />}
                  label={<Typography className="choice">{choice}</Typography>}
                />
              ))}
            </RadioGroup>
            <div className="footer">
              <Button onClick={onClickNext} disabled={answerIdx === null} variant="contained" color="primary">
                {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </>
        ) : (
          <div className="result">
            <Typography variant="h6" gutterBottom>
              Result
            </Typography>
            <Typography sx={{ color: 'black' }} variant="body1" gutterBottom>
              Total Questions: {questions.length}
            </Typography>
            <Typography sx={{ color: 'black' }} variant="body1" gutterBottom>
              Total Score: {result.score}
            </Typography>
            <Typography sx={{ color: 'black' }} variant="body1" gutterBottom>
              Correct Answers: {result.correctAnswers}
            </Typography>
            <Typography sx={{ color: 'black' }} variant="body1" gutterBottom>
              Wrong Answers: {result.wrongAnswers}
            </Typography>
            <Button onClick={onTryAgain} variant="contained" color="primary">
              Try again
            </Button>
          </div>
        )}
      </Card>
    </Box>
  );
};

export default QuizCard;
