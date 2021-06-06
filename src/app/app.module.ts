import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";

import { AuthInterceptor } from "./_helpers/auth.interceptor";
import { AuthGuard } from './_helpers/AuthGuard';
import { ErrorInterceptor } from './_helpers/error.interceptor';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { MaterialModule } from './_material/material.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot((routes)),
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedComponentsModule,
    AuthModule,
    TasksModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
