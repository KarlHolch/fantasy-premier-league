import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Player } from 'src/app/models/player.model';
import { GameweekService } from 'src/app/services/gameweek.service';
import { UserService } from 'src/app/services/users.service';
import { UserUtility } from 'src/app/utility/user-utility';
import { PlayerService } from 'src/app/services/player.service';
import { map } from 'rxjs';
import { PlayerUtility } from 'src/app/utility/player-utility';
import { PlayerPosition } from 'src/app/utility/PlayerPosition';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrl: './user-overview.component.css'
})
export class UserOverviewComponent implements OnInit {
  id: string | null = null;
  user: User | null = null;
  gameweek: number | null = null;
  transferredIn: Player[] = [];
  transferredOut: Player[] = [];
  goalkeeper: Player | null = null;
  defenders: Player[] = [];
  midfielders: Player[] = [];
  attackers: Player[] = [];
  bench: Player[] = [];
  captain: number | null = null;
  viceCaptain: number | null = null

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private gameweekService: GameweekService,
              private playerService: PlayerService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(Number(this.id)).subscribe(data => {
      this.user = data
      this.gameweekService.getCurrentGameweek().subscribe(data => {
        this.gameweek = data.apiId
        const playerIds: number[] = this.getCombinedElementsFromUser(this.user!!);
        this.playerService.getPlayersById(playerIds).subscribe(players => {
          this.mapPlayers(players);
        });
      });
    });
  }

  getGameweekStat(user: User, gameweekNumber: number): number {
    return UserUtility.getPointsByGameweek(user, gameweekNumber);
  }

  getCombinedElementsFromUser(user: User): number[] {
    return user.gameweek_stats.filter(gameweek => gameweek.id === this.gameweek).reduce((acc, gameweek) => {
      gameweek.transfers.forEach(transfer => {
        acc.push(transfer.element_in, transfer.element_out);
      });
      gameweek.picks.forEach(pick => {
        acc.push(pick.element);
        if (pick.is_captain) {
          this.captain = pick.element;
        }
        if (pick.is_vice_captain) {
          this.viceCaptain = pick.element;
        }
      });
      return acc;
    }, [] as number[]);
  }
  mapPlayers(players: Player[]): void {
    const picks: Player[] = []
    this.user!!.gameweek_stats.filter(gameweek => gameweek.id === this.gameweek).forEach(gameweek => {
      gameweek.transfers.forEach(transfer => {
        const playerIn = players.find(player => player.apiId === transfer.element_in);
        if (playerIn) {
          this.transferredIn.push(playerIn);
        }
        const playerOut = players.find(player => player.apiId === transfer.element_out);
        if (playerOut) {
          this.transferredOut.push(playerOut);
        }
      });
      gameweek.picks.forEach(pick => {
        const pickedPlayer = players.find(player => player.apiId === pick.element);
        if (pickedPlayer) {
          if (pick.position > 11) {
            this.bench.push(pickedPlayer);
          } else {
            picks.push(pickedPlayer);
          }
        }
      });
    });
    this.mapPicks(picks);
  }

  mapPicks(players: Player[]): void {
    players.forEach(player => {
      switch (PlayerUtility.getPositionAsString(player.element_type)) {
        case PlayerPosition.GOALKEEPER:
          this.goalkeeper = player;
          break;
        case PlayerPosition.DEFENDER:
            this.defenders.push(player);
          break;
        case PlayerPosition.MIDFIELDER:
            this.midfielders.push(player);
          break;
        case PlayerPosition.ATTACKER:
            this.attackers.push(player);
          break;
          case PlayerPosition.UNKNOWN:
            break;
      };
    });
  }

  getPlayerDisplayName(player: Player): string {
    const displayName = `${player.first_name} ${player.second_name}`;
    if (player.apiId === this.captain) {
      return `${displayName} (C)`;
    } else if (player.apiId === this.viceCaptain) {
      return `${displayName} (VC)`;
    } else {
      return displayName;
    }
  }
}
