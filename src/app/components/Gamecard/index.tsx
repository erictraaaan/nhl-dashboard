import { Game, Team } from "@/services/api/api.types";
import { Box, BoxProps, Button, Card, CardProps, Grid2 } from "@mui/material";
import TeamScore from "../TeamScore";
import Link from "next/link";

export const Gamecard = (game: Game): JSX.Element => {

    const cardProps: CardProps = {
        sx: {
            p: 2,
        }
    }

    const cardBoxProps: BoxProps = {
        sx: {
            display: 'flex',
            flexDirection: 'column',
        }
    }

    const scoreBoxProps: BoxProps = {
        sx: {
            display: 'flex',
            flexDirection: 'column',
        }
    }

    const linksBoxProps: BoxProps = {
        sx: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }
    }

    const teams: Team[] = [game.awayTeam, game.homeTeam];

    return (
        <Card {...cardProps}>
            <Box {...cardBoxProps}>
                {/* Game Status */}
                <Box>

                </Box >
                {/* Score */}
                <Box {...scoreBoxProps}>
                    {teams.map((team: Team) => (
                        <TeamScore key={team.id} logo={team.logo} name={team.name.default} score={team.score} shots={team.sog} />
                    ))}
                </Box>
                {/* Goals */}
                <Box>

                </Box>
                {/* Links */}
                <Grid2 columns={3} container>
                    <Grid2 size={1}>
                        <Button fullWidth>
                            <Link target="__blank" href={`https://www.nhl.com${game.threeMinRecap}`}>
                                Recap
                            </Link>
                        </Button>
                    </Grid2>
                    <Grid2 size={1}>
                        <Button fullWidth>Condensed</Button>
                    </Grid2>
                    <Grid2 size={1}>
                        <Button fullWidth>
                        <Link target="__blank" href={`https://www.nhl.com${game.gameCenterLink}`}>
                                Gamecenter
                            </Link>
                        </Button>
                    </Grid2>
                </Grid2>
            </Box>
        </Card>
    );
}

export default Gamecard;