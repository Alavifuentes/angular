import { Component, OnInit } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {FormProductoComponent} from '../form-producto/form-producto.component';
import {RequestService} from '../../services/request.service';
import {Product} from '../../models/product';
import {EventService} from '../service/event.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
modalRef: BsModalRef;
productos: Array<Product> = [];
  constructor(public modalService: BsModalService,
              public requestService: RequestService,
              public eventService: EventService) {
    this.eventService.object.subscribe(res => {
      this.productos.push(res);
    });
  }

  ngOnInit(): void {
    this.requestService.index('productos').subscribe(res => {
      this.productos = res.body.data;
    });
  }
  createProducto(): void {
this.modalRef = this.modalService.show(FormProductoComponent);
  }
  remove(item: Product, index: number): void{

  }
  edit(item: Product, index: number): void{

  }
}
