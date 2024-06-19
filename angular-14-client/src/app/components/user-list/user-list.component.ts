import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { UserService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.model';
import { Gameweek } from 'src/app/models/gameweek.model';
import { GameweekService } from 'src/app/services/gameweek.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['rank', 'playerName', 'entryName', 'currentGameweek', 'totalPoints', 'rankChange'];
  dataSource = new MatTableDataSource<User>([]);
  currentGameweek: Gameweek | undefined;
  currentGameweekNumber: number | undefined;
  @ViewChild(MatSort, { static: true }) sort: MatSort | null = null;

  constructor(private userService: UserService, 
    private gameweekService: GameweekService
  ) {}

  ngOnInit(): void {
    this.gameweekService.getCurrentGameweek().subscribe(data => {
      this.currentGameweek = data;
      this.currentGameweekNumber = data.apiId;
    });
    this.userService.getUsers().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
  }

  getGameweekStat(user: User, gameweek: number) {
    return user.gameweek_stats.find(stat => stat.id === gameweek)?.entry_history.points ?? 0;
  }
}
