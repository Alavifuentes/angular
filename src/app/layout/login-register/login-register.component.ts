import { Component, OnInit } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {FormBuilder, FormGroup} from '@angular/forms';
import {RequestService} from '../../services/request.service';
import {error} from 'selenium-webdriver';
import {UserValidate} from '../../models/user';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  loginMessage: string;
  constructor(public bsModalRef: BsModalRef,
              public formBuilder: FormBuilder,
              public requestService: RequestService,
              public authService: AuthService) {
    this.loginMessage = '';
    this.buildLoginForm();
    this.buildRegisterForm();
  }

  ngOnInit(): void {
  }
  buildLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: [null],
      password: [null]
    });
  }
  buildRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      nombre: [null, UserValidate.rules.nombre],
      apellidos: [null, UserValidate.rules.apellidos],
      email: [null, UserValidate.rules.email],
      password: [null, UserValidate.rules.password]
    });
  }
  close(): void{
    this.bsModalRef.hide();
  }
  login(): void {
    this.requestService.login('login', this.loginForm.getRawValue()).subscribe(res => {
      console.log(' login', res.body.data);
      this.loginMessage = '';
      this.close();
      this.authService.setCurrentUserSession(res.body.data);

    }, error => {
      this.loginMessage =  error.error.error;
      console.log(' error', error.error.error);
    });
  }
  registro(): void {
    console.log('register', this.registerForm.valid);
    if (this.registerForm.valid) {
      console.log('register', this.registerForm.getRawValue());
      this.requestService.register('register', this.registerForm.getRawValue()).
      subscribe(res => {
        console.log(' response', res);
      }, error => {
        console.log(' error ', error);
      });
    }
}
}
