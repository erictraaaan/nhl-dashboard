import { Box, BoxProps, Card, CardProps, Stack, Typography } from "@mui/material";
import { GoalProps } from "./types";
import Image from "next/image";
import { CSSProperties } from "react";
import PlayCircleIcon from '@mui/icons-material/PlayCircleOutlined';
import Link from "next/link";

export const Goal = (props: GoalProps) => {
    const { goal } = props;

    const cardProps: CardProps = {
        sx: {
            p: 1,
            m: 2,
            maxWidth: 300,
        }
        
    }

    const goalBoxProps: BoxProps = { 
        sx: { 
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        }
    }

    const mugshotBoxProps: BoxProps = {
        display: 'block',
        border: 1,
        height: 50,
        width: 50,
        borderRadius: "50%",
        sx: { 
            backgroundColor: '#e6a914'
        },
        overflow: 'hidden',
    }

    const replayBoxProps: BoxProps = {
        m: '0 0.5rem'
    }

    const imageStyle: CSSProperties = { 
        display: 'inline',
    }

    const assistsBoxProps: BoxProps = {
        width: '100%',
    }

    return (
        <Card {...cardProps}>
            <Box {...goalBoxProps}>
                {/* Mugshot */}
                <Box {...mugshotBoxProps}>
                    <Image style={imageStyle} src={goal.mugshot} alt={`${goal.firstName.default} ${goal.lastName.default}`} width={50} height={50} />
                </Box>

                {/* Goal Details */}
                <Stack margin={"0 0.5rem"} spacing={0.25}>
                    {/* Goal Scorer */}
                    <Box>
                        <Typography><b>{goal.firstName.default} {goal.lastName.default} ({goal.goalsToDate})</b></Typography>
                    </Box>
                    {/* Assists */}
                    <Box {...assistsBoxProps}>
                        <Typography>{goal.assists.map((assist) => `${assist.name.default} (${assist.assistsToDate})`).join(', ')}</Typography>
                    </Box>
                    {/* Game Details */}
                    <Box>
                        <Typography>{goal.period} - {goal.timeInPeriod}</Typography>
                    </Box>
                </Stack>

                {/* Replay Button */}
                <Box {...replayBoxProps}>
                    <Link href={goal.highlightClipSharingUrl}>
                    <PlayCircleIcon />
                    </Link>
                </Box>

            </Box>
        </Card>
    )
}

export default Goal;