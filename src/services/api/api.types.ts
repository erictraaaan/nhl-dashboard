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