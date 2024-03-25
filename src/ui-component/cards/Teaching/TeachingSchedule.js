import { Box, Button, Typography } from '@mui/material';
import React from 'react';

import schedule from '../../../assets/images/schedule.png';
import TeachingLessons from './TeachingLessons';
import zoommeet from '../../../assets/images/zoommeet.png';
import TeachingEvents from './TeachingEvents';

const lessonsdata = [
  {
    bg: '#7F49F2',
    subject: 'Pre-Algebra',
    chapter: 'Square Roots',
    time: '10:30 AM - 11:30 AM'
  },
  {
    bg: '#E9C030',
    subject: 'Algebra',
    chapter: 'Square Roots',
    time: '11:30 AM - 12:30 PM'
  },
  {
    bg: '#7F49F2',
    subject: 'Geometry',
    chapter: 'Square Roots',
    time: '12:30 PM - 1:30 PM'
  }
];

const eventsData = [
  {
    img: zoommeet,
    title: 'Teacher Conference',
    calenderDate: '15-Aug',
    time: '10:30 AM - 11:30 AM'
  },
  {
    img: zoommeet,
    title: 'Teacher Conference',
    calenderDate: '15-Aug',
    time: '11:30 AM - 12:30 PM'
  }
];

const TeachingSchedule = () => {
  return (
    <Box sx={{ width: '100%', backgroundColor: 'white', borderRadius: '10px', p: 2 }}>
      {/* SCHEDULE AND ICON  */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
        <Typography variant="h4" sx={{ fontWeight: 600, fontSize: '20px', color: 'rgba(0, 0, 0, 0.7)', p: 2 }}>
          Schedule
        </Typography>
        <img src={schedule} alt="schedule" style={{ width: '20px', height: '20px', objectFit: 'cover', borderRadius: '10px' }} />
      </Box>

      {/* SCHEDULE CONTENT  */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2, p: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, fontSize: '20px', color: 'rgba(0, 0, 0, 0.7)' }}>
          Lessons
        </Typography>
        <Button variant="outlined">See All</Button>
      </Box>
      <Box sx={{ px: 2 }}>
        {lessonsdata.map((item, index) => (
          <TeachingLessons key={index} bg={item.bg} subject={item.subject} chapter={item.chapter} time={item.time} />
        ))}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2, p: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 600, fontSize: '20px', color: 'rgba(0, 0, 0, 0.7)' }}>
          Upcoming Events
        </Typography>
        <Button variant="outlined">See All</Button>
      </Box>
      <Box sx={{ px: 2 }}>
        {eventsData.map((item, index) => (
          <TeachingEvents key={index} img={item.img} title={item.title} calenderDate={item.calenderDate} time={item.time} />
        ))}
      </Box>
    </Box>
  );
};

export default TeachingSchedule;
