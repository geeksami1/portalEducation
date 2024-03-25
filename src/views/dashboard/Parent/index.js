import { useEffect } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { gridSpacing } from 'store/constant';
import TopPeformingStudent from 'ui-component/cards/TopPeformingStudent';
// import TimelineCard from 'ui-component/cards/TimelineCard';
import HiringCard from 'ui-component/cards/HiringCard';
import ImageSlider from 'ui-component/ImageSlider/ImageSlider';
import IntroCard from '../Default/IntroCard';
import MeetingCard from 'ui-component/cards/Parent/MeetingCards';

const ParentDashboard = () => {
  // const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    // setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          {/* ===========================================INTRO CARD ======================================= */}
          <Grid item lg={8} md={12} sm={12} xs={12} mt={4}>
            <IntroCard />

            {/* ===========================================SUBJECTS SECTION START ======================================= */}
            {/* <Grid item xs={12} mt={6}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h2" my={4} sx={{color: '#00000082'}}>
                  Subjects <span style={{ fontSize: 10 , color: '#00000082' }}>(class three)</span>{' '}
                </Typography>
                <Box>
                  <SeeMore />
                </Box>
              </Box>
              <Grid container spacing={2}>
                <Grid item xs={6} md={3} lg={3}>
                  <SubjectBox img={subject1} title="Mathematics" bgColor="#3bc6df" />
                </Grid>

                <Grid item xs={6}  md={3} lg={3}>
                  <SubjectBox img={subject2} title="Physics" bgColor="#7A3FF7" />
                </Grid>
                <Grid item xs={6}  md={3} lg={3}>
                  <SubjectBox img={subject3} title="English" bgColor="#D54041" />
                </Grid>
                <Grid item xs={6}  md={3} lg={3}>
                  <SubjectBox img={subject4} title="Biology" bgColor="#56CD78" />
                </Grid>
              </Grid>
            </Grid> */}

            {/* =========================================== SUBJECTS SECTION END ======================================= */}
          </Grid>

          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              {/* ==================================================Upcoming Meeting SECTION START===================================== */}

              <Grid item sm={6} xs={12} md={6} lg={12}>
                <Box sx={{ p: 3, backgroundColor: 'background.paper', borderRadius: 5 }}>
                  <Box sx={{ width: '100%', height: '100%' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="h5" my={2} sx={{ color: 'blue' }}>
                        Upcoming Meeting
                      </Typography>
                      <Button variant="text" color="primary">
                        View More
                      </Button>
                    </Box>
                    <MeetingCard title="Parent Teacher Meeting" time={'10:00 AM'} classNo={'Grade 3'} />
                    <Box sx={{ marginBottom: '4px', borderBottom: '1px solid #0000001A' }}></Box>
                    <MeetingCard title="Parent Teacher Meeting" time={'10:00 AM'} classNo={'Grade 4'} />
                  </Box>
                </Box>
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                {/* <TotalIncomeLightCard isLoading={isLoading} /> */}
              </Grid>
            </Grid>
          </Grid>

          {/* ===========================================QUIZ TOPICS END ======================================= */}

          <Grid item lg={8} md={12} sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6} lg={6}>
                    <Box sx={{ backgroundColor: 'background.paper', borderRadius: 5 }}>
                      <HiringCard />
                    </Box>
                  </Grid>
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
        </Grid>
      </Grid>
      {/* ==================================================TIME LINE SECTION END===================================== */}
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}></Grid>
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
  );
};

export default ParentDashboard;
