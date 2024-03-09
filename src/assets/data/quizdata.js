// Array to store quiz questions
export const quizdata = [
  {
    id: 1,
    question: 'When encountering a difficult math problem, a helpful emotional management strategy is to:',
    choices: ['Avoid the problem', 'Get angry at the problem', 'Take a deep breath and try again', 'Blame the teacher'],
    type: 'MCQs',
    correctAnswer: 'Take a deep breath and try again',
    points: 10
  },
  {
    id: 2,
    question: ' If a classmate is struggling with a math concept, an emotionally supportive response would be to:',
    choices: ['Ignore them', 'Offer help and encouragement',
     'Laugh at their difficulty', 'Tell them to give up'],
    type: 'MCQs',
    correctAnswer: 'Offer help and encouragement',
    points: 10
  },
  {
    id: 3,
    question: 'After receiving a lower-than-expected grade in math, a constructive emotional response is to:',
    choices: ['Feel upset indefinitely', 'Blame the test', 'Reflect on areas for improvement', 'Decide to dislike math'],
    type: 'MCQs',
    correctAnswer: 'Reflect on areas for improvement',
    points: 10
  },
  {
    id: 4,
    question: 'Feeling proud after solving a tough math question is an example of:',
    choices: ['An inappropriate response', 'A sign of overconfidence', 'A healthy emotional reaction', 'A reason to boast'],
    type: 'MCQs',
    correctAnswer: 'A healthy emotional reaction',
    points: 10
  },
  {
    id: 5,
    question: 'When a peer solves a problem you found difficult, a positive response is to:',
    choices: ['Feel envious', 'Congratulate and learn from them', 'Ignore their success', 'Feel defeated'],
    type: 'MCQs',
    correctAnswer: 'Congratulate and learn from them',
    points: 10
  },
  {
    id: 6,
    question: 'A good strategy to manage pre-math test anxiety is to:',
    choices: ['Panic', 'Skip the test', 'Engage in negative self-talk', 'Practice relaxation techniques'],
    type: 'MCQs',
    correctAnswer: 'Practice relaxation techniques',
    points: 10
  },
  {
    id: 7,
    question: 'During a disagreement in a math group project, the best way to manage emotions is to:',
    choices: ['Insist on your own way', 'Discuss different viewpoints respectfully', 'Ignore the opinions of others', 'Give up on the project'],
    type: 'MCQs',
    correctAnswer: 'Discuss different viewpoints respectfully',
    points: 10
  },
  {
    id: 8,
    question: 'If you consistently do well in math, an emotionally intelligent way to interact with struggling classmates is to:',
    choices: ['Ignore their struggles', 'Offer support and assistance', 'Feel superior', 'Discourage them from trying'],
    type: 'MCQs',
    correctAnswer: 'Offer support and assistance',
    points: 10
  },
  {
    id: 9,
    question: 'Upon discovering a new method for solving a problem, you should:',
    choices: ['Keep it to yourself', 'Feel anxious about its worth', 'Share it with the class or teacher', 'Worry about others\' reactions'],
    type: 'MCQs',
    correctAnswer: 'Share it with the class or teacher',
    points: 10
  },
  {
    id: 10,
    question: 'When learning a new math topic, a positive emotional approach is to:',
    choices: ['Feel overwhelmed', 'Be curious and open to learning', 'Assume it\'s too difficult', 'Avoid studying'],
    type: 'MCQs',
    correctAnswer: 'Be curious and open to learning',
    points: 10
  }
];

export const resultInitialState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0
};
