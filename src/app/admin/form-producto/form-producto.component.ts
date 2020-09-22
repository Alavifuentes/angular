import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Categoria} from '../../models/categoria';
import {ProductValidate} from '../../models/product';
import {RequestService} from '../../services/request.service';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {EventService} from '../service/event.service';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.scss']
})
export class FormProductoComponent implements OnInit {
modelForm: FormGroup;
categorias: Array<Categoria> = [];
  constructor(public formBuild: FormBuilder,
              public bsModalRef: BsModalRef,
              public requestService: RequestService,
              public eventService: EventService) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.requestService.index('categorias').subscribe( res => {
      console.log(' categorias ', res.body.data);
      this.categorias = res.body.data;
    });
  }
  buildForm(): void{
    this.modelForm = this.formBuild.group({
      nombre: [null, ProductValidate.rules.nombre],
      precio: [ null, ProductValidate.rules.precio],
      descripcion: [null, ProductValidate.rules.descripcion],
      categoria_id: [null, ProductValidate.rules.categoria_id],
      user_id: [7, ProductValidate.rules.user_id]
    });
  }
  submint(): void{
console.log(' forms prod', this.modelForm.getRawValue());
if ( this.modelForm.valid) {
  this.requestService.create('productos', this.modelForm.getRawValue()).subscribe( res => {
    console.log(' create product', res.body.data);
    this.eventService.setObject(res.body.data);
    this.close();
  });
}
  }
  close(): void{
    this.bsModalRef.hide();
  }
}
