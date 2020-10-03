import {Validators} from '@angular/forms';

export interface Categoria {
  id?: number;
  nombre?: string;
  descripcion?: string;
}
export class CategoriaValidate {
  public  static rules = {
['nombre']: [Validators.required, Validators.maxLength(10)],
['descripcion']: [Validators.maxLength(3000)]
  };
}
