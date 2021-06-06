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
    this.taskService.getTasksToday().subscribe(res => {
      this.todayTasks = res['data'];
    });

    this.taskService.getTasksTomorrow().subscribe(res => {
      this.tomorrowTasks = res['data'];
    });

    this.taskService.getTasksAfterTomorrow().subscribe(res => {
      this.upcomingTasks = res['data'];
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
