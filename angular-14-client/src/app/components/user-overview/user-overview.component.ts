import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { GameweekService } from 'src/app/services/gameweek.service';
import { UserService } from 'src/app/services/users.service';
import { UserUtility } from 'src/app/utility/user-utility';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrl: './user-overview.component.css'
})
export class UserOverviewComponent implements OnInit {
  id: string | null = null;
  user: User | null = null;
  gameweek: number | null = null;

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private gameweekService: GameweekService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(Number(this.id)).subscribe(data => {
      this.user = data
    });

    this.gameweekService.getCurrentGameweek().subscribe(data => {
      this.gameweek = data.apiId;
    });
  }

  getGameweekStat(user: User, gameweekNumber: number): number {
    return UserUtility.getPointsByGameweek(user, gameweekNumber);
  }
}
