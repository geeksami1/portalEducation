import React from 'react';

import QuizCard from 'ui-component/QuizCard/QuizCard';
import { quizdata } from 'assets/data/quizdata';

const Quiz = () => {
 

  return (
    <>
      <QuizCard questions={quizdata}/>
    </>
  );
};

export default Quiz;
