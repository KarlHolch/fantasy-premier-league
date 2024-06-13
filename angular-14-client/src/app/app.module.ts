import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FantasyplayerComponent } from './components/fantasyplayer/fantasyplayer.component';
import { SortByRankPipe } from './pipes/sort-by-rank.pipe';
import { RulesComponent } from './components/app-rules/app-rules.component';

@NgModule({
  declarations: [
    AppComponent,
    FantasyplayerComponent,
    RulesComponent,
    SortByRankPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
