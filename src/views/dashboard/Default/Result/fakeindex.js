// ==============================|| SAMPLE PAGE ||============================== //

import { Grid } from '@mui/material';
// import subject1 from '../../../../../src/assets/images/Frame 99.png';
// import SubjectBanner from 'ui-component/cards/Subject/SubjectBanner';
import RectangeQuiz1 from '../../../../assets/images/RectangleQuiz1.png';
import RectangeQuiz2 from '../../../../assets/images/RectangleQuiz2.png';
import RectangeQuiz3 from '../../../../assets/images/RectangleQuiz3.png';
import StudentPerformance from '../../../../assets/images/STUDENT PERFORMANCE.png';
import quiz1 from '../../../../assets/images/quiz1.png';
import quiz2 from '../../../../assets/images/quiz2.png';
import quiz3 from '../../../../assets/images/quiz3.png';
import ResultQuiz from 'ui-component/cards/Result/ResultQuiz';
import ResultStudentPerformance from 'ui-component/cards/Result/ResultStudentPerformance';

const Result = () => (
  <>
    <Grid container spacing={2}>
      {/* Banner Subject  */}
      <Grid item xs={3} md={3} lg={3}>
        <ResultQuiz rectangleQuiz={RectangeQuiz1} heading="Quizzes" points="17/20" quizImg={quiz1} />
      </Grid>
      <Grid item xs={3} md={3} lg={3}>
        <ResultQuiz rectangleQuiz={RectangeQuiz2} heading="Games" points="10/10"  quizImg={quiz2} />
      </Grid>
      <Grid item xs={3} md={3} lg={3}>
        <ResultQuiz rectangleQuiz={RectangeQuiz3} heading="Remarks" points="14/20" quizImg={quiz3}  />
      </Grid>
      <Grid item xs={4} md={4} lg={3}>
        <ResultStudentPerformance />
      </Grid>
      <Grid item xs={4} md={4} lg={3}>
        <img src={StudentPerformance} alt="Studdent" style={{marginTop: 20, width: '100%', height: '100%', objectFit: 'contain' }} />
      </Grid>
    </Grid>
  </>
);

export default Result;
