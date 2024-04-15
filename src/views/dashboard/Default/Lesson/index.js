// ==============================|| TOPICS PAGE ||============================== //

import { Box, Grid, Typography } from '@mui/material';
import savage from '../../../../assets/images/savage.png';
import groupx2 from '../../../../assets/images/Groupx2.png';
import LessonCards from 'ui-component/cards/Lesson/LessonCards';
import { gridSpacing } from 'store/constant';
import lesson2 from '../../../../assets/images/lesson2.png';
import { useParams } from 'react-router-dom';

//IMPORT LESSONS PICTURES
import lessonicon01 from '../../../../assets/images/emotion.jpeg';
import lessonicon02 from '../../../../assets/images/lessonicon02.png';
import lessonicon03 from '../../../../assets/images/lessonicon03.png';
import lessonicon04 from '../../../../assets/images/lessonicon04.png';
const Lesson = () => {
  const { id } = useParams();

  console.log(id);



  const lessonData1 = [
    { name: 'Identify and Manage Emotions', color: '#d9b384', icon: lessonicon01 }, // Red
    { name: 'Recognize Sources of Stress and Cope', color: '#4CAF50', icon: lessonicon03 }, // Green
    { name: 'Maintain positive motivation and perseverance', color: '#2196F3', icon: lessonicon02 }, // Blue
    { name: 'Relationships and Communicate Effectively', color: '#9C27B0', icon: lessonicon04 }, // Purple
    { name: 'Develop Self-Awareness and Sense of Identity', color: '#FF7043', icon: lessonicon03 }, // Cream
    { name: 'Think Critically and Creatively', color: '#4DD0E1', icon: lessonicon02 } // Light Blue
    // { name: 'Microbiology', color: '#FFCA28', icon: lessonicon04 }, // Amber
    // { name: 'Genomics', color: '#E91E63', icon: lessonicon01 }, // Pink
  ];

  const lessonData2 = [
    { name: 'Understanding Rational Numbers', color: '#d9b384', icon: lessonicon01 }, // Red
    { name: 'Representing Integers on Number Lines', color: '#4CAF50', icon: lessonicon03 }, // Green
    { name: 'Comparing and Ordering Integers, Decimals, and Fractions', color: '#2196F3', icon: lessonicon02 }, // Blue
    { name: 'Reading, Representing, Comparing, and Ordering Decimal Numbers', color: '#9C27B0', icon: lessonicon04 }, // Purple
    { name: 'Rounding Decimal Numbers', color: '#FF7043', icon: lessonicon03 }, // Cream
    { name: 'Relationships and Equivalences among Fractions and Decimals', color: '#4DD0E1', icon: lessonicon02 } // Light Blue
  ];

  const getColorForLesson = (lessonName) => {
    const lesson = selectedLessonData.find((lesson) => lesson.name === lessonName);
    return lesson ? lesson.color : '#000000'; 
  };

  const selectedLessonData = id === '1' ? lessonData1 : lessonData2;
  return (
    <>
      <Grid container spacing={gridSpacing}>
        {/* BIOLOGY TOPIC START  */}
        <Grid item xs={12} md={12} lg={8}>
          <Typography variant="h2" my={2} sx={{ color: '#00000082' }}>
            Choose Lesson
          </Typography>
          <Grid container spacing={gridSpacing}>
            {selectedLessonData.map((lesson, index) => (
              <Grid key={index} item xs={3} md={3} lg={3}>
                <LessonCards img={lesson.icon} title={lesson.name} bgColor={getColorForLesson(lesson.name)} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        {/*  CHOOSE LESSON END  */}
        {/*  All ABOUT START  */}
        <Grid item xs={4} md={12} lg={4}>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={12} lg={12}>
              <Box sx={{ p: 3, backgroundColor: 'background.paper', borderRadius: 5 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '20px', color: '#000000AB' }}>
                  All About
                </Typography>
                {/* STARTING CONTAINER  */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '24px', color: '#000000AB', mb: 2 }}>
                    SEL in Mathematics Education
                  </Typography>
                  <Box>
                    <img src={savage} alt="savage" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
                  </Box>
                </Box>
                {/* MID CONTAINER  */}
                <Box sx={{ width: '70%', mt: 6 }}>
                  <Box>
                    <img src={groupx2} alt="savage" style={{ width: '100%', height: '100%', objectFit: 'contain', cursor: 'pointer' }} />
                    <Typography variant="h6" sx={{ fontWeight: 200, fontSize: '14px', color: '#000000AB', mt: 2 }}>
                      Your results on this topics per Grade
                    </Typography>
                  </Box>
                </Box>
                {/* FINAL CONTAINER  */}
                <Box sx={{ width: '100%', mt: 6 }}>
                  <Box>
                    <img src={lesson2} alt="savage" style={{ width: '250px', height: '250px', objectFit: 'contain' }} />
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        {/* Recent Results end  */}
      </Grid>
    </>
  );
};

export default Lesson;
