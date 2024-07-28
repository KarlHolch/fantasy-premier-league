import { Player } from "../models/player.model";
import { PlayerPosition } from "./PlayerPosition";

export class PlayerUtility {
    static getPositionAsString(position: number): PlayerPosition {
        switch (position) {
            case 1:
                return PlayerPosition.GOALKEEPER;
            case 2:
                return PlayerPosition.DEFENDER;
            case 3:
                return PlayerPosition.MIDFIELDER;
            case 4:
                return PlayerPosition.ATTACKER;
            default:
                return PlayerPosition.UNKNOWN;
        }
    }

    static getPlayerDisplayName(player: Player, captain: boolean, viceCaptain: boolean): string {
        const displayName = `${player.first_name} ${player.second_name}`;
        if (captain) {
          return `${displayName} (C)`;
        } else if (viceCaptain) {
          return `${displayName} (VC)`;
        } else {
          return displayName;
        }
      }
}