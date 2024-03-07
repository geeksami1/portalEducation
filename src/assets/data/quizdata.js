// Array to store quiz questions
export const quizdata = [
  {
    id: 1,
    question: 'Which of the following is used in React.js to increase performance?',
    choices: ['Virtual DOM', 'Original DOM', 'Both A and B', 'None of the above'],
    type: 'MCQs',
    correctAnswer: 'Virtual DOM',
    points: 10
  },
  {
    id: 2,
    question: 'What does CSS stand for?',
    choices: ['Cascading Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets', 'Creative Style Sheets'],
    type: 'MCQs',
    correctAnswer: 'Cascading Style Sheets',
    points: 10
  },
  {
    id: 3,
    question: 'What is the capital of France?',
    choices: ['Madrid', 'Paris', 'Rome', 'Berlin'],
    type: 'MCQs',
    correctAnswer: 'Paris',
    points: 10
  },
  {
    id: 4,
    question: "Who is the author of 'To Kill a Mockingbird'?",
    choices: ['Harper Lee', 'Mark Twain', 'F. Scott Fitzgerald', 'J.K. Rowling'],
    type: 'MCQs',
    correctAnswer: 'Harper Lee',
    points: 10
  },
  { id: 5, question: 'What is the symbol for water?', choices: ['H', 'O', 'W', 'WA'], type: 'MCQs', correctAnswer: 'H', points: 10 },
  {
    id: 6,
    question: 'Which planet is known as the Red Planet?',
    choices: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    type: 'MCQs',
    correctAnswer: 'Mars',
    points: 10
  },
  {
    id: 7,
    question: 'What is the powerhouse of the cell?',
    choices: ['Nucleus', 'Mitochondria', 'Ribosome', 'Endoplasmic reticulum'],
    type: 'MCQs',
    correctAnswer: 'Mitochondria',
    points: 10
  },
  {
    id: 8,
    question: 'What is the chemical symbol for gold?',
    choices: ['G', 'Au', 'Ag', 'Au+1'],
    type: 'MCQs',
    correctAnswer: 'Au',
    points: 10
  },
  {
    id: 9,
    question: 'Who painted the Mona Lisa?',
    choices: ['Pablo Picasso', 'Leonardo da Vinci', 'Vincent van Gogh', 'Michelangelo'],
    type: 'MCQs',
    correctAnswer: 'Leonardo da Vinci',
    points: 10
  },
  {
    id: 10,
    question: 'What is the largest mammal in the world?',
    choices: ['Blue Whale', 'Elephant', 'Giraffe', 'Hippopotamus'],
    type: 'MCQs',
    correctAnswer: 'Blue Whale',
    points: 10
  }
];


export const resultInitialState = {
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0
}