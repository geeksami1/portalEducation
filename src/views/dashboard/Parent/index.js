import { useEffect } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { gridSpacing } from 'store/constant';
import HiringCard from 'ui-component/cards/HiringCard';
import ImageSlider from 'ui-component/ImageSlider/ImageSlider';
import IntroCard from '../Default/IntroCard';
import MeetingCard from 'ui-component/cards/Parent/MeetingCards';
import NewsCard from 'ui-component/cards/Parent/NewsCard';
import DocumentCards from 'ui-component/cards/Parent/DocumentCards';

const newsContent = [
  {
    id: 1,
    title: 'User Group Meeting Confirmed!',
    description:
      'WE ARE PLEASED TO CONFIRM THAT WE WILL BE HOLDING  A uSER gROUP MEETING ON FRIDAY 20 OCTOBER, WHO WE THANK FOR HOSTING THE EVENT....',
    img: 'https://source.unsplash.com/random',
    date: 'OCTOBER 2, 2022'
  },
  {
    id: 2,
    title: 'User Group Meeting Confirmed!',
    description:
      'WE ARE PLEASED TO CONFIRM THAT WE WILL BE HOLDING  A uSER gROUP MEETING ON FRIDAY 20 OCTOBER, WHO WE THANK FOR HOSTING THE EVENT....',
    img: 'https://source.unsplash.com/random',
    date: 'OCTOBER 2, 2022'
  },
  {
    id: 3,
    title: 'User Group Meeting Confirmed!',
    description:
      'WE ARE PLEASED TO CONFIRM THAT WE WILL BE HOLDING  A uSER gROUP MEETING ON FRIDAY 20 OCTOBER, WHO WE THANK FOR HOSTING THE EVENT....',
    img: 'https://source.unsplash.com/random',
    date: 'OCTOBER 2, 2022'
  },
  {
    id: 4,
    title: 'User Group Meeting Confirmed!',
    description:
      'WE ARE PLEASED TO CONFIRM THAT WE WILL BE HOLDING  A uSER gROUP MEETING ON FRIDAY 20 OCTOBER, WHO WE THANK FOR HOSTING THE EVENT....',
    img: 'https://source.unsplash.com/random',
    date: 'OCTOBER 2, 2022'
  }
];

const documentContent = [
  {
    id: 1,
    title: 'Rules and Regulations',
    pages: 10
  },
  {
    id: 2,
    title: 'Rules and Regulations',
    pages: 14
  },
  {
    id: 3,
    title: 'Rules and Regulations',
    pages: 15
  },
  {
    id: 4,
    title: 'Rules and Regulations',
    pages: 10
  }
];

const ParentDashboard = () => {
  // const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    // setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid md={8} item>
        <Grid item lg={12} md={12} sm={12} xs={12} mt={4} mb={4}>
          <IntroCard />
        </Grid>

        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={6}>
                  <Box sx={{ backgroundColor: 'background.paper', borderRadius: 5 }}>
                    <HiringCard />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <Box sx={{ p: 3, backgroundColor: 'background.paper', borderRadius: 5 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="h5" my={2} sx={{ color: 'blue' }}>
                        Latest News
                      </Typography>
                      <Button variant="text" color="primary">
                        View More
                      </Button>
                    </Box>
                    <Box
                      sx={{
                        width: '100%',
                        height: '350px',
                        px: 1,
                        overflowY: 'auto',
                        '&::-webkit-scrollbar': { width: '5px' },
                        '&::-webkit-scrollbar-track': { background: '#f1f1f1' },
                        '&::-webkit-scrollbar-thumb': { background: '#888', borderRadius: '4px' },
                        '&::-webkit-scrollbar-thumb:hover': { background: '#555' }
                      }}
                    >
                      {newsContent.map((item, index) => (
                        <NewsCard {...item} key={index} />
                      ))}
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid md={4} item>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Grid container spacing={gridSpacing}>
            {/* MEETING CARDS START HERE */}
            <Grid item sm={6} xs={12} md={6} lg={12}>
              <Box sx={{ p: 3, backgroundColor: 'background.paper', borderRadius: 5, mt: 4 }}>
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
            {/* MEETING CARDS END HERE    */}

            {/* DOCUMENTS START HERE */}
            <Grid item sm={6} xs={12} md={6} lg={12}>
              <Box
                sx={{
                  p: 3,
                  backgroundColor: 'background.paper',
                  borderRadius: 5,
                  mt: 4,
                  maxHeight: '400px',
                  overflowY: 'auto',
                  '&::-webkit-scrollbar': { width: '5px' },
                  '&::-webkit-scrollbar-track': { background: '#f1f1f1' },
                  '&::-webkit-scrollbar-thumb': { background: '#888', borderRadius: '4px' },
                  '&::-webkit-scrollbar-thumb:hover': { background: '#555' }
                }}
              >
                <Box sx={{ width: '100%', minHeight: '100%' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h5" my={2} sx={{ color: 'blue' }}>
                      Documents
                    </Typography>
                    <Button variant="text" color="primary">
                      View More
                    </Button>
                  </Box>
                  {documentContent.map((item) => (
                    <DocumentCards key={item.id} title={item.title} pages={item.pages} />
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* DOCUMENTS END HERE   */}
          </Grid>
        </Grid>
      </Grid>

      {/* upcoming events  */}
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={12} lg={12} my={-4}> 
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
