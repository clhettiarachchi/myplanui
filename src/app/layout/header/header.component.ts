import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from "../../_services/ui.service";
import { Router } from "@angular/router";
import { AuthService } from '@app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
showAddTask: boolean = false;
subscription: Subscription;

userName: string = ''

  constructor(private uiService: UiService, private router: Router, private authService: AuthService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {
    this.userName = this.authService.getUserName()
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  // hasRoute(route: string) {
  //   return this.router.url === route;
  // }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
