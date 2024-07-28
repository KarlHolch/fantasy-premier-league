import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fantasy } from '../models/fantasy.model';
import { LeagueData } from '../models/league.model';
import { Player } from '../models/player.model';

const baseUrl = 'http://localhost:8189/api/fantasy/players';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  getPlayersById(ids: number[]): Observable<Player[]> {
    return this.http.post<Player[]>(`${baseUrl}/`, {ids});
  }

}