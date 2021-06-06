import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable} from "rxjs";
import { Task } from './Task';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getTasks(): Observable<any> {
    return this.http.get(this.apiUrl + 'tasks');
  }

  getTasksToday(): Observable<any>{
    return this.http.get(this.apiUrl + 'tasks/today');
  }

  getTasksTomorrow(): Observable<any>{
    return this.http.get(this.apiUrl + 'tasks/tomorrow');
  }

  getTasksAfterTomorrow(): Observable<any>{
    return this.http.get(this.apiUrl + 'tasks/after-tomorrow');
  }

  deleteTask(task: Task): Observable<Task> {
    return this.http.delete<Task>(this.apiUrl + 'tasks/' + task.id);
  }

  // updateTaskReminder(task: Task): Observable<Task> {
  //   const url = `${this.apiUrl}/${task.id}`;
  //   //return this.http.put<Task>(url, task, httpOptions);
  // }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl + 'tasks', task);
  }

  toggleTask(task: Task): Observable<Task> {
    const isCompleted = !task.completed ? 1 : 0;
    return this.http.put<Task>(this.apiUrl + 'tasks/' + task.id, { completed: isCompleted });
  }
}
