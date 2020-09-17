import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './layout/not-found/not-found.component';

const routes: Routes = [
  {path: 'not-found', component: NotFoundComponent},
  {path: '', loadChildren: () => import('./main/main.module').then(mod => mod.MainModule)},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
