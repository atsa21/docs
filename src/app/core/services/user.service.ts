import { Injectable } from '@angular/core';
import { AbstractHttp } from '@core/abstracts/abstract-http';
import { UserModel } from '@core/models';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends AbstractHttp {
  private userSubj: BehaviorSubject<UserModel | null> = new BehaviorSubject<UserModel | null>(null);

  constructor(private localStorage: LocalStorageService) {
    super();
  }

  public getCurrentUser(): Observable<UserModel | null> {
    return this.userSubj.asObservable();
  }

  public getCurrentUserSync(): UserModel | null {
    return this.userSubj.getValue();
  }

  public setCurrentUser(user: UserModel): void {
    this.userSubj.next(user);
  }

  public getUser(): Observable<UserModel> {
    return this.httpGetRequest<UserModel>('api/v1/user', {}, false, true).pipe(
      tap((user) => {
        this.localStorage.setRole(user.role);
        this.setCurrentUser(user);
      }),
    );
  }
}
