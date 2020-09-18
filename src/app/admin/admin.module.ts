import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ProductosComponent } from './productos/productos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { FormProductoComponent } from './form-producto/form-producto.component';
import { FormCategoriaComponent } from './form-categoria/form-categoria.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [HomeAdminComponent, ProductosComponent, CategoriasComponent, FormProductoComponent, FormCategoriaComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
