import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ProductosComponent } from './productos/productos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { FormProductoComponent } from './form-producto/form-producto.component';
import { FormCategoriaComponent } from './form-categoria/form-categoria.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxSelectModule, INgxSelectOptions} from 'ngx-select-ex';
import { MessagesComponent } from './messages/messages.component';
import {TranslateModule} from '@ngx-translate/core';
const CustomSelectOptions: INgxSelectOptions = { // Check the interface for more options
  optionValueField: 'id',
  optionTextField: 'nombre'
};

@NgModule({
  declarations: [HomeAdminComponent, ProductosComponent, CategoriasComponent, FormProductoComponent, FormCategoriaComponent, MessagesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    NgxSelectModule.forRoot(CustomSelectOptions),
  ]
})
export class AdminModule { }
