// ==============================|| SAMPLE PAGE ||============================== //

import { Grid, Typography } from '@mui/material';
import FeaturedCategory from 'ui-component/cards/FeaturedCategory';
import subject1 from '../../../../../src/assets/images/subject1.png';
import subject2 from '../../../../../src/assets/images/subject2.png';
import subject3 from '../../../../../src/assets/images/subject3.png';
import subject4 from '../../../../../src/assets/images/subject4.png';
import SubjectBanner from 'ui-component/cards/Subject/SubjectBanner';
const Subject = () => (
  <>
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} lg={12}>
        {/* Banner Subject  */}
        <SubjectBanner />
      </Grid>
      {/* Featured Categories START  */}
      <Grid item xs={12} md={12} lg={12}>
        <Typography variant="h2" my={2} sx={{ color: '#00000082' }}>
          Featured Categories
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <FeaturedCategory img={subject1} title="Physics" bgColor="#7A3FF7" />
          </Grid>

          <Grid item xs={2}>
            <FeaturedCategory img={subject2} title="Chemistry" bgColor="#56CD78" />
          </Grid>
          <Grid item xs={2}>
            <FeaturedCategory img={subject3} title="English" bgColor="#D54041" />
          </Grid>
          <Grid item xs={2}>
            <FeaturedCategory img={subject4} title="Biology" bgColor="#25C4E1" />
          </Grid>
          <Grid item xs={2}>
            <FeaturedCategory img={subject2} title="Chemistry" bgColor="#56CD78" />
          </Grid>
          <Grid item xs={2}>
            <FeaturedCategory img={subject1} title="Physics" bgColor="#7A3FF7" />
          </Grid>
        </Grid>
      </Grid>
      {/* Featured Categories END  */}
      {/* Recent Results START  */}
      <Grid item xs={12} md={12} lg={12} mt={4}>
        <Typography variant="h2" my={2} sx={{ color: '#00000082' }}>
          Recent Results
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <FeaturedCategory img={subject1} title="Physics" bgColor="#7A3FF7" />
          </Grid>

          <Grid item xs={2}>
            <FeaturedCategory img={subject2} title="Chemistry" bgColor="#56CD78" />
          </Grid>
          <Grid item xs={2}>
            <FeaturedCategory img={subject3} title="English" bgColor="#D54041" />
          </Grid>
          <Grid item xs={2}>
            <FeaturedCategory img={subject4} title="Biology" bgColor="#25C4E1" />
          </Grid>
          <Grid item xs={2}>
            <FeaturedCategory img={subject2} title="Chemistry" bgColor="#56CD78" />
          </Grid>
          <Grid item xs={2}>
            <FeaturedCategory img={subject1} title="Physics" bgColor="#7A3FF7" />
          </Grid>
        </Grid>
      </Grid>
      {/* Recent Results START  */}
    </Grid>
  </>
);

export default Subject;
