import { Box, BoxProps, Typography } from "@mui/material";
import { TeamScoreProps } from "./types";
import Image from "next/image";

export const TeamScore = (props: TeamScoreProps): JSX.Element => {

    const teamContainerBoxProps: BoxProps = { 
        sx: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }
    }

    const nameBoxProps: BoxProps = {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
    }

    return (
        <Box {...teamContainerBoxProps}>
            {/* Logo */}
            <Image src={props.logo} alt={props.name} width={48} height={32} />
            {/* Name */}
            <Box {...nameBoxProps}>
                <Typography variant="h4">{props.name}</Typography>
                <Typography variant="h5">SOG: {props.shots}</Typography>
            </Box>
            {/* Score */}
            <Typography sx={{fontSize: "24px"}}>{props.score}</Typography>
        </Box>
    )

}

export default TeamScore;