import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {ApiResponse} from './api-response';

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
  index(path: string): Observable<HttpResponse<any>> {
    return this.http.get<ApiResponse<any>>(this.getBaseUrl(path), {observe: 'response'});
  }
  create(path: string, boddy: any): Observable<HttpResponse<any>> {
    return this.http.post<ApiResponse<any>>(this.getBaseUrl(path), boddy, {observe: 'response'});
  }
  delete(path: string): Observable<HttpResponse<any>> {
    return this.http.delete<ApiResponse<any>>(this.getBaseUrl(path), {observe: 'response'});
  }
  put(path: string, boddy: any): Observable<HttpResponse<any>> {
    return this.http.put(this.getBaseUrl(path), boddy, { observe: 'response'});
  }
}
