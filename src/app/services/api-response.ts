import {HttpResponse} from '@angular/common/http';

export class ApiResponse< T extends HttpResponse<any>>{
  body: T;
  status: string;
  code: number;
}
