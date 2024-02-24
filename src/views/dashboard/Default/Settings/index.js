// ==============================|| SAMPLE PAGE ||============================== //

import { Grid } from '@mui/material';

import VerticalTabs from 'ui-component/tabs/Tabs';

//GROUP IMPORT
const Settings = () => (
  <>
    <Grid container spacing={2}>
      <Grid item xs={12} md={12} lg={12}>
        {/*TABS */}
        <VerticalTabs />
      </Grid>
    </Grid>
  </>
);

export default Settings;
