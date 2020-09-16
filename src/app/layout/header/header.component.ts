import { Component, OnInit } from '@angular/core';
import {ɵNgNoValidate} from '@angular/forms';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {LoginRegisterComponent} from '../login-register/login-register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }
  action(): void {
    this.modalRef = this.modalService.show(LoginRegisterComponent);
    console.log(' accion');
  }
}
