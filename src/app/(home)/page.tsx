import * as React from 'react';
import { Box, Card, Container, Typography } from "@mui/material";
import { getScores } from '@/services/api';
import Scorebug from '../components/Scorebug';
import Link from 'next/link';

export default async function Home() {

  // Get today's scores from the NHL API
  // const scores = await getScoresToday();

  const scores = await getScores("2025-01-05");
  console.log(scores.currentDate);

  // Get all the games
  const games = scores.games;

  console.log(games[0].homeTeam);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
      {games.map((game) => (
        <Scorebug key={game.id} {...game} />
      ))}
    </Box>

  );
}
