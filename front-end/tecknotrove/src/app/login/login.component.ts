import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { strongPasswordValidator } from '../shared/strong-password.validator';
import { LoginService } from './login-service/login.service';
import { NotificationService } from '../shared/notification-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private notificationService: NotificationService,
    private router: Router
  ) {}
  loginForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          strongPasswordValidator(),
        ],
      ],
    });
  }
  login(): void {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe(
        (response: any) => {
          localStorage.setItem('userId', response?.id);
          this.notificationService.showSuccess('Logged in successfully');
          this.router.navigate(['/user-details', response?.id]);
        },
        (error) => {
          if (error?.error?.message == 'User not found. Please register') {
            this.router.navigate(['/register']);
            this.notificationService.showError(error?.error?.message);
          } else {
            this.notificationService.showError(error?.error?.message);
          }
        }
      );
    }
  }
}
