import { Box, Grid, Typography } from '@mui/material';
import subject6 from '../../../../../src/assets/images/Frame 102.png';
import TopicSlider from 'ui-component/ImageSlider/TopicSlider';
import PremiumTopics from 'ui-component/cards/Topics/PremiumTopics';
import TopicsTableUi from 'ui-component/table/TopicsTableUi';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { capitalizeFirstLetter } from 'views/utilities/Capitilize';

const Topics = () => {
  const [topic, setTopic] = useState([]);
  const [subjectName, setSubjectName] = useState('');
  const { id } = useParams();

  const getTopicsOfSubjectByID = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/curriculum/get-alltopics-ofsubject/${id}`);
      const data = response.data;
      setTopic(data?.data);
    } catch (error) {
      console.log('🚀 ~ getTopicsOfSubjectByID ~ error:', error);
    }
  };
  const getNameOfTopic = () => {
    const topicName = topic[2]?.subjectName || '';
    setSubjectName(topicName);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    getTopicsOfSubjectByID();
  }, [id]);

  useEffect(() => {
    getNameOfTopic();
  }, [topic]);

  return (
    <>
      <Grid container spacing={2}>
        {/* PREMIUM  */}
        <Grid item xs={12} md={12} lg={12}>
          <Typography variant="h2" my={2} sx={{ color: '#00000082' }}>
           {capitalizeFirstLetter(subjectName)}  Topics
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <TopicSlider img={subject6} title={capitalizeFirstLetter(subjectName)}  bgColor="#7A3FF7" />
            </Grid>

            <Grid item xs={1}></Grid>

            <Grid item xs={6}>
              <Box sx={{ p: 3, backgroundColor: 'background.paper', borderRadius: 5 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '20px', color: '#000000AB', mb: 2 }}>
                  Premium Topics
                </Typography>
                <Box sx={{ width: '100%' }}>
                  <PremiumTopics data={topic} />
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
                {topic.length === 0 ? (
                  <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '20px', color: '#000000AB', mb: 2 }}>
                    No Topics Found
                  </Typography>
                ) : null}
                <TopicsTableUi id={id} data={topic} />
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
