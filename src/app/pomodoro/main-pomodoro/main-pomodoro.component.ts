import { Component } from '@angular/core';

interface Task{
  id:string,
  title:string,
  completed:boolean
}

@Component({
  selector: 'app-main-pomodoro',
  templateUrl: './main-pomodoro.component.html',
  styleUrls: ['./main-pomodoro.component.css']
})



export class MainPomodoroComponent  {

  task:Task[]=[];

  newTask:Task = {
    id: '',
    title:'',
    completed:false
  }

  createTask() {

    if(this.newTask.title.trim().length === 0){return};
    this.newTask.id = (Math.random()*100).toString(36).slice(3);
    console.log(this.newTask);
    this.task.unshift(this.newTask);
    this.newTask={
      id: '',
      title:'',
      completed:false
    } 
  }

}
