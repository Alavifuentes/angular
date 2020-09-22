import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavComponent } from './layout/nav/nav.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginRegisterComponent } from './layout/login-register/login-register.component';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RequestService} from './services/request.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NotFoundComponent } from './layout/not-found/not-found.component';
import {EventService} from './admin/service/event.service';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {AuthService} from './services/auth.service';
import {TokenInterceptorService} from './services/token-interceptor.service';
import {ErrorInterceptor} from './services/error-interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    LoginRegisterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
  ],
  providers: [RequestService, EventService, AuthService, {
    provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true
  },
    {
    provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
