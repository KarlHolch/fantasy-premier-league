import { Component, Input } from '@angular/core';
import { Player } from 'src/app/models/player.model';
import { CommonModule } from '@angular/common';
import { PlayerUtility } from 'src/app/utility/player-utility';

@Component({
  selector: 'app-football-field-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './football-field-player.component.html',
  styleUrl: './football-field-player.component.css'
})
export class FootballFieldPlayerComponent {
  @Input() player!: Player;
  @Input() isCaptain = false;
  @Input() isViceCaptain = false;
  @Input() style: { [key: string]: string } = {};

  getPlayerDisplayName(player: Player): string {
    return PlayerUtility.getPlayerDisplayName(player, this.isCaptain, this.isViceCaptain);
  }

  getImageUrl(player: Player): string {
    return `https://resources.premierleague.com/premierleague/photos/players/40x40/p${player.code}.png`;
  }
}
