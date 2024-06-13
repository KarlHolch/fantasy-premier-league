export class LeagueEntry {
    id?: number;
    event_total?: number;
    player_name?: string;
    rank?: number;
    last_rank?: number;
    rank_sort?: number;
    total?: number;
    entry?: number;
    entry_name?: string;
 }
  
  export class League {
    id?: number;
    name?: string;
    created?: string; // ISO date string
    closed?: boolean;
    max_entries?: number | null;
    league_type?: string;
    scoring?: string;
    admin_entry?: number;
    start_event?: number;
    code_privacy?: string;
    has_cup?: boolean;
    cup_league?: number;
    rank?: number | null;
  }
  
  export class Standings {
    has_next?: boolean;
    page?: number;
    results?: LeagueEntry[];
  }
  
  export class NewEntries {
    has_next?: boolean;
    page?: number;
    results?: any[]; // Specify the type if results have a defined structure
  }
  
  export class LeagueData {
    _id?: {
      $oid: string;
    };
    new_entries?: NewEntries;
    last_updated_data?: string; // ISO date string
    league?: League;
    standings?: Standings;
  }
  