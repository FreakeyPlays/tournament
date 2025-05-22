export interface Tournament {
  id?: number;
  title: string;
  date: string;
  type: TournamentType;
  state: TournamentState;
  participants: number[];
}

export enum TournamentType {
  SingleElimination = 'single_elimination',
}

export enum TournamentState {
  Planned = 'planned',
  Ongoing = 'ongoing',
  Finished = 'finished',
}
