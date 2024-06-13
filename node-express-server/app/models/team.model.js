module.exports = mongoose => {
    var teamSchema = mongoose.Schema({
        apiId: { type: Number, unique: true, required: true }, // Field to store the API 'id'
        name: String,
        code: Number,
        draw: Number,
        form: String,
        loss: Number,
        played: Number,
        points: Number,
        position: Number,
        short_name: String,
        strength: Number,
        team_division: Number,
        unavailable: Boolean,
        win: Number,
        strength_overall_home: Number,
        strength_overall_away: Number,
        strength_attack_home: Number,
        strength_attack_away: Number,
        strength_defence_home: Number,
        strength_defence_away: Number,
        pulse_id: Number
    });
    const Teams = mongoose.model("teams", teamSchema);
    return Teams;
}