import { Component, OnInit } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {FormCategoriaComponent} from '../form-categoria/form-categoria.component';
import {Categoria} from '../../models/categoria';
import {RequestService} from '../../services/request.service';
import {EventService} from '../service/event.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  modalRef: BsModalRef;
  public categorias: Array<Categoria> = [];
  constructor(private modalService: BsModalService,
              private requestServicio: RequestService,
              public eventService: EventService) {
    this.eventService.object.subscribe(res => {
      console.log(' reslist ', res);
      this.categorias.push(res);
    });
  }

  ngOnInit(): void {
    this.requestServicio.index('categorias').subscribe( res => {
      this.categorias = res.body.data;
      console.log('res ', res);
    })
  }
  createCategory(): void {
    this.modalRef = this.modalService.show(FormCategoriaComponent);
  }
  remove(item: Categoria, index: number): void {
    console.log(item);
    if (confirm(' Esta seguro de eliminar ?')) {
      this.requestServicio.delete('categorias/' + item.id).subscribe( res => {
        console.log( ' item ', res);
        this.categorias.splice(index, 1);
      });
    }
  }
  edit(item: Categoria, index: number): void{
    this.modalRef = this.modalService.show(FormCategoriaComponent,
      {initialState: {data: item}, ignoreBackdropClick: true});
  }
}
