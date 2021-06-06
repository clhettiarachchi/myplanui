import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading:boolean = false;
  submitted:boolean = false;
  returnUrl: string = '';
  error:string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
    ) { 
      // redirect to dashboard if already logged in
      if (this.authService.currentUserValue()) {
        this.router.navigate(['/']);
      }
    }

  ngOnInit() {
   this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
   })

   // get return url from route parameters or default to '/'
   this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading= true;

    const email: string = this.loginForm.controls.email.value;
    const password: string = this.loginForm.controls.password.value;

    this.authService.login(email, password).pipe(first()).subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.error = error;
        this.loading = false;
      }
    );
  }

}
