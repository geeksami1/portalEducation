import React from 'react';
import CalendarPicker from '@mui/lab/CalendarPicker';
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';
import { Box } from '@mui/system';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const Calendar = () => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Box mb={2} sx={{ backgroundColor: 'black', borderRadius: 5, color: 'black' }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar sx={{ color: 'white' }} />
          </LocalizationProvider>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Calendar;
