import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './Medico/create/create.component';
import { DeleteComponent } from './Medico/delete/delete.component';
import { GetComponent } from './Medico/get/get.component';
import { UpdateComponent } from './Medico/update/update.component';

const routes: Routes = [
  {path: 'get', component: GetComponent},
  {path: 'update', component: UpdateComponent},
  {path: 'delete', component: DeleteComponent},
  {path: 'create', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
