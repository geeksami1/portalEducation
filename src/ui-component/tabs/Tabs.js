import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PersonalInformation from './TabsContent/PersonalInformation';
import Password from './TabsContent/Password';
import Email from './TabsContent/Email';
import Notification from './TabsContent/Notification';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "100vh" }}>
    <Box sx={{ flexGrow: 1, display: 'flex', height: '120vh' }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        // sx={{ borderRight: 2, borderColor: 'divider', padding: '8px', paddingTop: '40px' }}
        sx={{ borderRight: 2, borderColor: 'divider', paddingTop: '40px' }}
      >
        <Tab  label="Personal Information" {...a11yProps(0)} />
        <Tab  label="Change Password" {...a11yProps(1)} />
        <Tab  label="Email Settings" {...a11yProps(2)} />
        <Tab label="Notification Settings"  {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <PersonalInformation />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Password />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Email />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Notification />
      </TabPanel>
    </Box>
  );
}
