// ==============================|| CHAPTER PAGE ||============================== //

import { Box, Button, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import ChapterContent from 'ui-component/Chapter/ChapterContent';
import ChapterImage from 'ui-component/Chapter/ChapterImage';
import ReactQuillComponent from 'ui-component/Chapter/ReactQuillComponent';


const Chapter = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const [content, setContent] = useState([]);
  const getContentOfLessonByID = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/curriculum/get-Lesson-Content/${id}`);
      const data = response.data;
      console.log("🚀 ~ getContentOfLessonByID ~ data:", data)
      setContent(data?.data);
    } catch (error) {
      console.log('🚀 ~ getTopicsOfSubjectByID ~ error:', error);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    getContentOfLessonByID();
  }, []);
  return (
    <>
      <Grid container spacing={2}>
        {/* BIOLOGY TOPIC START  */}
        <Grid item xs={12} md={12} lg={12}>
          <Typography variant="h2" my={2} sx={{ color: '#00000082' }}>
            {/* {title} */}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box sx={{ backgroundColor: 'background.paper', borderRadius: 5 }}>
                <ChapterImage />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ p: 3, backgroundColor: 'background.paper', borderRadius: 5 }}>
                <ChapterContent />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <Box sx={{ p: 3, backgroundColor: 'background.paper', borderRadius: 5, width: '100%', height: 'auto' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} mb={10}>
                <ReactQuillComponent Content={content} />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '75%', mx: 'auto' }}>
                <Button
                  variant="contained"
                  onClick={() => navigate('/dashboard/quiz')}
                  sx={{
                    color: 'white',
                    borderRadius: '50px',
                    padding: '10px 50px',
                    textTransform: 'none',
                    background: 'linear-gradient(269.64deg, rgba(112, 0, 255, 1) 0%, rgba(143, 31, 255, 1) 100%)',
                    '&:hover': {
                      background: 'linear-gradient(269.64deg, rgba(112, 0, 255, 1) 0%, rgba(143, 31, 255, 1) 100%)'
                    }
                  }}
                >
                  Start Quiz
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    color: 'white',
                    borderRadius: '50px',
                    padding: '10px 50px',
                    textTransform: 'none',
                    background: 'linear-gradient(269.64deg, rgba(255, 65, 25, 1) 0%, rgba(255, 78, 40, 1) 100%)',
                    '&:hover': {
                      background: 'linear-gradient(269.64deg, rgba(255, 65, 25, 1) 0%, rgba(255, 78, 40, 1) 100%)'
                    }
                  }}
                >
                  Go to Activities
                </Button>

                <Button
                  variant="contained"
                  sx={{
                    color: 'white',
                    borderRadius: '50px',
                    padding: '10px 50px',
                    textTransform: 'none',
                    background: 'linear-gradient(269.64deg, rgba(255, 126, 0, 1) 0%, rgba(255, 150, 48, 1) 100%)',
                    '&:hover': {
                      background: 'linear-gradient(269.64deg, rgba(255, 126, 0, 1) 0%, rgba(255, 150, 48, 1) 100%)'
                    }
                  }}
                >
                  Start Games
                </Button>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Chapter;
