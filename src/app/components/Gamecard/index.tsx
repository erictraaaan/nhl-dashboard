import { Game, Team } from "@/services/api/api.types";
import { Box, BoxProps, Button, ButtonProps, Card, CardProps, Grid2 } from "@mui/material";
import TeamScore from "../TeamScore";
import Link from "next/link";
import Goal from "../Goal";

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

    const buttonProps: ButtonProps = {
        fullWidth: true,
        variant: "outlined",
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
                    {game.goals.map((goal) => (
                        <Goal key={goal.highlightClip} goal={goal} />
                    ))}

                </Box>
                {/* Links */}
                <Grid2 columns={3} container spacing={2} marginTop={2}>
                    <Grid2 size={1}>
                        <Button {...buttonProps}>
                            <Link target="__blank" href={`https://www.nhl.com${game.threeMinRecap}`}>
                                Recap
                            </Link>
                        </Button>
                    </Grid2>
                    <Grid2 size={1}>
                        <Button {...buttonProps}>Condensed</Button>
                    </Grid2>
                    <Grid2 size={1}>
                        <Button {...buttonProps}>
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