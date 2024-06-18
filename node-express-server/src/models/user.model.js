const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    apiId: { type: Number, unique: true, required: true },
    playerName: String,
    entryName: String,
    totalPoints: Number,
    eventTotal: Number,
    rank: Number,
    lastRank: Number,
    rankSort: Number,
    entry: Number,
    gameweek_stats: [
        {
            id: Number,
            active_chip: String,
            automatic_subs: Array,
            entry_history: Object,
            picks: Array,
            transfers: Array
        }
    ]
});

module.exports = mongoose.model('User', userSchema);
