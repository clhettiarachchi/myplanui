import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../Task'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  todayTasks: Task[] = [];
  tomorrowTasks: Task[] = [];
  upcomingTasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.fetch();
  }

  fetch() {
    this.taskService.getTasksToday().subscribe(tasks => {
      this.todayTasks = tasks;
    });

    this.taskService.getTasksTomorrow().subscribe(tasks => {
      this.tomorrowTasks = tasks;
    });

    this.taskService.getTasksAfterTomorrow().subscribe(tasks => {
      this.upcomingTasks = tasks;
    });
  }

  onDeleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(result => {
      if (result) {
        this.fetch();
      }
    })
  }

  onToggleTask(task: Task) {
    this.taskService.toggleTask(task).subscribe(result => {
      if (result) {
        this.fetch();
      }
    })
  }

}
