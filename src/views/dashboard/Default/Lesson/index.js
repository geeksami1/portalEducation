// ==============================|| TOPICS PAGE ||============================== //

import { Box, Grid, Typography } from '@mui/material';
import savage from '../../../../assets/images/savage.png';
import groupx2 from '../../../../assets/images/Groupx2.png';
import LessonCards from 'ui-component/cards/Lesson/LessonCards';
import { gridSpacing } from 'store/constant';
import lesson2 from '../../../../assets/images/lesson2.png';
import { useParams } from 'react-router-dom';


import {
  ArstLesson1,
  ArstLesson2,
  ArstLesson3,
  ArstLesson4,
  HealthLesson1,
  HealthLesson2,
  HealthLesson3,
  HealthLesson4,
  MathematicLesson1,
  MathematicLesson2,
  MathematicLesson3,
  MathematicLesson6,
  ScienceLesson1,
  ScienceLesson2,
  ScienceLesson3,
  ScienceLesson4,
  ScienceLesson5,
  mathematicLesson4,
  mathematicLesson5
} from 'utils/lessonData';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Lesson = () => {
  const { id } = useParams();
  const [lessons, setLessons] = useState([]);
  console.log(id);


  const getLessonsOfTopicsByID = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/curriculum/get-all-lessonsof-topic/${id}`);
      const data = response.data;
      console.log("🚀 ~ getLessonsOfTopicsByID ~ data:", data)
      // setTopic(data?.data);
      setLessons(data?.data);
    } catch (error) {
      console.log('🚀 ~ getTopicsOfSubjectByID ~ error:', error);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    getLessonsOfTopicsByID();
  }, []);


  return (
    <>
      <Grid container spacing={gridSpacing}>
        {/* BIOLOGY TOPIC START  */}
        <Grid item xs={12} md={12} lg={8}>
          <Typography variant="h2" my={2} sx={{ color: '#00000082' }}>
            Choose Lesson
          </Typography>
          <Grid container spacing={gridSpacing}>
            {lessons && lessons.map((lesson, index) => (
              <Grid key={index} item xs={3} md={3} lg={3}>
                <LessonCards id={lesson._id} lessonName={lesson.lessonName} />
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
                    {/* SEL in Mathematics Education */}
                    {id}
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
