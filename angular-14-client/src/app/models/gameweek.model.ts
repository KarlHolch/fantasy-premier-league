export interface ChipPlay {
    chip_name: string;
    num_played: number;
    _id: string;
  }
  
  export interface TopElementInfo {
    id: number;
    points: number;
    _id: string;
  }
  
  export interface Gameweek {
    _id: string;
    apiId: number;
    average_entry_score: number;
    chip_plays: ChipPlay[];
    cup_leagues_created: boolean;
    data_checked: boolean;
    deadline_time: string;
    deadline_time_epoch: number;
    deadline_time_game_offset: number;
    finished: boolean;
    h2h_ko_matches_created: boolean;
    highest_score: number;
    highest_scoring_entry: number;
    is_current: boolean;
    is_next: boolean;
    is_previous: boolean;
    most_captained: number;
    most_selected: number;
    most_transferred_in: number;
    most_vice_captained: number;
    name: string;
    ranked_count: number;
    release_time: string | null;
    top_element: number;
    top_element_info: TopElementInfo;
    transfers_made: number;
  }