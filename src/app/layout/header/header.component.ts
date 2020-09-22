import { Component, OnInit } from '@angular/core';
import {ɵNgNoValidate} from '@angular/forms';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {LoginRegisterComponent} from '../login-register/login-register.component';
import {AuthService} from '../../services/auth.service';
import {RequestService} from '../../services/request.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  modalRef: BsModalRef;
  currentUser: any;
  constructor(private modalService: BsModalService,
              private authService: AuthService,
              private requestService: RequestService,
              private route: Router) { }

  ngOnInit(): void {
    this.authService.getCurrentObserber().subscribe( res => {
      this.currentUser = res;
    });
  }
  action(): void {
    this.modalRef = this.modalService.show(LoginRegisterComponent);
    console.log(' accion');
  }
  logout(): void{
    if (confirm(' Esta seguro de cerrar la sesión ?')) {
    let token ='Bearer '+ this.currentUser.token;
      this.requestService.logout('logout', token).subscribe(res => {
      this.authService.logout();
        this.route.navigate(['/']);
      });
    }
      }
}
