import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  open({ message, duration = 3000, action = 'close', error = false }: SnackBar) {
    this.snackBar.open(`${message}`, action, {
      duration,
      panelClass: ['prueba'],
    });
  }
}

interface SnackBar {
  message?: string;
  action?: string;
  duration?: number;
  error?: boolean;
}
