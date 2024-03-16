import { Box, Typography } from '@mui/material'
import React from 'react'

import schedule from '../../../assets/images/schedule.png'

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

        
    </Box>
  )
}

export default TeachingSchedule