import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';
import FeedbackProfile from 'ui-component/cards/Feedback/FeedbackProfile';

const Feedback = () => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={4} md={4} lg={4}>
        <FeedbackProfile />
      </Grid>
    </Grid>
  );
};

export default Feedback;
