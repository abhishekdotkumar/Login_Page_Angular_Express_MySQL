import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}
  private snackBarConfig: MatSnackBarConfig = {
    horizontalPosition: 'center',
    verticalPosition: 'top',
    duration: 2000,
  };
  showSuccess(message: string): void {
    this.snackBar.open(message, '', { ...this.snackBarConfig });
  }

  showError(message: string): void {
    this.snackBar.open(message, '', { ...this.snackBarConfig });
  }
}
