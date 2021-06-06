import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@app/_material/material.module';

import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class AuthModule { }
