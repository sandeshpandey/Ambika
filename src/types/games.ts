export interface Game {
  id: string;
  image: string;
  popularity: number;
  region: string;
  playerCount: number;
}

export interface GamesState {
  games: Game[];
  favorites: string[];
  loading: boolean;
  error: string | null;
}

