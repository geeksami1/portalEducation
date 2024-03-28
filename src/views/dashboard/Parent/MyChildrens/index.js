import { Card, Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import tabpanel1 from 'assets/images/tabpanel1.png';
import tabpanel2 from 'assets/images/tabpanel2.png';
import tabpanel3 from 'assets/images/tabpanel3.png';
import tabpanel4 from 'assets/images/tabpanel4.png';
import tabpanel5 from 'assets/images/tabpanel5.png';
import Overview from 'ui-component/cards/Parent/TabPanel/Overview';
import Quizzes from 'ui-component/cards/Parent/TabPanel/Quizzes';
import Games from 'ui-component/cards/Parent/TabPanel/Games';
import Grades from 'ui-component/cards/Parent/TabPanel/Grades';
import TeacherRemarks from 'ui-component/cards/Parent/TabPanel/TeacherRemarks';

const tabListItems = [
  {
    id: 1,
    title: 'Overview',
    img: tabpanel1
  },
  {
    id: 2,
    title: 'Quizzes',
    img: tabpanel2
  },
  {
    id: 3,
    title: 'Games',
    img: tabpanel3
  },
  {
    id: 4,
    title: 'Grades',
    img: tabpanel4
  },
  {
    id: 5,
    title: 'Teacher Remarks',
    img: tabpanel5
  }
];

const MyChildrens = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Card sx={{ width: '100%', background: 'background.paper', height: '100%' }}>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

              {/* TAB LIST  */}
              <TabList onChange={handleChange} aria-label="lab API tabs example">
                {tabListItems.map((item, index) => (
                  <Tab
                    key={index}
                    sx={{ width: '20%' }}
                    label={
                      <>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                          <img src={item.img} alt="tabpanel1" width="100%" height={100} style={{objectFit: 'contain'}} />
                          <Typography sx={{ color: 'rgba(0, 0, 0, 0.55)', fontWeight: 'bold' }}>{item.title}</Typography>
                        </Box>
                      </>
                    }
                    value={item.id.toString()}
                  />
                ))}
              </TabList>
            </Box>

            {/* TAB PANEL  */}
            <TabPanel value="1" >
              <Overview/>
            </TabPanel>
            <TabPanel value="2" >
              <Quizzes/>
            </TabPanel>
            <TabPanel value="3" >
              <Games/>
            </TabPanel>
            <TabPanel value="4" >
             <Grades/>
            </TabPanel>
            <TabPanel value="5" >
              <TeacherRemarks/>
            </TabPanel>
          </TabContext>
        </Box>
      </Card>
    </>
  );
};

export default MyChildrens;
