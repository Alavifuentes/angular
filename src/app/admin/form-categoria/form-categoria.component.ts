import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Categoria, CategoriaValidate} from '../../models/categoria';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {RequestService} from '../../services/request.service';

@Component({
  selector: 'app-form-categoria',
  templateUrl: './form-categoria.component.html',
  styleUrls: ['./form-categoria.component.scss']
})
export class FormCategoriaComponent implements OnInit {
modelForm: FormGroup;
categoria: Categoria;
  constructor(public formBuilder: FormBuilder,
              public  bsModalRef: BsModalRef,
              public bsService: BsModalService,
              private requestService: RequestService) {
    if ( this.bsService.config.initialState['data']) {
      this.categoria = this.bsService.config.initialState['data'];
      console.log('this.bsService.config.initialState', this.bsService.config.initialState['data']);
    }
    this.buildModel();
  }

  ngOnInit(): void {
  }
  buildModel(): void {
 this.modelForm = this.formBuilder.group({
   nombre: [this.categoria?.nombre, CategoriaValidate.rules.nombre],
   descripcion: [this.categoria?.descripcion, CategoriaValidate.rules.descripcion]
 });
  }
  close(): void {
    this.bsModalRef.hide();
  }
  submit(): void {
console.log(' form data ', this.modelForm.getRawValue());
if ( this.categoria) {
  console.log('edit', this.categoria);
  this.requestService.put('categorias/' + this.categoria.id, this.modelForm.getRawValue()).subscribe( res => {
    console.log(' res ', res);
    this.close();
  });
} else {
  if (this.modelForm.valid) {
    this.requestService.create('categorias', this.modelForm.getRawValue()).subscribe( res => {
      console.log( ' res ', res.body);
      this.close();
    });
  }
}
  }
}
