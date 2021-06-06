import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTaskComponent } from "./add-task/add-task.component";
import { TaskListItemComponent } from './task-list-item/task-list-item.component';
import { TasksTodayComponent } from './tasks-today/tasks-today.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list/task-list.component';
import { MaterialModule } from '@app/_material/material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [
    AddTaskComponent,
    TaskListItemComponent,
    TasksTodayComponent,
    TaskListComponent
  ],
  exports: [
    AddTaskComponent,
    TaskListItemComponent,
    TasksTodayComponent,
    TaskListComponent,
  ]
})
export class TasksModule { }
