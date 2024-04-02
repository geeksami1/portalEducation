import { Grid, Typography } from '@mui/material';
import React from 'react';
import guess1 from '../../../../assets/images/guess1.png';
import guess2 from '../../../../assets/images/guess2.jpg';
import MostPlayedGames from './SubCards/MostPlayedGames';
const games_data = [
  {
    id: 1,
    title: 'Guess the word',
    img: guess1,
    completion: 56,
    bg: '#7F49F2'
  },
  {
    id: 2,
    title: 'Guess the word',
    img: guess2,
    completion: 56,
    bg: '#D54041'
  },
  {
    id: 3,
    title: 'Guess the pictures',
    img: guess1,
    completion: 56,
    bg: '#3BC6DF'
  },
  {
    id: 4,
    title: 'Guess the pictures',
    img: guess2,
    completion: 56,
    bg: '#EA794A'
  }
];

const Games = () => {
  return (
    <>
      <Typography variant="h2" mb={2}>
        Most Played Games
      </Typography>
      <Grid container spacing={2}>
        {games_data.map((item, index) => (
          <Grid item xs={12} md={3} key={index}>
            <MostPlayedGames {...item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Games;
