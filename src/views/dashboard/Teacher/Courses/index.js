import { useEffect, useState } from 'react';

// material-ui
import { Grid, Typography } from '@mui/material';

// project imports

import { gridSpacing } from 'store/constant';
// import EarningCard from '../Default/EarningCard';
// import TotalOrderLineChartCard from '../Default/TotalOrderLineChartCard';
import TotalIncomeDarkCard from '../../Default/TotalIncomeDarkCard';
import TotalIncomeLightCard from '../../Default/TotalIncomeLightCard';
// import TotalGrowthBarChart from '../Default/TotalGrowthBarChart';

// import TeachingTable from 'ui-component/cards/Teaching/TeachingTable';

import TeacherTask from 'ui-component/cards/Teaching/TeacherTask';
import NewCourses from 'ui-component/cards/TeachingCourses/NewCourses';
// ==============================|| DEFAULT Course ||============================== //
import teacherCourseX1 from '../../../../assets/images/teachercourseX1.png';
import teacherCourseX2 from '../../../../assets/images/teachercourseX2.png';
import teacherCourseX3 from '../../../../assets/images/teachercourseX3.png';
import MyCourses from 'ui-component/cards/TeachingCourses/MyCourses';

const Course = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  //NEW COURSES
  const courses = [
    { name: 'Science', startDate: 'May 15', rate: '5/5', level: 'Advanced', img: teacherCourseX1, lessons: 20 , color: "#E3DBFF"},
    { name: 'Maths', startDate: 'June 22', rate: '4/5', level: 'Intermediate', img: teacherCourseX2, lessons: 10, color: "#B6DDFF" },
    { name: 'English', startDate: 'July 15', rate: '3/5', level: 'Beginner', img: teacherCourseX3, lessons: 15 ,  color: "#FFC5F9"},
    { name: 'History', startDate: 'August 12', rate: '5/5', level: 'Advanced', img: teacherCourseX1, lessons: 20 , color: "#B7A3FD"},
    { name: 'Geography', startDate: 'September 10', rate: '4/5', level: 'Intermediate', img: teacherCourseX2, lessons: 10, color: "#FACA9B" },
    // Add more course objects as needed
  ];

  return (
    <Grid container spacing={gridSpacing}>
   
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          {/* NEW COURSES CARD START */}
          <Grid item lg={8} md={8} sm={8} xs={12}>
            <Typography variant="h2" my={2} sx={{ color: '#00000082' }}>
              New Courses
            </Typography>
            <Grid container spacing={2}>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <NewCourses image={teacherCourseX2} backgroundColor={'#CBE7FF'} color={'#579BE3'} />
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <NewCourses image={teacherCourseX1} backgroundColor={'#E9E3FF'}  color={'#A28AE5'}/>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <NewCourses image={teacherCourseX3} backgroundColor={'#FFF0E1'}  color={'#FBAB5D'}/>
            </Grid>

            </Grid>
          </Grid>

          {/* NEW COURSES CARD END */}
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeDarkCard isLoading={isLoading} />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeLightCard isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={5}>
           <MyCourses courses={courses} isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h2" my={2} sx={{ color: '#00000082' }}>
              Course
            </Typography>
            <TeacherTask isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Course;
