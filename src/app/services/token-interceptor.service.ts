import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private authService: AuthService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if ( this.authService.getInSession()) {
      const  header = {'Authorization': 'Bearer ' + this.authService.getCurrentUserSession().token};
      req = req.clone({
        setHeaders: header
      });
    }
    return next.handle(req);
  }
}
