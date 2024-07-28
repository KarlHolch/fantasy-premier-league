import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player.model';
import { CommonModule } from '@angular/common';
import { PlayerUtility } from 'src/app/utility/player-utility';

@Component({
  selector: 'app-football-field',
  templateUrl: './football-field.component.html',
  styleUrls: ['./football-field.component.css']
})
export class FootballFieldComponent implements OnInit {
  @Input() public attackers: Player[] = [];
  @Input() public midfielders: Player[] = [];
  @Input() public defenders: Player[] = [];
  @Input() public goalkeeper: Player | null = null;
  @Input() public bench: Player[] = [];
  @Input() public captain: number | null = null;
  @Input() public viceCaptain: number | null = null;

  constructor() {}

  ngOnInit(): void {}

  getRowStyle(totalPlayers: number, top: number, index: number): any {
    const percentage = 100 / (totalPlayers + 1);
    const left = percentage * (index + 1);
    console.log(left);
    return { top: `${top}%`, left: `${left}%` };
  }
}
