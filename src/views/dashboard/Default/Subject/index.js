// ==============================|| SAMPLE PAGE ||============================== //

import { Grid, Typography } from '@mui/material';
import FeaturedCategory from 'ui-component/cards/FeaturedCategory';
import subject1 from '../../../../../src/assets/images/Frame 99.png';
import subject2 from '../../../../../src/assets/images/Frame 98.png';
import subject3 from '../../../../../src/assets/images/Frame 97.png';
import subject4 from '../../../../../src/assets/images/Frame 100.png';
import subject5 from '../../../../../src/assets/images/Frame 101.png';
import subject6 from '../../../../../src/assets/images/Frame 102.png';
import SubjectBanner from 'ui-component/cards/Subject/SubjectBanner';
import SubjectResultCard from 'ui-component/cards/Subject/SubjectResultCard';

//SUBJECT CARD BOX
import Rectangle from '../../../../assets/images/Rectangle 8721.png';
// import Rectangle1 from '../../../../assets/images/Rectangle';
// import elipse from '../../../../assets/images/Ellipse 20.png';

//GROUP IMPORT
// import group1 from '../../../../assets/images/Group1.png';
// import group2 from '../../../../assets/images/Group2.png';
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
            <FeaturedCategory img={subject6} title="Physics" bgColor="#7A3FF7" />
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
            <FeaturedCategory img={subject5} title="Chemistry" bgColor="#56CD78" />
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
          <Grid item xs={4}>
            <SubjectResultCard
              rectangle={Rectangle}
              circle={"#AF59F7"}
              heading={'Science and Technology'}
              number={75}
              backgroundColor={'#F0DCF6'}
            />
          </Grid>
          <Grid item xs={4}>
            <SubjectResultCard
              backgroundColor={'#D4EDFC'}
              rectangle={Rectangle}
              circle={"#00B2FF"}
              heading={'Geography and History'}
              number={80}
            />
          </Grid>
          <Grid item xs={4}>
            <SubjectResultCard
              backgroundColor={'#FFE5CF'}
              rectangle={Rectangle}
              circle={"#FF8000"}
              heading={'English and Literature'}
              number={90}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* Recent Results end  */}
      <Grid item xs={12} md={12} lg={12} mt={4}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {/* <SubjectResultCard rectangle={Rectangle} elipse={elipse} heading={'Science and Technology'} number={1} /> */}
          </Grid>
          <Grid item xs={6}>
            {/* <SubjectResultCard rectangle={Rectangle} elipse={elipse} heading={'Science and Technology'} number={1} /> */}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </>
);

export default Subject;
