import * as React from 'react';
import { Box, Grid2, Grid2Props } from "@mui/material";
import { getScores } from '@/services/api';
import Gamecard from '../components/Gamecard';
import Link from 'next/link';

export default async function Home() {

  // Get today's scores from the NHL API

  const scores = await getScores("2025-01-05");

  // Get all the games
  const games = scores.games;

  const gridProps: Grid2Props = {
    margin: 3,
    container: true,
    spacing: 3,
    columns: {
      sm: 1,
      md: 2,
      xl: 3,
    }
  }

  return (
    <>
    {/* Date selection */}
    <Box>
      <Link href="/2025-01-04">Previous Day</Link>
      <Link href="/2025-01-06">Next Day</Link>
    </Box>

      <Grid2 {...gridProps} >

        {games.map((game) => (
          <Grid2 size={1} key={game.id}>
            <Gamecard {...game} />
          </Grid2>
        ))}
      </Grid2>
    </>

  );
}
