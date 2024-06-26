const mongoose = require('mongoose');

// Define the sub-schema for the 'stats' object
const statsSchema = new mongoose.Schema({
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
const explainSchema = new mongoose.Schema({
    fixture: Number,
    stats: [{
        identifier: String,
        points: Number,
        value: Number
    }]
});

// Define the sub-schema for the 'gw_stats' array
const gwStatsSchema = new mongoose.Schema({
    id: Number,
    stats: statsSchema,
    explain: [explainSchema]
});

const playerSchema = mongoose.Schema({
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

const Players = mongoose.model("players", playerSchema);
module.exports = Players;
