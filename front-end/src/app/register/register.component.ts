import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { strongPasswordValidator } from '../shared/strong-password.validator';
import { RegisterService } from './register-service/register.service';
import { NotificationService } from '../shared/notification-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  registerForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          strongPasswordValidator(),
        ],
      ],
      name: ['', Validators.required],
      isActive: [true],
    });
  }
  register(): void {
    if (this.registerForm.valid) {
      this.registerService.register(this.registerForm.value).subscribe(
        (response: any) => {
          debugger
          if (response?.data?.id) {
            this.router.navigate(['/user-details',response?.data?.id]);
          }
          this.notificationService.showSuccess('User registered successfully');
        },
        (error) => {
          this.notificationService.showError(
            error?.error?.message
          );
        }
      );
    }
  }
}
