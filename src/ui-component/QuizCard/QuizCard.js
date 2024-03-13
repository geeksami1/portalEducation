import React, { useState, useEffect } from 'react';
import { Typography, Radio, RadioGroup, FormControlLabel, Button, Box, Card } from '@mui/material';
import AnswerTimer from 'ui-component/AnswerTimer/AnswerTimer';
import { resultInitialState } from 'assets/data/quizdata';
import '../../../src/assets/scss/quiz.scss';

const QuizCard = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitialState);
  const [showResult, setShowResult] = useState(false);
  const [timeUp, setTimeUp] = useState(false);
  const [durationEnded, setDurationEnded] = useState(false);

  const { question, choices, correctAnswer } = questions[currentQuestion];

  const onAnswerClick = (answer, index) => {
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
      setShowResult(true);
    }
  };

  const onTryAgain = () => {
    setCurrentQuestion(0);
    setAnswerIdx(null);
    setAnswer(null);
    setResult(resultInitialState);
    setShowResult(false);
    setTimeUp(false);
    setDurationEnded(false);
  };

  const handleTimeUp = () => {
    setTimeUp(true);
    setDurationEnded(true);
    onClickNext();
  };

  useEffect(() => {
    if (showResult) {
      setTimeUp(false); 
    }
  }, [showResult]);

  return (
    <>
      <Box className="quiz-card-wrapper">
        {!showResult && !timeUp && (
          <Box className="quiz-card-header">
            <Typography variant="h5" className="question-number">
              Question No:
              <span className="question-number-info">
                {currentQuestion + 1}/{questions.length}
              </span>
            </Typography>

            <Typography variant="h5" className="score">
              Score:
              <span className="question-number-info">{result.score}</span>
            </Typography>
          </Box>
        )}

        <Card className="quiz-card">
          {!showResult && !timeUp ? (
            <>
              <Box>
                {/* QUESTION HEADING  */}
                
                <Typography variant="h6" gutterBottom className="header-question">
                  {question}
                </Typography>
                <RadioGroup>
                  {choices.map((choice, index) => (
                    <FormControlLabel
                      onClick={() => onAnswerClick(choice, index)}
                      key={choice}
                      className={answerIdx === index ? 'selected-answer' : null}
                      value={choice}
                      control={<Radio style={{ color: answerIdx === index ? 'white' : 'black' }} />}
                      label={
                        <Typography className="choice" style={{ color: answerIdx === index ? 'white' : 'black' }}>
                          {choice}
                        </Typography>
                      }
                    />
                  ))}
                </RadioGroup>
                <Box className="footer">
                  <Button
                    className="quiz-btn"
                    size="small"
                    onClick={onClickNext}
                    disabled={answerIdx === null}
                    variant="contained"
                    color="primary"
                  >
                    {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </Box>
              </Box>
              <AnswerTimer duration={30} onTimeUp={handleTimeUp} />
            </>
          ) : (
           !timeUp && (
            <>
          
           <Box className="result">
              <Typography variant="h6" gutterBottom className="result-header">
                Result 🎉
              </Typography>
              <Box className="result-info">
                <Typography sx={{ color: 'black' }} variant="body1" className="result-text" gutterBottom>
                  Total Questions: <span className="question-number-info">{questions.length}</span>
                </Typography>
                <Typography sx={{ color: 'black' }} variant="body1" className="result-text" gutterBottom>
                  Total Score: {result.score}
                </Typography>
                <Typography sx={{ color: 'black' }} variant="body1" className="result-text" gutterBottom>
                  Correct Answers: {result.correctAnswers}
                </Typography>
                <Typography sx={{ color: 'black' }} variant="body1" className="result-text" gutterBottom>
                  Wrong Answers: {result.wrongAnswers}
                </Typography>
              </Box>
              <Button className="quiz-btn" onClick={onTryAgain} variant="contained" color="primary">
                Try again
              </Button>
            </Box>
            
            
            </>
            )
          )}
          {timeUp && (
            
            <Box className="result2">
              <Typography variant="h6" gutterBottom className="result-header" style={{marginTop: '20%'}} >
                Duration has ended ⏰
              </Typography>
              <Button className="quiz-btn" onClick={onTryAgain} variant="contained" color="primary"
                style={{marginTop: '10%'}}>
                Try again
              </Button>
            </Box>
          )}
        </Card>
      </Box>
    </>
  );
};

export default QuizCard;
