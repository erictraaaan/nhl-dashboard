export interface Score {
    currentDate: string;
    prevDate: string;
    nextDate: string;
    games: Game[];
}

export interface Game { 
    id: number;
    season: number;
    awayTeam: Team;
    homeTeam: Team;
    gameCenterLink: string;
    threeMinRecap: string;
    goals: Goal[];
}

export interface Team {
    id: number;
    score?: number;
    logo: string;
    sog?: number
    name: {
        default: string;
    }
    abbrev: string;
}

export interface Goal { 
    period: number;
    timeInPeriod: string;
    playerId: number;
    firstName: { 
        default: string;
    }
    lastName: {
        default: string;
    }
    assists: [
        {
            playerId: number;
            name: { 
                default: string;
            }
            assistsToDate: number;
        }
    ]
    mugshot: string;
    goalsToDate: number;
    awayScore: number;
    homeScore: number;
    highlightClipSharingUrl: string;
    highlightClip: string;
}