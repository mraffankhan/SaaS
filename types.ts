export interface User {
  id: string;
  username: string;
  avatarUrl: string; // From Discord
  discordId: string;
  role: 'admin' | 'player' | 'organizer';
}

export interface Team {
  id: string;
  name: string;
  tag: string; // e.g., "TSM"
  logoUrl: string;
  captainId: string;
  members: User[];
  stats: {
    wins: number;
    matches: number;
  };
}

export interface MatchStats {
  kills: number;
  damage: number;
  placement: number;
  revives: number;
  map: 'Bermuda' | 'Purgatory' | 'Kalahari' | 'Alpine' | 'Nexterra';
  duration: string;
}

export interface Tournament {
  id: string;
  title: string;
  prizePool: string;
  status: 'upcoming' | 'live' | 'completed';
  date: string;
  registeredTeams: number;
  maxTeams: number;
  bannerUrl: string;
  bracket?: BracketRound[];
}

export interface BracketRound {
  id: number;
  name: string; // "Quarter Finals"
  matches: BracketMatch[];
}

export interface BracketMatch {
  id: string;
  teamA: string;
  teamB: string;
  scoreA: number;
  scoreB: number;
  winner?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  category: 'Update' | 'Esports' | 'Community';
}

export type ViewState = 'home' | 'tournaments' | 'teams' | 'profile';