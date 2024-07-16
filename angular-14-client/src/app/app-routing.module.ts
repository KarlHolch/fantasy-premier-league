import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { GuideComponent } from './components/guide/guide.component';
import { UserOverviewComponent } from './components/user-overview/user-overview.component';

const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'user-list', component: UserListComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'user-overview/:id', component: UserOverviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }