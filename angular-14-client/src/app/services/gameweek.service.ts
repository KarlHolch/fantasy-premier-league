import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL } from '../utility/constans';
import { Gameweek } from '../models/gameweek.model';

@Injectable({
  providedIn: 'root'
})
export class GameweekService {
  private apiUrl = `${BASE_URL}/fantasy/gameweek`; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getCurrentGameweek(): Observable<Gameweek> {
    return this.http.get<Gameweek>(`${this.apiUrl}/current`);
  }

  getGameweekById(id: number): Observable<Gameweek> {
    return this.http.get<Gameweek>(`${this.apiUrl}/${id}`);
  }
}
