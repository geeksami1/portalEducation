import React from 'react';
import Typography from '@mui/material/Typography';
import Chart from 'react-apexcharts';
import { Card, Grid } from '@mui/material';

const OverviewLineChart = () => {
  const chartData = {
    options: {
      chart: {
        type: 'line'
      },
      xaxis: {
        categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      },
      yaxis: {
        min: 0,
        max: 10
      }
    },
    series: [
      {
        name: 'Lectures',
        data: [3, 4, 5, 6, 5, 7, 6]
      },
      {
        name: 'Quizzes',
        data: [2, 3, 4, 3, 5, 4, 6]
      },
      {
        name: 'Games',
        data: [4, 3, 5, 4, 6, 5, 7]
      }
    ]
  };

  return (
    <>
      <Grid item xs={12} md={12} my={4} ml={5}>
        <Typography variant="h2" sx={{ color: 'rgba(0, 0, 0, 0.75)' }}>
          Overview
        </Typography>
      </Grid>
      <Card sx={{ width: '100%', color: 'black', px: 5 }}>
        <Chart options={chartData.options} series={chartData.series} type="line" height={350} />
      </Card>
    </>
  );
};

export default OverviewLineChart;
