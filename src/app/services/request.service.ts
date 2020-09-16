import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
private urlBase: string;
  constructor(protected http: HttpClient) {
    this.urlBase =  `${window.location.protocol}//${environment.apiPath}:${environment.port}/api/`;
  }
  private  getBaseUrl(path: string): string{
    return this.urlBase + `${path}`;
  }
  login(path: string, boddy: any): Observable<any> {
    return this.http.post(this.getBaseUrl(path), boddy, { observe: 'response'});
  }
  register(path: string, boddy: any): Observable<any> {
    return this.http.post(this.getBaseUrl(path), boddy, {observe: 'response'});
  }
}
