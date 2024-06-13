import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FantasyplayerComponent } from './components/fantasyplayer/fantasyplayer.component';
import { RulesComponent } from './components/app-rules/app-rules.component';

const routes: Routes = [
  { path: '', redirectTo: 'fantasy', pathMatch: 'full' },
  { path: 'fantasy', component: FantasyplayerComponent },
  { path: 'rules', component: RulesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }