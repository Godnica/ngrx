import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { IssuesComponent } from './components/issues/issues.component';


@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent
  ],
  imports: [
    StoreModule.forRoot(reducers),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
