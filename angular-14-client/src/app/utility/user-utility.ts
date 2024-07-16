import { User } from "../models/user.model";

export class UserUtility {
    static getPointsByGameweek(user: User, gameweek: number) {
        return user.gameweek_stats.find(stat => stat.id === gameweek)?.entry_history.points ?? 0;
      }
}