import { Grid } from '@mui/material';
import quiz1 from '../../../../assets/images/quiz1.png';
import quiz2 from '../../../../assets/images/quiz2.png';
import quiz3 from '../../../../assets/images/quiz3.png';
// import ResultQuiz from 'ui-component/cards/Result/ResultQuiz';
import { gridSpacing } from 'store/constant';
import ResultStudentPerformance from 'ui-component/cards/Result/ResultStudentPerformance';
import QuizResult from 'ui-component/cards/Result/QuizResult';
//Student Image

import student1 from '../../../../assets/images/student1.png';
import student2 from '../../../../assets/images/student2.png';
// import TotalGrowthBarChart from '../TotalGrowthBarChart';

const Result = () => (
  <Grid container spacing={gridSpacing}>
    <Grid item xs={12} md={12} lg={8}>
      <Grid container spacing={gridSpacing}>
        <Grid item xs={4} md={4} lg={4}>
          <QuizResult color={'#FF8300'} heading="Quizzes" points="17/20" quizImg={quiz1} />
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
          <QuizResult color={'#7000FF'} heading="Games" points="12/12" quizImg={quiz2} />
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
          <QuizResult color={'#83CE8B'} heading="Remarks" points="14/20" quizImg={quiz3} />
        </Grid>
       
        <Grid item xs={7} md={7} lg={7}>
            {/* <TotalGrowthBarChart /> */}
        </Grid>
      
      </Grid>
    </Grid>
    <Grid item xs={4} md={12} lg={4}>
      <Grid container spacing={gridSpacing}>
      
        <Grid item xs={12} md={12} lg={12}>
          <ResultStudentPerformance studentImg={student1} perc={'88%'} title={'Student Performance'} color={'#a364e9'} imgWidth={'200px'} imgHeight={'130px'} />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <ResultStudentPerformance studentImg={student2} perc={'90%'} title={'Attendance Percentage'} color={'#6749E8'} imgWidth={'180px'} imgHeight={'200px'}  />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
);

export default Result;
