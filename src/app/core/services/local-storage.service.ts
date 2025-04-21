import { Injectable } from '@angular/core';
import { ELocalStoragesKeys } from '@core/enums';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public setAccessToken(value: string): void {
    localStorage.setItem(ELocalStoragesKeys.AccessToken, value);
  }

  public setRole(value: string): void {
    localStorage.setItem(ELocalStoragesKeys.Role, value);
  }

  public clear(): void {
    localStorage.clear();
  }

  public getItem(key: ELocalStoragesKeys): string | null {
    return localStorage.getItem(key);
  }

  public setItem(key: ELocalStoragesKeys, value: string): void {
    localStorage.setItem(key, value);
  }
}
