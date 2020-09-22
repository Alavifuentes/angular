import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ProductosComponent} from '../productos/productos.component';
import {CategoriasComponent} from '../categorias/categorias.component';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {
@ViewChild('container', {static: true, read: ViewContainerRef}) entry: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver,
              private autService: AuthService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.loadProductos();
    console.log(' insession ', this.autService.getInSession());
    if(!this.autService.getInSession() ) {
      this.route.navigate(['/']);
    }
  }
  changeComponente(compoente: string): void {
    console.log(' componente ', compoente);
    switch (compoente) {
      case 'productos':
        this.entry.clear();
        const  factory = this.resolver.resolveComponentFactory(ProductosComponent);
        this.entry.createComponent(factory);
        break;
      case 'categorias':
        this.entry.clear();
        const  fac = this.resolver.resolveComponentFactory(CategoriasComponent);
        this.entry.createComponent(fac);
        break;
      default:
        break;
    }
  }
  loadProductos(): void {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(ProductosComponent);
    this.entry.createComponent(factory);
  }
}
