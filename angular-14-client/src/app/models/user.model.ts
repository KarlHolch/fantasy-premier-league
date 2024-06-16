export interface EntryHistory {
    event: number;
    points: number;
    total_points: number;
    rank: number;
    rank_sort: number;
    overall_rank: number;
    percentile_rank: number;
    bank: number;
    value: number;
    event_transfers: number;
    event_transfers_cost: number;
    points_on_bench: number;
  }
  
  export interface Pick {
    element: number;
    position: number;
    multiplier: number;
    is_captain: boolean;
    is_vice_captain: boolean;
  }
  
  export interface Transfer {
    element_in: number;
    element_in_cost: number;
    element_out: number;
    element_out_cost: number;
    entry: number;
    event: number;
    time: string;
  }
  
  export interface AutomaticSub {
    entry: number;
    element_in: number;
    element_out: number;
    event: number;
  }
  
  export interface GameweekStat {
    id: number;
    active_chip: string | null;
    automatic_subs: AutomaticSub[];
    entry_history: EntryHistory;
    picks: Pick[];
    transfers: Transfer[];
    _id: string;
  }
  
  export interface User {
    _id: string;
    apiId: number;
    playerName: string;
    entryName: string;
    totalPoints: number;
    eventTotal: number;
    rank: number;
    lastRank: number;
    rankSort: number;
    entry: number;
    gameweek_stats: GameweekStat[];
  }
  