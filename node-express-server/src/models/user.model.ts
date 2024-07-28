import mongoose, { Document, Schema, Model } from 'mongoose';

// Define the interface for the gameweek stats
interface IGameweekStats {
    id: number;
    active_chip: string;
    automatic_subs: any[];
    entry_history: Record<string, any>;
    picks: any[];
    transfers: any[];
}

// Define the interface for the user schema
interface IUser extends Document {
    apiId: number;
    playerName: string;
    entryName: string;
    totalPoints: number;
    eventTotal: number;
    rank: number;
    lastRank: number;
    rankSort: number;
    entry: number;
    gameweek_stats: IGameweekStats[];
}

// Define the schema for gameweek stats
const gameweekStatsSchema: Schema = new Schema({
    id: Number,
    active_chip: String,
    automatic_subs: [Schema.Types.Mixed],
    entry_history: Schema.Types.Mixed,
    picks: [Schema.Types.Mixed],
    transfers: [Schema.Types.Mixed]
});

// Define the main user schema
const userSchema: Schema = new Schema({
    apiId: { type: Number, unique: true, required: true },
    playerName: String,
    entryName: String,
    totalPoints: Number,
    eventTotal: Number,
    rank: Number,
    lastRank: Number,
    rankSort: Number,
    entry: Number,
    gameweek_stats: [gameweekStatsSchema]
});

// Create the model for the user schema
const User: Model<IUser> = mongoose.model<IUser>('users', userSchema);

export default User;
