import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';
import FeedbackProfile from 'ui-component/cards/Feedback/FeedbackProfile';
import ParentFeedback from 'ui-component/cards/Feedback/ParentFeedback';
import feedbackbar from 'assets/images/feedbackbar.png';
const Feedback = () => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} md={4} lg={4}>
        <FeedbackProfile />
      </Grid>
      <Grid item xs={12} md={1} lg={1} mt={10}>
        <img src={feedbackbar} alt="feedbackbar" />
      </Grid>
      <Grid item xs={12} md={7} lg={7}>
        <ParentFeedback />
      </Grid>
    </Grid>
  );
};

export default Feedback;
