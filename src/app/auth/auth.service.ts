import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from "@app/_models/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private currentUserSubject: BehaviorSubject<User>;
private currentUser: Observable<User>;

  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') as string));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}login`, {email, password}).pipe(map(data => {
      const user: User = {
        id: data.user.id,
        email: data.user.email,
        name: data.user.name,
        token: data.token
      }
      // store user details and token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
    }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null as any);
  }
}
