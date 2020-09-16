import {Validators} from '@angular/forms';
export interface User {
  id?: number;
  nombre?: string;
  apellidos?: string;
  email?: string;
  password?: string;
}
export class UserValidate {
 public  static  rules = {
 ['nombre']: [Validators.required],
 ['apellidos']: [Validators.required],
 ['email']: [Validators.required, Validators.email],
 ['password']: [Validators.required]
   };
 }
