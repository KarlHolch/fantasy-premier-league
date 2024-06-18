const mongoose = require('mongoose');

const chipPlaySchema = new mongoose.Schema({
    chip_name: String,
    num_played: Number
});

const topElementInfoSchema = new mongoose.Schema({
    id: Number,
    points: Number
});

const gameweekSchema = new mongoose.Schema({
    apiId: { type: Number, unique: true, required: true },
    name: String,
    deadline_time: String,
    release_time: Date,
    average_entry_score: Number,
    finished: Boolean,
    data_checked: Boolean,
    highest_scoring_entry: Number,
    deadline_time_epoch: Number,
    deadline_time_game_offset: Number,
    highest_score: Number,
    is_previous: Boolean,
    is_current: Boolean,
    is_next: Boolean,
    cup_leagues_created: Boolean,
    h2h_ko_matches_created: Boolean,
    ranked_count: Number,
    chip_plays: [chipPlaySchema],
    most_selected: Number,
    most_transferred_in: Number,
    top_element: Number,
    top_element_info: topElementInfoSchema,
    transfers_made: Number,
    most_captained: Number,
    most_vice_captained: Number
});

const Gameweek = mongoose.model('gameweeks', gameweekSchema);

module.exports = Gameweek;
