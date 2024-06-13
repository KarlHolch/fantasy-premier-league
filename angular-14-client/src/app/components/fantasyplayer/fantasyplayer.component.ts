import { Component, OnInit } from '@angular/core';
import { LeagueData } from 'src/app/models/league.model';
import { FantasyService } from 'src/app/services/fantasy.service';

  @Component({
    selector: 'app-fantasyplayer',
    templateUrl: './fantasyplayer.component.html',
    styleUrls: ['./fantasyplayer.component.css']
  })
  export class FantasyplayerComponent implements OnInit {
    myString: String = "Hello World!";
    teams: string[] = [];
    league: LeagueData | undefined;
    constructor(private fantasyService: FantasyService) { }

    ngOnInit(): void {
      this.myString = ''; // Initialize myString with an empty string
      this.get();
    }

    get(): void {
      this.fantasyService.get()
      .subscribe({
        next: (data) => {
          this.myString = data.message ? data.message : '';
          console.log(data);
        },
        error: (e) => console.error(e)
      });

      this.fantasyService.getAllTeams()
      .subscribe({
        next: (data) => {
          this.teams = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });

      this.fantasyService.getLeague()
      .subscribe({
        next: (data) => {
          this.league = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
      
    }
  }