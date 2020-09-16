import { Component, OnInit } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  loginForm: FormGroup;
  constructor(public bsModalRef: BsModalRef,
              public formBuilder: FormBuilder) {
    this.buildLoginForm();
  }

  ngOnInit(): void {
  }
  buildLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      email: [null],
      password: [null]
    });
  }
  close(): void{
    this.bsModalRef.hide();
  }
  login(): void {
    console.log(' valores ', this.loginForm.getRawValue());
  }
  registro(): void {
}
}
