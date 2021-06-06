import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss']
})
export class TaskListItemComponent implements OnInit {
  @Input() task: any = '';
  @Input() showDate: boolean = false;
  @Output() deleteTask: EventEmitter<number> = new EventEmitter();
  @Output() toggleTask: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteTask(id: number): void {
    this.deleteTask.emit(id)
  }

  onToggleTask(status: boolean): void {
    this.toggleTask.emit(status);
  }
  
  // Helper functions
  getDateString(date: string): string {
    const d = new Date(date);
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
  }

}
