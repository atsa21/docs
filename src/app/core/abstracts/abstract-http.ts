import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject } from '@angular/core';
import { Params } from '@angular/router';
import { ELocalStoragesKeys } from '@core/enums';
import { LocalStorageService } from '@core/services';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

export class AbstractHttp {
  protected http = inject(HttpClient);
  protected cookieService = inject(CookieService);
  protected localStorageService = inject(LocalStorageService);

  public httpPostRequest<T, U>(
    url: string,
    body: T,
    params: Params = {},
  ): Observable<U> {
    const headers = this.getHttpHeaders();

    return this.http.post<U>(url, body, {
      headers,
      params,
    }) as unknown as Observable<U>;
  }

  public httpGetRequest<T>(
    url: string,
    params: Params = {},
  ): Observable<T> {
    const headers = this.getHttpHeaders();

    return this.http.get<T>(url, { headers, params });
  }

  public httpDeleteRequest<T>(
    url: string,
    params: Params = {},
  ): Observable<T> {
    const headers = this.getHttpHeaders();

    return this.http.delete<T>(url, { headers, params });
  }

  public httpPatchRequest<T, U = unknown>(
    url: string,
    body: U,
    params: Params = {},
  ): Observable<T> {
    const headers = this.getHttpHeaders();

    return this.http.patch<T>(url, body, {
      headers,
      params,
    });
  }

  public getHttpHeaders(): HttpHeaders {
    return new HttpHeaders()
          .set(
            'Authorization',
            `JWT ${
              this.localStorageService.getItem(
                ELocalStoragesKeys.AccessToken,
              ) || ''
            }`,
          )
          .set('X-CSRFToken', this.getCookie('csrftoken'));
  }

  public getCookie(key: string): string {
    return this.cookieService.get(key);
  }
}
