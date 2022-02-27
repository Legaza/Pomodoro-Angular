import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPomodoroComponent } from './main-pomodoro/main-pomodoro.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPomodoroComponent
  ],
  exports:[
    MainPomodoroComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PomodoroModule { }
