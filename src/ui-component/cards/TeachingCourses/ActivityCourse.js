import { Box, CircularProgress, MenuItem, Select, Typography } from '@mui/material';
import React, { useState } from 'react';

const CustomCircularProgress = ({ value, size, thickness, filledColor, unfilledColor }) => {
  return (
    <Box position="relative" width={size} height={size}>
      {/* Unfilled part */}
      <CircularProgress
        variant="determinate"
        value={100} // Set to 100 to show the full circle initially
        size={size}
        thickness={thickness}
        sx={{ color: unfilledColor }} // Set your desired color for the unfilled part
      />
      {/* Filled part */}
      <CircularProgress
        variant="determinate"
        value={value} // You can replace this with the actual progress value
        size={size}
        thickness={thickness}
        sx={{ position: 'absolute', top: 0, left: 0, color: filledColor }} // Set your desired color for the filled part
      />
      <Typography
        variant="body1"
        sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontWeight: 'bold', color: 'black' }}
      >
        {`${value}%`}
      </Typography>
    </Box>
  );
};

const ActivityCourse = () => {
  const [activity, setActivity] = useState('week');

  const handleActivityChange = (event) => {
    setActivity(event.target.value);
  };

  return (
    <>
      <Box sx={{ width: '100%', backgroundColor: 'white', borderRadius: '10px', p: 2 }}>
        {/* Heading  */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 2,
            mt: 2,
            color: 'black'
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 600, fontSize: '16px', color: 'rgba(0, 0, 0, 0.7)', p: 2 }}>
            Activities
          </Typography>

          <Select
            labelId="activity-dropdown-label"
            id="activity-dropdown"
            value={activity}
            label="Activity"
            onChange={handleActivityChange}
            sx={{
              '& .MuiSelect-root': {
                padding: '6px', // Adjust padding to reduce size
                fontSize: '14px', // Adjust font size
              },
              '& .MuiSelect-select:focus': {
                backgroundColor: 'transparent', // Remove focus background
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none', // Remove the border
              },
            }}
          >
            <MenuItem sx={{ color: 'rgba(0, 0, 0, 0.7)' }} value={'week'}>
              Week
            </MenuItem>
            <MenuItem sx={{ color: 'rgba(0, 0, 0, 0.7)' }} value={'day'}>
              Day
            </MenuItem>
          </Select>
        </Box>
        {/* Activity Box  */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 5, mt: 5 }}>
          <CustomCircularProgress
            value={76} // You can replace this with the actual progress value
            size={100}
            thickness={4}
            filledColor="#FFA818" // Set your desired color for the filled part
            unfilledColor="#E56490" // Set your desired color for the unfilled part
          />
        </Box>

        {/* TEXT ACTIVITY 1  */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2, p: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
            <Box sx={{ width: '20px', height: '20px', backgroundColor: '#E56490' }}></Box>
            <Typography variant="h4" sx={{ fontWeight: 500, fontSize: '12px', color: 'rgba(0, 0, 0, 0.75)' }}>
              Study
            </Typography>
          </Box>
          <Typography variant="h4" sx={{ fontWeight: 500, fontSize: '12px', color: 'rgba(0, 0, 0, 0.75)' }}>
            75%
          </Typography>
        </Box>

        <Box sx={{ borderBottom: '1px solid #E0E0E0' }}></Box>
        {/* TEXT ACTIVITY 2  */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
            <Box sx={{ width: '20px', height: '20px', backgroundColor: '#FFA818' }}></Box>
            <Typography variant="h4" sx={{ fontWeight: 500, fontSize: '12px', color: 'rgba(0, 0, 0, 0.75)' }}>
              Exams
            </Typography>
          </Box>
          <Typography variant="h4" sx={{ fontWeight: 500, fontSize: '12px', color: 'rgba(0, 0, 0, 0.75)' }}>
            75%
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default ActivityCourse;
