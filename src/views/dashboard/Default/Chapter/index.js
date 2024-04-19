// ==============================|| CHAPTER PAGE ||============================== //

import { Box, Button, Grid, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router';
import ChapterContent from 'ui-component/Chapter/ChapterContent';
import ChapterImage from 'ui-component/Chapter/ChapterImage';
import ReactQuillComponent from 'ui-component/Chapter/ReactQuillComponent';
import {
  B1_1_Whole_Numbers,
  B1_2_Whole_Numbers,
  B1_3_Whole_Numbers,
  B1_4_Whole_Numbers,
  B1_5_Whole_Numbers,
  B1_6_Fractions,
  B1_7_Fractions,
  C1_1_Patterns,
  C1_2_Patterns,
  C1_3_Patterns,
  C1_4_Patterns,
  C2_1_Equalities,
  C2_2_Equalities,
  C2_3_Equalities,
  Develop_Self_Awareness_and_Sense_of_Identity,
  Identify_And_Manage_Emotions,
  Maintain_Positive_Motivation_and_Perseverance,
  Recognize_Sources_of_Stress_and_Cope,
  Relationships_and_Communicate_Effectively,
  Think_Critically_and_Creatively
} from 'utils/chaptersData';

const Chapter = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  console.log(id, 'idx');

  //REMOVE -HYPHEN FROM ID

  const title = id.replace(/-/g, ' ');

  let selectedContent;

  switch (id) {
    case 'Identify-and-Manage-Emotions':
      selectedContent = Identify_And_Manage_Emotions;
      break;
    case 'Recognize-Sources-of-Stress-and-Cope':
      selectedContent = Recognize_Sources_of_Stress_and_Cope;
      break;
    case 'Maintain-positive-motivation-and-perseverance':
      selectedContent = Maintain_Positive_Motivation_and_Perseverance;
      break;
    case 'Relationships-and-Communicate-Effectively':
      selectedContent = Relationships_and_Communicate_Effectively;
      break;
    case 'Develop-Self-Awareness-and-Sense-of-Identity':
      selectedContent = Develop_Self_Awareness_and_Sense_of_Identity;
      break;
    case 'Think-Critically-and-Creatively':
      selectedContent = Think_Critically_and_Creatively;
      break;
    case 'B1.1-Whole-Numbers-':
      selectedContent = B1_1_Whole_Numbers;
      break;
    case 'B1.2-Whole-Numbers-':
      selectedContent = B1_2_Whole_Numbers;
      break;
    case 'B1.3-Whole-Numbers':
      selectedContent = B1_3_Whole_Numbers;
      break;
    case 'B1.4-Whole-Numbers-':
      selectedContent = B1_4_Whole_Numbers;
      break;
    case 'B1.5-Whole-Numbers-':
      selectedContent = B1_5_Whole_Numbers;
      break;
    case '-B1.6-Fractions':
      selectedContent = B1_6_Fractions;
      break;
    case 'B1.7-Fractions-':
      selectedContent = B1_7_Fractions;
      break;
    case 'C1.1-Patterns-and-Relationships':
      selectedContent = C1_1_Patterns;
      break;
    case 'C1.2-Patterns-and-Relationships':
      selectedContent = C1_2_Patterns;
      break;
    case 'C1.3-Patterns-and-Relationships':
      selectedContent = C1_3_Patterns;
      break;
    case 'C1.4-Patterns-and-Relationships':
      selectedContent = C1_4_Patterns;
      break;
    case 'C2.1-Equalities-and-Inequalities':
      selectedContent = C2_1_Equalities;
      break;
    case 'C2.2-Equalities-and-Inequalities':
      selectedContent = C2_2_Equalities;
      break;
    case 'C2.3-Equalities-and-Inequalities':
      selectedContent = C2_3_Equalities;
      break;
      
    default:
      selectedContent = null; // You might want to handle this case
      break;
  }

  return (
    <>
      <Grid container spacing={2}>
        {/* BIOLOGY TOPIC START  */}
        <Grid item xs={12} md={12} lg={12}>
          <Typography variant="h2" my={2} sx={{ color: '#00000082' }}>
            {title}
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
                <ReactQuillComponent Content={selectedContent} />
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
