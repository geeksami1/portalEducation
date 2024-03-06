import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';

const Feedback = () => {
  return (
    <Grid container spacing={gridSpacing}>
      {/* Card Section - 6 columns on extra small screens and above */}
      <Grid item xs={12} sm={8}>
        {/* Your card section content */}
        <Grid container spacing={gridSpacing}>
          {/* {
            studentdata.map((item, index) => (
              <Grid key={index} item xs={6}>
                <TeachingStudentsCard data={item} isLoading={isLoading} />
              </Grid>
            ))
          } */}
          Hello
        </Grid>
      </Grid>

      {/* Leadership List - 6 columns on extra small screens and above */}
      <Grid item xs={12} sm={4}>
        {/* Your leadership list content */}
        {/* <TeachingStudentsCard isLoading={isLoading} /> */}
      </Grid>
    </Grid>
  );
};

export default Feedback;
