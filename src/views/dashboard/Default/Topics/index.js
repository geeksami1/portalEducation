// ==============================|| TOPICS PAGE ||============================== //

import { Box, Grid, Typography } from '@mui/material';
import subject6 from '../../../../../src/assets/images/Frame 102.png';
import TopicSlider from 'ui-component/ImageSlider/TopicSlider';
import PremiumTopics from 'ui-component/cards/Topics/PremiumTopics';
//PREMIUM
// import premium01 from '../../../../assets/images/sel.jpeg';
// import premium02 from '../../../../assets/images/number.jpeg';
// import premium03 from '../../../../assets/images/pattern.jpeg';
import TopicsTableUi from 'ui-component/table/TopicsTableUi';
import { useParams } from 'react-router-dom';
import {
  Maths_data,
  arts_data,
  health_data,
  premium_art_data,
  premium_health_data,
  premium_maths_data,
  premium_science_data,
  science_data
} from 'utils/studentData';

const Topics = () => {
  const { id } = useParams();

  return (
    <>
      <Grid container spacing={2}>
        {/* PREMIUM  */}
        <Grid item xs={12} md={12} lg={12}>
          <Typography variant="h2" my={2} sx={{ color: '#00000082' }}>
            {id} Topics
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <TopicSlider img={subject6} title={id} bgColor="#7A3FF7" />
            </Grid>

            <Grid item xs={1}></Grid>

            <Grid item xs={6}>
              <Box sx={{ p: 3, backgroundColor: 'background.paper', borderRadius: 5 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '20px', color: '#000000AB', mb: 2 }}>
                  Premium Topics
                </Typography>
                <Box sx={{ width: '100%' }}>
                  {id === 'Mathematics'
                    ? premium_maths_data.map((item, index) => <PremiumTopics key={index} data={item} />)
                    : id === 'Arts'
                      ? premium_art_data.map((item, index) => <PremiumTopics key={index} data={item} />)
                      : id === 'Science and Technology'
                        ? premium_science_data.map((item, index) => <PremiumTopics key={index} data={item} />)
                        : premium_health_data.map((item, index) => <PremiumTopics key={index} data={item} />)}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        {/*  PREMIUM */}

        {/*  YOUR TOPICS */}
        <Grid item xs={12} md={12} lg={12} mt={4}>
          <Box sx={{ p: 3, backgroundColor: 'background.paper', borderRadius: 5 }}>
            <Typography variant="h2" my={2} sx={{ color: '#00000082' }}>
              Your Topics
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TopicsTableUi
                id={id}
                  data={
                    id === 'Mathematics'
                      ? Maths_data
                      : id === 'Arts'
                        ? arts_data
                        : id === 'Science and Technology'
                          ? science_data
                          : health_data
                  }
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        {/*  YOUR TOPICS */}
      </Grid>
    </>
  );
};

export default Topics;
