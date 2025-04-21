import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthFormService } from '../../services/auth-form.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AuthService, LocalStorageService, SnackBarService } from '@core/services';
import { take } from 'rxjs';
import { LoginSuccessModel } from '@core/models';
import { EMessageTypes } from '@core/enums';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  public hide = true;

  constructor(
    private authFormService: AuthFormService,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private snackBar: SnackBarService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.authFormService.initLoginForm();
    this.loginForm = this.authFormService.getLoginForm();
  }

  public get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }

  public login(): void {
    this.authService.login(this.loginForm.getRawValue()).pipe(take(1)).subscribe(
      (res: LoginSuccessModel) => {
        this.localStorageService.setAccessToken(res.access_token);
        this.router.navigate(['/']);
      },
      (error) => {
        if (error) {
          this.snackBar.openSnackBar('Invalid email or password', EMessageTypes.Error);
        }
      },
    );
  }
}
