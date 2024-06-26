import { useEffect, useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { gridSpacing } from 'store/constant';
import IntroCard from './IntroCard';
import SubjectBox from './SubjectBox';
import QuizTopicCard from './QuizTopicCard';
import SeeMore from 'ui-component/button/SeeMore';
import CompletionProgress from 'ui-component/cards/CompletionProgress';
import TopPeformingStudent from 'ui-component/cards/TopPeformingStudent';
import TimelineCard from 'ui-component/cards/TimelineCard';
import SpanningTable from 'ui-component/table/Table';
import HiringCard from 'ui-component/cards/HiringCard';
import ImageSlider from 'ui-component/ImageSlider/ImageSlider';
import axios from 'axios';
import subject4 from '../../../assets/images/subject4.png';
import { Link, Navigate } from 'react-router-dom';
// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [subjects, setSubjects] = useState([]);
  const [topic, setTopic] = useState([]);

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (user) {
      const studentId = user._id;
      const gradeId = user.gradeId;

      const getAllCourses = async () => {
        try {
          const response = await axios.post(`http://localhost:8080/api/v1/student/getall-mycourses/${gradeId}`, {
            studentId: studentId
          });
          const data = response.data;
          setSubjects(data?.gradeSubjects);
        } catch (error) {
          console.log('🚀 ~ getAllCourses ~ error:', error);
        }
      };

      // const getAllTopics = async () => {
      //   try {
      //     const response = await axios.get(`http://localhost:8080/api/v1/curriculum/get-alltopics-ofsubject/6649003878af9acfcf1a6e81`);
      //     const data = response.data;
      //     setTopic(data?.data);
      //   } catch (error) {
      //     console.log('🚀 ~ getAllCourses ~ error:', error);
      //   }
      // };

      getAllCourses();
      // getAllTopics();
    }

  }, []);

  if (!user) {
    return <Navigate to="/auth/login" replace={true} />;
  }
  return (
    <>
      {/* {!user && <Navigate to="/auth/login" replace={true} />}
      {!grade && <Navigate to="/auth/login" replace={true} />} */}
      <Grid container spacing={gridSpacing}>
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            {/* ===========================================INTRO CARD ======================================= */}
            <Grid item lg={8} md={12} sm={12} xs={12} mt={4}>
              <IntroCard />

              {/* ===========================================SUBJECTS SECTION START ======================================= */}
              <Grid item xs={12} mt={6}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h2" my={4} sx={{ color: '#00000082' }}>
                    Subjects <span style={{ fontSize: 10, color: '#00000082' }}>({subjects?.length})</span>{' '}
                  </Typography>
                  <Box>
                    <Link to="/dashboard/subject" style={{ textDecoration: 'none' }}>
                      <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        sx={{
                          backgroundColor: 'transparent',
                          border: '1px solid #0000008C',
                          color: '#0000008C',
                          '&:hover': {
                            backgroundColor: '#0000008C',
                            color: '#fff'
                          }
                        }}
                      >
                        See All
                      </Button>
                    </Link>
                  </Box>
                </Box>
                <Grid container spacing={2}>
                  {subjects?.map((subject, index) => (
                    <Grid key={index} item xs={6} md={3} lg={3}>
                      <SubjectBox  img={subject4} title={subject.subjectname} bgColor={'#D54041'} id={subject._id} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>

              {/* =========================================== SUBJECTS SECTION END ======================================= */}
            </Grid>

            {/* ===========================================QUIZ TOPICS START ======================================= */}
            <Grid item lg={4} md={12} sm={12} xs={12}>
              <Typography variant="h2" my={4} sx={{ color: '#00000082' }}>
                Quiz Topics
              </Typography>
              <Grid container spacing={2}>
                {/* ===========================================QUIZ CARD 1 ======================================= */}
                <Grid item xs={6}>
                  <QuizTopicCard title="Concept of Science" project="Project-22" bgColor="#7F49F2" />
                </Grid>
                {/* ===========================================QUIZ CARD 2 ======================================= */}
                <Grid item xs={6}>
                  <QuizTopicCard title="Concept of English" project="Grammer" bgColor="#E9C030" />
                </Grid>
                {/* ===========================================QUIZ CARD 3 ======================================= */}
                <Grid item xs={6}>
                  <QuizTopicCard title="Concept of Maths" project="structure and Algorithm" bgColor="#EA794A" />
                </Grid>
                {/* ===========================================QUIZ CARD 4 ======================================= */}
                <Grid item xs={6}>
                  <QuizTopicCard title="Concept for data" project="science concept" bgColor="#3BC6DF" />
                </Grid>
                {/* ===========================================QUIZ CARD 5 ======================================= */}
                <Grid item xs={6}>
                  <QuizTopicCard title="Concept for data" project="science concept" bgColor="#63CB82" />
                </Grid>
                {/* ===========================================QUIZ CARD 6 ======================================= */}
                <Grid item xs={6}>
                  <QuizTopicCard title="Concept for English" project="Grammatical structure" bgColor="#4A4CF3" />
                </Grid>
              </Grid>
            </Grid>

            {/* ===========================================QUIZ TOPICS END ======================================= */}

            <Grid item lg={8} md={12} sm={12} xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    {/*=================================== COMPLETION PROGRESS  ===================================== */}
                    <Grid item xs={6}>
                      <Box sx={{ p: 3, backgroundColor: 'background.paper', borderRadius: 5 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '20px', color: '#000000AB', mb: 2 }}>
                          Completion Progress
                        </Typography>
                        <Box sx={{ width: '100%', height: '270px' }}>
                          <CompletionProgress title="Quiz" percentage={60} subtitle={'Chapter 3'} />
                          <CompletionProgress title="Quiz" percentage={40} subtitle={'Chapter 4'} />
                          <CompletionProgress title="Quiz" percentage={80} subtitle={'Chapter 5'} />
                          <CompletionProgress title="Quiz" percentage={60} subtitle={'Chapter 6'} />
                        </Box>
                      </Box>
                    </Grid>
                    {/*=================================== TOP PERFORMING STUDENTS ===================================== */}
                    <Grid item xs={6}>
                      <Box sx={{ p: 3, backgroundColor: 'background.paper', borderRadius: 5 }}>
                        <Typography variant="h6" sx={{ fontWeight: 600, fontSize: '20px', color: '#000000AB', mb: 2 }}>
                          Top Performing Students
                        </Typography>
                        <Box
                          sx={{
                            width: '100%',
                            height: '270px',
                            px: 1,
                            overflowY: 'auto',
                            '&::-webkit-scrollbar': { width: '5px' },
                            '&::-webkit-scrollbar-track': { background: '#f1f1f1' },
                            '&::-webkit-scrollbar-thumb': { background: '#888', borderRadius: '4px' },
                            '&::-webkit-scrollbar-thumb:hover': { background: '#555' }
                          }}
                        >
                          <TopPeformingStudent points={7} name="Daniel Robert" color="#15CF3F" bgColor="#7000FF" />
                          <TopPeformingStudent points={9} name="John Doe" color="#0674F8" bgColor="#7A7979" />
                          <TopPeformingStudent points={7} name="Nathon Daniels" color="#FD1E8A" bgColor="#FF9834" />
                          <TopPeformingStudent points={8.6} name="Ulises Stuart" color="#d54041" bgColor="#7F49F2" />
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={4} md={12} sm={12} xs={12}>
              <Grid container spacing={gridSpacing}>
                {/* ==================================================TIME LINE SECTION START===================================== */}
                <Grid item sm={6} xs={12} md={6} lg={12}>
                  {/* <TotalIncomeDarkCard isLoading={isLoading} /> */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h2" sx={{ color: '#00000082' }}>
                      Timeline
                    </Typography>
                    <Box>
                      <SeeMore />
                    </Box>
                  </Box>
                </Grid>
                <Grid item sm={6} xs={12} md={6} lg={12}>
                  <Box sx={{ p: 3, backgroundColor: 'background.paper', borderRadius: 5 }}>
                    <Box sx={{ width: '100%', height: '300px' }}>
                      <TimelineCard title="Quiz #01" time={'10:00 AM'} classNo={'Chapter 3'} />
                      <Box sx={{ marginBottom: '4px', borderBottom: '1px solid #0000001A' }}></Box>
                      <TimelineCard title="Puzzle Game" time={'10:00 AM'} classNo={'Chapter 4'} />
                      <Box sx={{ marginBottom: '4px', borderBottom: '1px solid #0000001A' }}></Box>
                      <TimelineCard title="Assignment #03" time={'10:00 AM'} classNo={'Chapter 5'} />
                    </Box>
                  </Box>
                </Grid>
                <Grid item sm={6} xs={12} md={6} lg={12}>
                  {/* <TotalIncomeLightCard isLoading={isLoading} /> */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* ==================================================TIME LINE SECTION END===================================== */}
        <Grid item xs={12}>
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={8} my={-6}>
              {/* <TotalGrowthBarChart isLoading={isLoading} /> */}
              {/* ==================================================TABLE===================================== */}
              <Typography variant="h2" my={2} sx={{ color: '#00000082' }}>
                Your Achievements
              </Typography>
              <SpanningTable />
            </Grid>
            <Grid item xs={12} md={4}>
              {/* <PopularCard isLoading={isLoading} /> */}
              {/* ==================================================HIRING CARD===================================== */}
              <Box sx={{ backgroundColor: 'background.paper', borderRadius: 5 }}>
                <HiringCard />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {/*================================================= UPCOMING EVENTS =====================================  */}
          <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={12} my={-12}>
              <Typography variant="h2" my={2} sx={{ color: '#00000082' }}>
                Upcoming Events
              </Typography>
              <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={6} md={3}>
                  <ImageSlider title={'Cooking'} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <ImageSlider title={'Debate'} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <ImageSlider title={'Drama'} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <ImageSlider title={'SportDay'} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
