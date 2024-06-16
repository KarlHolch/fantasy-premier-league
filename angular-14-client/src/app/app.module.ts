import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { RulesComponent } from './components/app-rules/app-rules.component';
import { OverviewComponent } from './components/overview/overview.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({ declarations: [
        AppComponent,
        RulesComponent,
        OrderByPipe,
        OverviewComponent,
        UserListComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatSortModule,
        MatIconModule,
        MatCardModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
