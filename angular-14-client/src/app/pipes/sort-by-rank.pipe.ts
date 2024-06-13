import { Pipe, PipeTransform } from '@angular/core';
import { LeagueEntry } from '../models/league.model'; // Import your LeagueEntry class

@Pipe({ name: 'sortByRank' })
export class SortByRankPipe implements PipeTransform {
  transform(results: LeagueEntry[]): LeagueEntry[] {
    return results.sort((a, b) => a.rank!! - b.rank!!);
  }
}
