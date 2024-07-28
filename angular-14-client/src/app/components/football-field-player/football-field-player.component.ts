import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player.model';
import { PlayerUtility } from 'src/app/utility/player-utility';

@Component({
  selector: 'app-football-field-player',
  templateUrl: './football-field-player.component.html',
  styleUrl: './football-field-player.component.css'
})
export class FootballFieldPlayerComponent implements OnInit {
  
  @Input() player!: Player;
  @Input() isCaptain = false;
  @Input() isViceCaptain = false;
  @Input() style: { [key: string]: string } = {};

  ngOnInit(): void {
  }

  getPlayerDisplayName(player: Player): string {
    return PlayerUtility.getPlayerDisplayName(player, this.isCaptain, this.isViceCaptain);
  }

  getImageUrl(player: Player): string {
    return `https://resources.premierleague.com/premierleague/photos/players/40x40/p${player.code}.png`;
  }

  getPlayerPoints(player: Player): number {
    return PlayerUtility.getPlayerPoints(player, this.isCaptain);
  }
}
