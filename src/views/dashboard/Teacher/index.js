import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';

// project imports

import { gridSpacing } from 'store/constant';
import EarningCard from '../Default/EarningCard';
import TotalOrderLineChartCard from '../Default/TotalOrderLineChartCard';
import TotalIncomeDarkCard from '../Default/TotalIncomeDarkCard';
import TotalIncomeLightCard from '../Default/TotalIncomeLightCard';
import TotalGrowthBarChart from '../Default/TotalGrowthBarChart';
import PopularCard from '../Default/PopularCard';
import TeachingData from 'ui-component/cards/Teaching/TeachingData';
import img1 from '../../../assets/images/teacher1.png';
import img2 from '../../../assets/images/teacher3.png';
import img3 from '../../../assets/images/teacher2.png';
import img4 from '../../../assets/images/teacher5.png';
// ==============================|| DEFAULT TeacherDashboard ||============================== //

const TeacherDashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={3} md={3} sm={3} xs={3}>
            <TeachingData color={'#7F49F2'} title={'Total Students'} number={'20'} img={img1} />
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={3}>
            <TeachingData color={'#E9C030'} title={'Total Subjects'} number={'6'} img={img2} />
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={3}>
            <TeachingData color={'#EA794A'} title={'Total Quizzes'} number={'25'} img={img4} />
          </Grid>
          <Grid item lg={3} md={3} sm={3} xs={3}>
            <TeachingData color={'#3BC6DF'} title={'Total Class'} number={'25'} img={img3} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalOrderLineChartCard isLoading={isLoading} />
          </Grid>
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
          <Grid item xs={12} md={8}>
            <TotalGrowthBarChart isLoading={isLoading} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularCard isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TeacherDashboard;
