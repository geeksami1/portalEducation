import { useEffect, useState } from 'react';

// material-ui
import { Grid, Typography } from '@mui/material';

// project imports

import { gridSpacing } from 'store/constant';
// import EarningCard from '../Default/EarningCard';
// import TotalOrderLineChartCard from '../Default/TotalOrderLineChartCard';
import TotalIncomeDarkCard from '../Default/TotalIncomeDarkCard';
import TotalIncomeLightCard from '../Default/TotalIncomeLightCard';
// import TotalGrowthBarChart from '../Default/TotalGrowthBarChart';
import TeachingData from 'ui-component/cards/Teaching/TeachingData';
import img1 from '../../../assets/images/teacher1.png';
import img2 from '../../../assets/images/teacher3.png';
import img3 from '../../../assets/images/teacher2.png';
import img4 from '../../../assets/images/teacher5.png';
import TeachingTable from 'ui-component/cards/Teaching/TeachingTable';
import TeachingCourse from 'ui-component/cards/Teaching/TeachingCourse';
import teachercourse from '../../../assets/images/teachercourse.png';
import TeacherTask from 'ui-component/cards/Teaching/TeacherTask';
import TeachingSchedule from 'ui-component/cards/Teaching/TeachingSchedule';
// ==============================|| DEFAULT TeacherDashboard ||============================== //

const TeacherDashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const data = [
    {
      avatar: img3,
      name: 'John Doe',
      class: '10th Class',
      subject: 'Math',
      chapter: 'Square Roots',
      percentage: '90%',
      action: 'Test',
      color: '#7F49F2'
    },
    {
      avatar: img2,
      name: 'Jane Smith',
      class: '12th Class',
      subject: 'Chemistry',
      chapter: 'Periodic Table',
      percentage: '85%',
      action: 'Quiz',
      color: '#E9C030'
    },
    {
      avatar: img1,
      name: 'Jakobs Robert',
      class: '11th Class  ',
      subject: 'Biology',
      chapter: 'Cell Biology',
      percentage: '78%',
      action: 'Quiz',
      color: '#EA794A'
    }
  ];

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        {/* TEACHING DATA CARD START */}
        <Grid container spacing={gridSpacing}>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TeachingData color={'#7F49F2'} title={'Total Students'} number={'20'} img={img1} />
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TeachingData color={'#E9C030'} title={'Total Subjects'} number={'6'} img={img2} />
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TeachingData color={'#EA794A'} title={'Total Quizzes'} number={'25'} img={img4} />
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TeachingData color={'#3BC6DF'} title={'Total Class'} number={'25'} img={img3} />
          </Grid>
        </Grid>
        {/* TEACHING DATA CARD END */}
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          {/* TEACHING HOMEWORK CARD START */}
          <Grid item lg={8} md={8} sm={8} xs={12}>
            <Typography variant="h2" my={2} sx={{ color: '#00000082' }}>
              Pending homework
            </Typography>
            <TeachingTable data={data} isLoading={isLoading} />
          </Grid>
          {/* TEACHING HOMEWORK CARD END */}
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                {/* <TotalIncomeDarkCard isLoading={isLoading} /> */}
                <TeachingSchedule />
              </Grid>
              {/* <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeLightCard isLoading={isLoading} />
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={4}>
            <Typography variant="h2" my={2} sx={{ color: '#00000082' }}>
              Courses
            </Typography>
            <TeachingCourse
              img={teachercourse}
              isLoading={isLoading}
              title={'Teaching Integrals and Fractional Method'}
              weeks={5}
              hours={10}
              quizes={3}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h2" my={2} sx={{ color: '#00000082' }}>
              Courses
            </Typography>
            <TeacherTask isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TeacherDashboard;
