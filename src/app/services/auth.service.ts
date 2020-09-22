import { Injectable } from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';
import {BehaviorSubject, Observable} from 'rxjs';
import {isNotNullOrUndefined} from 'codelyzer/util/isNotNullOrUndefined';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public  currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  constructor(public storage: LocalStorageService) {
    this.currentUserSubject = new BehaviorSubject<any>( this.storage.retrieve('curso'));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  setCurrentUserSession(user: any): void{
    this.currentUserSubject.next(user);
    this.storage.store('curso', user);
  }
  getCurrentObserber(): Observable<any> {
    return this.currentUserSubject.asObservable();
  }
  getCurrentUserSession(): any {
    if (this.getInSession()) {
      return this.storage.retrieve('curso');
    } else {
      return false;
    }
  }
  getInSession(): boolean{
    return isNotNullOrUndefined(this.storage.retrieve('curso')) ? true : false;
  }
  logout(): void{
    this.storage.clear();
    this.currentUserSubject.next(null);
  }
}
