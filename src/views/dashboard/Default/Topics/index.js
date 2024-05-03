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
  Maths_data3,
  Maths_data4,
  arts_data3,
  arts_data4,
  french_immersion_data3,
  french_immersion_data4,
  health_data3,
  health_data4,
  language_data3,
  language_data4,
  native_language_data3,
  native_language_data4,
  premium_art_data3,
  premium_art_data4,
  premium_core_french_data4,
  premium_extended_french_data4,
  premium_french_immersion_data3,
  premium_french_immersion_data4,
  premium_health_data3,
  premium_health_data4,
  premium_language_data3,
  premium_language_data4,
  premium_maths_data3,
  premium_maths_data4,
  premium_native_language_data3,
  premium_native_language_data4,
  premium_science_data3,
  premium_science_data4,
  premium_social_studies_data3,
  premium_social_studies_data4,
  science_data3,
  science_data4,
  social_studies_data3,
  social_studies_data4
} from 'utils/studentData';

const Topics = () => {
  const { id } = useParams();

  let topicName;

  switch (id) {
    case 'Mathematics3': //1
      topicName = 'Mathematics';
      break;
    case 'Arts3': //2
      topicName = 'Arts';
      break;
    case 'Science-and-Technology3': //3
      topicName = 'Science and Technology';
      break;
    case 'Health-And-Physical-Education3': //4
      topicName = 'Health';
      break;
    case 'French-immersion-Program3': //5
      topicName = 'French Immersion Program';
      break;
    case 'Language3': //6
      topicName = 'Language';
      break;
    case 'Native-Language3': //7
      topicName = 'Native Language';
      break;
    case 'Social-Studies3': //8
      topicName = 'Social Studies';
      break;
    case 'Mathematics4': //1
      topicName = 'Mathematics';
      break;
    case 'Arts4': //2
      topicName = 'Arts';
      break;
    case 'Science-and-Technology4': //3
      topicName = 'Science and Technology';
      break;
    case 'Health-And-Physical-Education4': //4
      topicName = 'Health';
      break;
    case 'French-immersion-Program4': //5
      topicName = 'French Immersion Program';
      break;
    case 'Language4': //6
      topicName = 'Language';
      break;
    case 'Native-Language4': //7
      topicName = 'Native Language';
      break;
    case 'Social-Studies4': //8
      topicName = 'Social Studies';
      break;
    case 'Extended-French4': //9
      topicName = 'Extended French Program';
      break;
    case 'Core-French-Program4': //10
      topicName = 'Core French Program';
      break;
    default:
      break;
  }

  return (
    <>
      <Grid container spacing={2}>
        {/* PREMIUM  */}
        <Grid item xs={12} md={12} lg={12}>
          <Typography variant="h2" my={2} sx={{ color: '#00000082' }}>
            {topicName} Topics
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <TopicSlider img={subject6} title={topicName} bgColor="#7A3FF7" />
            </Grid>

            <Grid item xs={1}></Grid>

            <Grid item xs={6}>
              <Box sx={{ p: 3, backgroundColor: 'background.paper', borderRadius: 5 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '20px', color: '#000000AB', mb: 2 }}>
                  Premium Topics
                </Typography>
                <Box sx={{ width: '100%' }}>
                  {id === 'Mathematics3' //1
                    ? premium_maths_data3.map((item, index) => <PremiumTopics key={index} data={item} />)
                    : id === 'Arts3' //2
                      ? premium_art_data3.map((item, index) => <PremiumTopics key={index} data={item} />)
                      : id === 'Science-and-Technology3' //3
                        ? premium_science_data3.map((item, index) => <PremiumTopics key={index} data={item} />)
                        : id === 'Health-And-Physical-Education3' //4
                          ? premium_health_data3.map((item, index) => <PremiumTopics key={index} data={item} />)
                          : id === 'French-immersion-Program3' //5
                            ? premium_french_immersion_data3.map((item, index) => <PremiumTopics key={index} data={item} />)
                            : id === 'Language3' //6
                              ? premium_language_data3.map((item, index) => <PremiumTopics key={index} data={item} />)
                              : id === 'Native-Language3' //7
                                ? premium_native_language_data3.map((item, index) => <PremiumTopics key={index} data={item} />)
                                : id === 'Social-Studies3' //8
                                  ? premium_social_studies_data3.map((item, index) => <PremiumTopics key={index} data={item} />)
                                  : //GRADE 4
                                    id === 'Mathematics4' //1
                                    ? premium_maths_data4.map((item, index) => <PremiumTopics key={index} data={item} />)
                                    : id === 'Arts4' //2
                                      ? premium_art_data4.map((item, index) => <PremiumTopics key={index} data={item} />)
                                      : id === 'Science-and-Technology4' //3
                                        ? premium_science_data4.map((item, index) => <PremiumTopics key={index} data={item} />)
                                        : id === 'Health-And-Physical-Education4' //4
                                          ? premium_health_data4.map((item, index) => <PremiumTopics key={index} data={item} />)
                                          : id === 'French-immersion-Program4' //5
                                            ? premium_french_immersion_data4.map((item, index) => <PremiumTopics key={index} data={item} />)
                                            : id === 'Language4' //6
                                              ? premium_language_data4.map((item, index) => <PremiumTopics key={index} data={item} />)
                                              : id === 'Native-Language4' //7
                                                ? premium_native_language_data4.map((item, index) => (
                                                    <PremiumTopics key={index} data={item} />
                                                  ))
                                                : id === 'Social-Studies4' //8
                                                  ? premium_social_studies_data4.map((item, index) => (
                                                      <PremiumTopics key={index} data={item} />
                                                    ))
                                                  : id === 'Core-French-Program4' //8
                                                    ? premium_core_french_data4.map((item, index) => (
                                                        <PremiumTopics key={index} data={item} />
                                                      ))
                                                    : id === 'Extended-French-Program4' //8
                                                      ? premium_extended_french_data4.map((item, index) => (
                                                          <PremiumTopics key={index} data={item} />
                                                        ))
                                                      : null}
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
                    //GRADE 3
                    id === 'Mathematics3'
                      ? Maths_data3
                      : id === 'Arts3'
                        ? arts_data3
                        : id === 'Science-and-Technology3'
                          ? science_data3
                          : id === 'Health-And-Physical-Education3'
                            ? health_data3
                            : id === 'French-immersion-Program3'
                              ? french_immersion_data3
                              : id === 'Language3'
                                ? language_data3
                                : id === 'Native-Language3'
                                  ? native_language_data3
                                  : id === 'Social-Studies3'
                                    ? social_studies_data3
                                    : //GRADE 4
                                      id === 'Mathematics4'
                                      ? Maths_data4
                                      : id === 'Arts3'
                                        ? arts_data4
                                        : id === 'Science-and-Technology4'
                                          ? science_data4
                                          : id === 'Health-And-Physical-Education4'
                                            ? health_data4
                                            : id === 'French-immersion-Program4'
                                              ? french_immersion_data4
                                              : id === 'Language4'
                                                ? language_data4
                                                : id === 'Native-Language4'
                                                  ? native_language_data4
                                                  : id === 'Social-Studies4'
                                                    ? social_studies_data4
                                                    : null
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
