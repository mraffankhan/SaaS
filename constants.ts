import { NewsItem, Team, Tournament } from "./types";

export const APP_NAME = "FireLeague";

export const MOCK_NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'New Evo Gun Skin: Draco Blue Flame Returns',
    excerpt: 'The legendary EVO gun skin makes a return. Find out the stats and how to obtain it in the latest lucky royale.',
    category: 'Update',
    date: 'Oct 24, 2023',
    imageUrl: 'https://picsum.photos/800/400?random=1'
  },
  {
    id: '2',
    title: 'World Series 2024 Qualifiers Announced',
    excerpt: 'Registration opens next week for the regional qualifiers. Gather your squad and prepare for the ultimate showdown.',
    category: 'Esports',
    date: 'Oct 22, 2023',
    imageUrl: 'https://picsum.photos/800/400?random=2'
  },
  {
    id: '3',
    title: 'Anti-Hack Update: Operation Ban Pan',
    excerpt: 'Over 1.5 million accounts banned in the last two weeks. See our new detection methods powered by AI.',
    category: 'Community',
    date: 'Oct 20, 2023',
    imageUrl: 'https://picsum.photos/800/400?random=3'
  }
];

export const MOCK_TOURNAMENTS: Tournament[] = [
  {
    id: '1',
    title: 'Weekly Scrims - Tier 1',
    prizePool: '$500 USD',
    status: 'live',
    date: 'Now',
    registeredTeams: 12,
    maxTeams: 12,
    bannerUrl: 'https://picsum.photos/400/200?random=4',
    bracket: [
      {
        id: 1,
        name: 'Semi-Finals',
        matches: [
          { id: 'm1', teamA: 'Team Elite', teamB: 'Total Gaming', scoreA: 12, scoreB: 15, winner: 'Total Gaming' },
          { id: 'm2', teamA: 'GodLike', teamB: 'Galaxy Racers', scoreA: 8, scoreB: 10, winner: 'Galaxy Racers' }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Community Cup Season 5',
    prizePool: '10,000 Diamonds',
    status: 'upcoming',
    date: 'Nov 01, 2023',
    registeredTeams: 45,
    maxTeams: 64,
    bannerUrl: 'https://picsum.photos/400/200?random=5'
  },
  {
    id: '3',
    title: 'Solo Rush Challenge',
    prizePool: '$100 USD',
    status: 'completed',
    date: 'Oct 15, 2023',
    registeredTeams: 100,
    maxTeams: 100,
    bannerUrl: 'https://picsum.photos/400/200?random=6'
  }
];

export const MOCK_TEAMS: Team[] = [
  {
    id: 't1',
    name: 'Crimson Vipers',
    tag: 'CV',
    logoUrl: 'https://picsum.photos/50/50?random=10',
    captainId: 'u1',
    members: [],
    stats: { wins: 45, matches: 120 }
  },
  {
    id: 't2',
    name: 'Silent Snipers',
    tag: 'SS',
    logoUrl: 'https://picsum.photos/50/50?random=11',
    captainId: 'u2',
    members: [],
    stats: { wins: 20, matches: 55 }
  }
];