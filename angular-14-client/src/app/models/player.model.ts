export interface Stats {
    minutes: number;
    goals_scored: number;
    assists: number;
    clean_sheets: number;
    goals_conceded: number;
    own_goals: number;
    penalties_saved: number;
    penalties_missed: number;
    yellow_cards: number;
    red_cards: number;
    saves: number;
    bonus: number;
    bps: number;
    influence: string;
    creativity: string;
    threat: string;
    ict_index: string;
    starts: number;
    expected_goals: string;
    expected_assists: string;
    expected_goal_involvements: string;
    expected_goals_conceded: string;
    total_points: number;
    in_dreamteam: boolean;
  }
  
  export interface ExplainStats {
    identifier: string;
    points: number;
    value: number;
  }
  
  export interface Explain {
    fixture: number;
    stats: ExplainStats[];
  }
  
  export interface GwStats {
    id: number;
    stats: Stats;
    explain: Explain[];
  }
  
  export interface Player {
    chance_of_playing_next_round: number;
    chance_of_playing_this_round: number;
    code: number;
    cost_change_event: number;
    cost_change_event_fall: number;
    cost_change_start: number;
    cost_change_start_fall: number;
    dreamteam_count: number;
    element_type: number;
    ep_next: string;
    ep_this: string;
    event_points: number;
    first_name: string;
    form: string;
    apiId: number; // Renamed from 'id' to 'apiId'
    in_dreamteam: boolean;
    news: string;
    news_added: Date;
    now_cost: number;
    photo: string;
    points_per_game: string;
    second_name: string;
    selected_by_percent: string;
    special: boolean;
    squad_number: number;
    status: string;
    team: number;
    team_code: number;
    total_points: number;
    transfers_in: number;
    transfers_in_event: number;
    transfers_out: number;
    transfers_out_event: number;
    value_form: string;
    value_season: string;
    web_name: string;
    minutes: number;
    goals_scored: number;
    assists: number;
    clean_sheets: number;
    goals_conceded: number;
    own_goals: number;
    penalties_saved: number;
    penalties_missed: number;
    yellow_cards: number;
    red_cards: number;
    saves: number;
    bonus: number;
    bps: number;
    influence: string;
    creativity: string;
    threat: string;
    ict_index: string;
    starts: number;
    expected_goals: string;
    expected_assists: string;
    expected_goal_involvements: string;
    expected_goals_conceded: string;
    influence_rank: number;
    influence_rank_type: number;
    creativity_rank: number;
    creativity_rank_type: number;
    threat_rank: number;
    threat_rank_type: number;
    ict_index_rank: number;
    ict_index_rank_type: number;
    corners_and_indirect_freekicks_order: number;
    corners_and_indirect_freekicks_text: string;
    direct_freekicks_order: number;
    direct_freekicks_text: string;
    penalties_order: number;
    penalties_text: string;
    expected_goals_per_90: number;
    saves_per_90: number;
    expected_assists_per_90: number;
    expected_goal_involvements_per_90: number;
    expected_goals_conceded_per_90: number;
    goals_conceded_per_90: number;
    now_cost_rank: number;
    now_cost_rank_type: number;
    form_rank: number;
    form_rank_type: number;
    points_per_game_rank: number;
    points_per_game_rank_type: number;
    selected_rank: number;
    selected_rank_type: number;
    starts_per_90: number;
    clean_sheets_per_90: number;
    gw_stats: GwStats[]; // Include the 'gw_stats' array with the defined sub-schema
  }
  