import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RefreshService {
  public taskListRefresh: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  constructor() {}

  setTaskListRefresh(bool: boolean) {
    this.taskListRefresh.next(bool);
  }
}
