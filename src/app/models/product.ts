import {Validators} from '@angular/forms';

export interface Product {
  id?: number;
  nombre?: string;
  precio: number;
  descripcion?: string;
  categoria_id?: number;
  user_id?: number;
}
export  class ProductValidate {
  public static  rules = {
['nombre']: [Validators.required],
['precio']: [Validators.required],
['descripcion']: [Validators.maxLength(2000)],
['categoria_id']: [],
['user_id']: [],
  };

}
