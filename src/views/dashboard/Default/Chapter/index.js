// ==============================|| CHAPTER PAGE ||============================== //

import { Box, Grid, Typography } from '@mui/material';
import ChapterContent from 'ui-component/Chapter/ChapterContent';
import ChapterImage from 'ui-component/Chapter/ChapterImage';
import ReactQuillComponent from 'ui-component/Chapter/ReactQuillComponent';

const Chapter = () => (
  <>
    <Grid container spacing={2}>
      {/* BIOLOGY TOPIC START  */}
      <Grid item xs={12} md={12} lg={12}>
        <Typography variant="h2" my={2} sx={{ color: '#00000082' }}>
          Cell Biolology
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box sx={{  backgroundColor: 'background.paper', borderRadius: 5 }}>
                <ChapterImage/>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ p: 3, backgroundColor: 'background.paper', borderRadius: 5 }}>
                <ChapterContent/>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Box sx={{ p: 3, backgroundColor: 'background.paper', borderRadius: 5, width: '100%', height: '70vh' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <ReactQuillComponent />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  </>
);

export default Chapter;
