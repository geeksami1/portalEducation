// ==============================|| TOPICS PAGE ||============================== //

import { Box, Grid, Typography } from '@mui/material';
import subject6 from '../../../../../src/assets/images/Frame 102.png';
import TopicSlider from 'ui-component/ImageSlider/TopicSlider';
import PremiumTopics from 'ui-component/cards/Topics/PremiumTopics';
//PREMIUM
import premium01 from '../../../../assets/images/premium01.png';
import premium02 from '../../../../assets/images/premium02.png';
import premium03 from '../../../../assets/images/premium03.png';
import TopicsTableUi from 'ui-component/table/TopicsTableUi';
import img1 from '../../../../assets/images/tableui1.png';
const data = [
  { topic: 'Biology', difficulty: 'Easy', lessons: 5, practice: 10, quiz: 3, status: 'Completed', backgroundColor: '#c77195', icon: img1 },
  {
    topic: 'Topic 2',
    difficulty: 'Medium',
    lessons: 7,
    practice: 15,
    quiz: 5,
    status: 'In Progress',
    backgroundColor: '#ADD8E6',
    icon: img1
  },
  {
    topic: 'Topic 3',
    difficulty: 'Hard',
    lessons: 10,
    practice: 20,
    quiz: 8,
    status: 'Not Started',
    backgroundColor: '#90EE90',
    icon: img1
  }
];
const Topics = () => (
  <>
    <Grid container spacing={2}>
      {/* BIOLOGY TOPIC START  */}
      <Grid item xs={12} md={12} lg={12}>
        <Typography variant="h2" my={2} sx={{ color: '#00000082' }}>
          Biology Topics
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <TopicSlider img={subject6} title="Physics" bgColor="#7A3FF7" />
          </Grid>

          <Grid item xs={1}></Grid>

          <Grid item xs={6}>
            <Box sx={{ p: 3, backgroundColor: 'background.paper', borderRadius: 5 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '20px', color: '#000000AB', mb: 2 }}>
                Premium Topics
              </Typography>
              <Box sx={{ width: '100%' }}>
                <PremiumTopics
                  image={premium01}
                  title={'Cell Structure'}
                  desc={'It is the structural and functional unit of a living organism.'}
                />
                <PremiumTopics
                  image={premium02}
                  title={'Cell Structure'}
                  desc={'It is the structural and functional unit of a living organism.'}
                />
                <PremiumTopics
                  image={premium03}
                  title={'Cell Structure'}
                  desc={'It is the structural and functional unit of a living organism.'}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      {/*  BIOLOGY TOPIC END  */}
      {/*  Your Topics START  */}
      <Grid item xs={12} md={12} lg={12} mt={4}>
        <Box sx={{ p: 3, backgroundColor: 'background.paper', borderRadius: 5 }}>
          <Typography variant="h2" my={2} sx={{ color: '#00000082' }}>
            Your Topics
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TopicsTableUi data={data} />
            </Grid>
          </Grid>
        </Box>
      </Grid>
      {/* Recent Results end  */}
    </Grid>
  </>
);

export default Topics;
