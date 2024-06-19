import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { UserListComponent } from './components/user-list/user-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GuideComponent } from './components/guide/guide.component';

@NgModule({ declarations: [
        AppComponent,
        OrderByPipe,
        UserListComponent,
        GuideComponent,
    ],
    bootstrap: [AppComponent], 
    imports: [BrowserModule,
        AppRoutingModule,
        MatToolbarModule,
        FormsModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatSortModule,
        MatCardModule,
        MatIconModule,
        MatCardModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
