import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject } from '@angular/core';
import { Params } from '@angular/router';
import { ELocalStoragesKeys } from '@core/enums';
import { LocalStorageService } from '@core/services';
import { Observable } from 'rxjs';

export class AbstractHttp {
  protected http = inject(HttpClient);
  protected localStorageService = inject(LocalStorageService);

  public httpPostRequest<T, U>(
    url: string,
    body: T,
    requestOptions?: {
      params?: Params;
      noHeaders?: boolean;
    },
  ): Observable<U> {
    const {
      params = {},
      noHeaders = false,
    } = requestOptions || {};

    const headers = this.getHttpHeaders(noHeaders);

    return this.http.post<U>(url, body, {
      headers,
      params,
    }) as unknown as Observable<U>;
  }

  public httpGetRequest<T>(
    url: string,
    params: Params = {},
    noHeaders = false,
    preventCache = false,
  ): Observable<T> {
    let headers = this.getHttpHeaders(noHeaders);

    if (preventCache) {
      headers = headers
        .set('Cache-Control', 'no-cache')
        .set('Pragma', 'no-cache')
        .set('Expires', '0');
    }

    return this.http.get<T>(url, { headers, params });
  }

  public httpDeleteRequest<T>(
    url: string,
    params: Params = {},
  ): Observable<T> {
    const headers = this.getHttpHeaders(false);

    return this.http.delete<T>(url, { headers, params });
  }

  public httpPatchRequest<T, U = unknown>(
    url: string,
    body: U,
    params: Params = {},
  ): Observable<T> {
    const headers = this.getHttpHeaders(false);

    return this.http.patch<T>(url, body, {
      headers,
      params,
    });
  }

  public getHttpHeaders(noHeaders: boolean): HttpHeaders {
    return noHeaders
      ? new HttpHeaders()
      : new HttpHeaders()
          .set(
            'Authorization',
            `Bearer ${
              this.localStorageService.getItem(
                ELocalStoragesKeys.AccessToken,
              ) || ''
            }`,
          );
  }
}
