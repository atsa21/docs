import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EControlNames } from '@core/enums/e-control-names.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthFormService {
  private loginForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  public getLoginForm(): FormGroup {
    return this.loginForm;
  }

  public initLoginForm(): void {
    this.loginForm = this.fb.group({
      [EControlNames.Email]: [null, [Validators.required, Validators.email]],
      [EControlNames.Password]: [null, Validators.required],
    });
  }
}
