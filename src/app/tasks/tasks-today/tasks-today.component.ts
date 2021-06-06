import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../Task'

@Component({
  selector: 'app-tasks-today',
  templateUrl: './tasks-today.component.html',
  styleUrls: ['./tasks-today.component.scss']
})
export class TasksTodayComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.fetch();
  }

  fetch() {
    this.taskService.getTasksToday().subscribe(tasks => {
      this.tasks = tasks;
      console.log(this.tasks);
    });
  }

}
