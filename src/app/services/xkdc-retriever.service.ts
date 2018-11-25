import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { XkdcComic } from '../models/xkdc-comic';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class XkdcRetrieverService {
  constructor(private httpClient: HttpClient) { }

  get(comicNumber: string | undefined): Observable<XkdcComic> {
    console.log(comicNumber);
    const url = `http://dynamic.xkcd.com/api-0/jsonp/comic/${comicNumber}`;

    return this.httpClient.jsonp(url, 'callback')
      .pipe(catchError(error => this.handleError(error)));
  }

  handleError(error: any): Promise<any> {
    console.error(error);
    return Promise.reject(error.message || error);
  }

}
