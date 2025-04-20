import { Injectable } from '@angular/core';
import { AbstractHttp } from '@core/abstracts/abstract-http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends AbstractHttp {
  public getUser(): Observable<any> {
    return this.httpGetRequest('api/v1/user');
  }
}
