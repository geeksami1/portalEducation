import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import guess1 from '../../../../assets/images/guess1.png';
import guess2 from '../../../../assets/images/guess2.jpg';
import MostPlayedGames from './SubCards/MostPlayedGames';
import GameChart from './SubCards/GameChart';
import LeadershipGame from './SubCards/LeadershipGame';
import avatarcourse from 'assets/images/avatarcourse.png';
import champion1 from 'assets/images/champion1.png';
import champion2 from 'assets/images/champion2.png';
import champion3 from 'assets/images/champion3.png';
import bestscore1 from 'assets/images/bestscore1.png';
import bestscore2 from 'assets/images/bestscore2.png';
import BestScoredGames from './SubCards/BestScoredGames';
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

const leadership_games_data = [
  {
    id: 1,
    avatar: avatarcourse,
    name: 'Lucos Jones',
    position: '1st',
    badge: champion1
  },
  {
    id: 2,
    avatar: avatarcourse,
    name: 'Lucos Jones',
    position: '2nd',
    badge: champion2
  },
  {
    id: 3,
    avatar: avatarcourse,
    name: 'Lucos Jones',
    position: '3rd',
    badge: champion3
  }
];

const best_scored_games_data = [
  {
    id: 1,
    title: 'Missing words',
    words: '54 words',
    img: bestscore1,
    bgColor: '#FF8000'
  },
  {
    id: 2,
    title: 'Puzzles',
    words: '54 puzzles',
    img: bestscore2,
    bgColor: '#B05AF7'
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


      <Grid container spacing={2} mt={4}>
        <Grid item xs={12} md={3}>
          <Typography variant="h3" mb={2}>
            Best Scored
          </Typography>
          {best_scored_games_data.map((item, index) => (
            <BestScoredGames key={index} {...item} />
          ))}
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" mb={2}>
            Spend Hours
          </Typography>
          <GameChart />
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h3" mb={2}>
            LeaderBoard
          </Typography>
          {leadership_games_data.map((item, index) => (
            <LeadershipGame key={index} {...item} />
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Games;
