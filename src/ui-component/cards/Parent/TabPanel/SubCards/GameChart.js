import React from 'react';
import Card from '@mui/material/Card';
import Chart from 'react-apexcharts';

const GameChart = () => {
  const chartData = {
    options: {
      chart: {
        type: 'bar',
      },
      xaxis: {
        categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      },
      yaxis: {
        min: 0,
        max: 14,
      },
    },
    series: [
      {
        name: 'Multiplayer',
        data: [3, 5, 6, 7, 7, 8, 9], // Example data for multiplayer
      },
      {
        name: 'Single Player',
        data: [2, 4, 5, 6, 6, 7, 8], // Example data for single player
      },
    ],
  };

  return (
    <Card sx={{ width: '100%', background: "rgba(82, 214, 230, 0.7)", color: 'black' }}>
      <Chart options={chartData.options} series={chartData.series} type="bar" height={350} />
    </Card>
  );
};

export default GameChart;
