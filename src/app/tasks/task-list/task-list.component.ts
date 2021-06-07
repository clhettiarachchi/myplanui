import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../Task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  todayTasks: Task[] = [];
  tomorrowTasks: Task[] = [];
  upcomingTasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.fetch();
  }

  fetch() {
    this.taskService.getTasksToday().subscribe((res) => {
      this.todayTasks = res['data'];
    });

    this.taskService.getTasksTomorrow().subscribe((res) => {
      this.tomorrowTasks = res['data'];
    });

    this.taskService.getTasksAfterTomorrow().subscribe((res) => {
      this.upcomingTasks = res['data'];
    });
  }

  onDeleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe((res) => {
      if (res['status']) {
        console.log(1);
        this.fetch();
        console.log(1);
      }
    });
  }

  onToggleTask(id: number | any, taskType: string) {
    if (taskType === 'today') {
      const task = this.todayTasks.find((task) => task.id === id);
      if (task) {
        task.completed = !task.completed;
      }
    } else if (taskType === 'tomorrow') {
      const task = this.tomorrowTasks.find((task) => task.id === id);
      if (task) {
        task.completed = !task.completed;
      }
    } else if (taskType === 'upcoming') {
      const task = this.upcomingTasks.find((task) => task.id === id);
      if (task) {
        task.completed = !task.completed;
      }
    }

    this.taskService.toggleTask(id).subscribe();
  }
}
