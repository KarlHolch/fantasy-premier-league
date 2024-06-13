import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fantasy } from '../models/fantasy.model';
import { LeagueData } from '../models/league.model';

const baseUrl = 'http://localhost:8189/api/fantasy';

@Injectable({
  providedIn: 'root'
})
export class FantasyService {

  constructor(private http: HttpClient) { }

  get(): Observable<Fantasy> {
    return this.http.get<Fantasy>(`${baseUrl}/`);
  }

  getAllTeams(): Observable<string[]> {
    return this.http.get<string[]>(`${baseUrl}/teams`);
  }

  getLeague(): Observable<LeagueData> {
    return this.http.get<LeagueData>(`${baseUrl}/league`);
  }

}