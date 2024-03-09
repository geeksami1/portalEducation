import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// import Box from '@mui/material/Box';

const Content = `
<h3>Introduction</h3>
In today's lesson, we will explore the importance of identifying and managing emotions in the context of mathematics. Emotional intelligence plays a crucial role in problem-solving, decision-making, and overall success in mathematics. By understanding and managing our emotions effectively, we can approach mathematical challenges with confidence and resilience.

<h4>Objective</h4>
To equip students with skills to identify and manage their emotions in mathematical contexts.
To recognize the impact of emotions on mathematical learning and problem-solving.
Emotion Identification Exercises
Emotions are an integral part of the learning process. Let's start by discussing different emotions students may experience during math class.
Use emotional vocabulary charts to help students recognize and name their emotions related to math learning.
Engage students in reflective discussions about times when they felt frustrated, excited, or confident while working on math problems.
Emotion Regulation Techniques
Introduce students to various emotion regulation techniques such as deep breathing, mindfulness, and positive self-talk.
Practice these techniques during moments of frustration or difficulty in math. Encourage students to take a deep breath and approach the problem with a clear mind.
Emphasize the importance of staying calm and focused, even when facing challenging mathematical concepts.
Growth Mindset Reinforcement
Discuss the concept of a growth mindset, where students believe that their abilities can be developed through dedication and hard work.
Share stories of famous mathematicians who faced challenges and setbacks but persisted in their pursuit of knowledge and understanding.
Encourage students to adopt a growth mindset attitude towards math, viewing mistakes as opportunities for learning and growth.
Collaborative Learning and Empathy Building
Group activities provide an excellent opportunity for students to practice empathy, patience, and understanding towards their peers.
Encourage collaborative problem-solving activities where students work together to tackle challenging math problems.
Foster an environment where students feel comfortable sharing their feelings and supporting each other's emotional needs.
Reflective Journaling
Implement journaling as a tool for students to express their emotional experiences and coping strategies in math.
Encourage students to write about their feelings before, during, and after math class, reflecting on what strategies helped them manage their emotions effectively.
Use journal entries as a basis for class discussions on emotional well-being and strategies for coping with math-related stress.
<h4>Conclusion</h4>
Today, we've explored the importance of identifying and managing emotions in the context of mathematics. By developing emotional intelligence skills, students can approach math challenges with confidence, resilience, and a growth mindset. Remember, it's okay to experience a range of emotions while learning math, but what matters most is how we choose to respond to them.

`;
const ReactQuillComponent = () => {
  const toolbarOptions = [
    [{ align: [] },
    { list: 'ordered' },
    { list: 'bullet' },
    { indent: '-1' },
    { indent: '+1' }],
    ['bold', 'italic', 'underline'],
    //Font
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],
  ];

  return (
    <ReactQuill
      style={{ width: '100%', height: '50vh', color: 'black' }}
      theme="snow"
      value={Content}
      modules={{
        toolbar: {
          container: toolbarOptions, 
        },
      }}
    />
  );
};

export default ReactQuillComponent;
