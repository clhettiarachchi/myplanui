import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';
import { TaskService } from '../task.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  loading: boolean = false;
  submitted: boolean = false;
  showSuccess: boolean = false;

  title: string = '';
  due_date: any = '';
  description: string = '';

  addTaskForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    due_date: ['', Validators.required],
    description: [''],
  });

  constructor(private taskService: TaskService, private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    // stop here if form is invalid
    if (this.addTaskForm.invalid) {
      return;
    }

    const newTask: Task = {
      title: this.title,
      due_date: moment(this.due_date).format('YYYY-MM-DD  HH:mm:ss'),
      description: this.description,
    };

    this.taskService.addTask(newTask).subscribe((res) => {
      if (res['status'] === true) {
        this.loading = false;
        this.showSuccess = true;
        setTimeout(() => {
          this.showSuccess = false;
        }, 3000);
      }
    });
  }
}
