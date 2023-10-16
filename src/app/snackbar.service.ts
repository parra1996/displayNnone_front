import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root', // Makes the service a singleton and available globally
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  open({
    message,
    duration = 2000,
    action, 
    error = false
  }:SnackBar) {
    this.snackBar.open(`${message}`, action, {
      duration,
      panelClass: error ?  ['red-snackbar'] : ['green-snackbar']
    });
  }
}

interface SnackBar {
  message?: string,
  action?: string ,
  duration?: number,
  error?: boolean
}