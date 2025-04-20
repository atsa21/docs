import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMessageTypes } from '@core/enums';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(message: string, messageType: EMessageTypes): void {
    this.snackBar.open(message, '', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
      panelClass: [messageType]
    });
  }
}
