import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractHttp } from '@core/abstracts/abstract-http';
import { LoginModel, LoginSuccessModel } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends AbstractHttp {
  public login(payload: LoginModel): Observable<LoginSuccessModel> {
    return this.httpPostRequest('api/v1/auth/login', payload, { noHeaders: true });
  }
}
