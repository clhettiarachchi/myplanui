import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './Task';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any> {
    return this.http.get(this.apiUrl + 'tasks');
  }

  getTasksToday(): Observable<any> {
    return this.http.get(this.apiUrl + 'tasks/today');
  }

  getTasksTomorrow(): Observable<any> {
    return this.http.get(this.apiUrl + 'tasks/tomorrow');
  }

  getTasksAfterTomorrow(): Observable<any> {
    return this.http.get(this.apiUrl + 'tasks/after-tomorrow');
  }

  deleteTask(task: Task): Observable<any> {
    return this.http.delete(this.apiUrl + 'tasks/' + task.id);
  }

  addTask(task: Task): Observable<any> {
    return this.http.post(this.apiUrl + 'tasks', task);
  }

  toggleTask(id: number): Observable<any> {
    return this.http.put<any>(this.apiUrl + 'tasks/toggle/' + id, '');
  }
}
