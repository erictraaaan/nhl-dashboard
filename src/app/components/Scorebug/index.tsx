import { Game } from "@/services/api/api.types";
import { Card } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export const Scorebug = (game: Game): JSX.Element => {
    // console.log(game);
    console.log(game['homeTeam']);
    return (
        <Card sx={{ m:2, p: 2, textAlign: 'center', width:'33%', minHeight: '2rem'  }}>
        <h1>{game.homeTeam.name.default} {game.homeTeam.score} {game.awayTeam.name.default} {game.awayTeam.score}</h1>
        <Image src={game.homeTeam.logo} alt={game.homeTeam.name.default} width={150} height={150} />
        <Image src={game.awayTeam.logo} alt={game.awayTeam.name.default} width={150} height={150} />
        </Card>
    );
}

export default Scorebug;