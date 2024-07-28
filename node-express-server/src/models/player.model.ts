import mongoose, { Document, Schema, Model } from 'mongoose';

// Define the sub-schema for the 'stats' object
interface IStats extends Document {
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

const statsSchema: Schema = new Schema({
    minutes: Number,
    goals_scored: Number,
    assists: Number,
    clean_sheets: Number,
    goals_conceded: Number,
    own_goals: Number,
    penalties_saved: Number,
    penalties_missed: Number,
    yellow_cards: Number,
    red_cards: Number,
    saves: Number,
    bonus: Number,
    bps: Number,
    influence: String,
    creativity: String,
    threat: String,
    ict_index: String,
    starts: Number,
    expected_goals: String,
    expected_assists: String,
    expected_goal_involvements: String,
    expected_goals_conceded: String,
    total_points: Number,
    in_dreamteam: Boolean
});

// Define the sub-schema for the 'explain' array
interface IExplainStats extends Document {
    identifier: string;
    points: number;
    value: number;
}

const explainStatsSchema: Schema = new Schema({
    identifier: String,
    points: Number,
    value: Number
});

interface IExplain extends Document {
    fixture: number;
    stats: IExplainStats[];
}

const explainSchema: Schema = new Schema({
    fixture: Number,
    stats: [explainStatsSchema]
});

// Define the sub-schema for the 'gw_stats' array
interface IGwStats extends Document {
    id: number;
    stats: IStats;
    explain: IExplain[];
}

const gwStatsSchema: Schema = new Schema({
    id: Number,
    stats: statsSchema,
    explain: [explainSchema]
});

// Define the main player schema
interface IPlayer extends Document {
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
    apiId: number;
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
    gw_stats: IGwStats[];
}

const playerSchema: Schema = new Schema({
    chance_of_playing_next_round: Number,
    chance_of_playing_this_round: Number,
    code: { type: Number, unique: true, required: true },
    cost_change_event: Number,
    cost_change_event_fall: Number,
    cost_change_start: Number,
    cost_change_start_fall: Number,
    dreamteam_count: Number,
    element_type: Number,
    ep_next: String,
    ep_this: String,
    event_points: Number,
    first_name: String,
    form: String,
    apiId: { type: Number, unique: true, required: true }, // Renamed from 'id' to 'apiId'
    in_dreamteam: Boolean,
    news: String,
    news_added: Date,
    now_cost: Number,
    photo: String,
    points_per_game: String,
    second_name: String,
    selected_by_percent: String,
    special: Boolean,
    squad_number: Number,
    status: String,
    team: Number,
    team_code: Number,
    total_points: Number,
    transfers_in: Number,
    transfers_in_event: Number,
    transfers_out: Number,
    transfers_out_event: Number,
    value_form: String,
    value_season: String,
    web_name: String,
    minutes: Number,
    goals_scored: Number,
    assists: Number,
    clean_sheets: Number,
    goals_conceded: Number,
    own_goals: Number,
    penalties_saved: Number,
    penalties_missed: Number,
    yellow_cards: Number,
    red_cards: Number,
    saves: Number,
    bonus: Number,
    bps: Number,
    influence: String,
    creativity: String,
    threat: String,
    ict_index: String,
    starts: Number,
    expected_goals: String,
    expected_assists: String,
    expected_goal_involvements: String,
    expected_goals_conceded: String,
    influence_rank: Number,
    influence_rank_type: Number,
    creativity_rank: Number,
    creativity_rank_type: Number,
    threat_rank: Number,
    threat_rank_type: Number,
    ict_index_rank: Number,
    ict_index_rank_type: Number,
    corners_and_indirect_freekicks_order: Number,
    corners_and_indirect_freekicks_text: String,
    direct_freekicks_order: Number,
    direct_freekicks_text: String,
    penalties_order: Number,
    penalties_text: String,
    expected_goals_per_90: Number,
    saves_per_90: Number,
    expected_assists_per_90: Number,
    expected_goal_involvements_per_90: Number,
    expected_goals_conceded_per_90: Number,
    goals_conceded_per_90: Number,
    now_cost_rank: Number,
    now_cost_rank_type: Number,
    form_rank: Number,
    form_rank_type: Number,
    points_per_game_rank: Number,
    points_per_game_rank_type: Number,
    selected_rank: Number,
    selected_rank_type: Number,
    starts_per_90: Number,
    clean_sheets_per_90: Number,
    gw_stats: [gwStatsSchema] // Include the 'gw_stats' array with the defined sub-schema
});

const Players: Model<IPlayer> = mongoose.model<IPlayer>("players", playerSchema);
export default Players;
