import { Injectable, Inject }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class AuthService {

  private API_ROOT:string = 'http://localhost:3001/api';

  constructor (@Inject(Http) private http: Http) {
    this.http = http;
  }

  requestLogin(path, options){
    console.log('AuthService.requestLogin', path, options);
    return this.http.post(this.API_ROOT + path, options)
                    .map(res => res.json());
  }

  requestLogout(path, options){
    console.log('AuthService.requestLogout', path, options);
    return this.http.post(this.API_ROOT + path, options)
                    .map(res => res.json());
  }

  /*private extractData(res: Response) {
    console.log('extractData');
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    console.log('handleError');
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }*/
}
