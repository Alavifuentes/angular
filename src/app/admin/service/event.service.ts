import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
public object: EventEmitter<any>;
  constructor() {
    this.object = new EventEmitter<any>();
  }
  public setObject(object: any): void{
    this.object.emit(object);
  }
}
