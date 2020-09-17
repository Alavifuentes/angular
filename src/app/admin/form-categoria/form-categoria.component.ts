import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CategoriaValidate} from '../../models/categoria';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-form-categoria',
  templateUrl: './form-categoria.component.html',
  styleUrls: ['./form-categoria.component.scss']
})
export class FormCategoriaComponent implements OnInit {
modelForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public  bsModalRef: BsModalRef) {
    this.buildModel();
  }

  ngOnInit(): void {
  }
  buildModel(): void {
 this.modelForm = this.formBuilder.group({
   nombre: [null, CategoriaValidate.rules.nombre],
   descripcion: [null, CategoriaValidate.rules.descripcion]
 });
  }
  close(): void {
    this.bsModalRef.hide();
  }

}
