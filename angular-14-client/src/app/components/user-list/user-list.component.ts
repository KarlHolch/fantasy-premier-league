import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { UserService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.model';
import { Gameweek } from 'src/app/models/gameweek.model';
import { GameweekService } from 'src/app/services/gameweek.service';
import { Router } from '@angular/router';
import { UserUtility } from 'src/app/utility/user-utility';

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
    private gameweekService: GameweekService,
    private router: Router
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

  onRowClick(row: User) {
    this.router.navigate(['/user-overview', row.apiId]);
  }

  getGameweekStat(user: User, gameweekNumber: number): number {
    return UserUtility.getPointsByGameweek(user, gameweekNumber);
  }
}
