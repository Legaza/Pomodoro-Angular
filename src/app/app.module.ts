import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PomodoroModule } from './pomodoro/pomodoro.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PomodoroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
