import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormClientesComponent } from './form-clientes/form-clientes.component';
import { TabelaClientesComponent } from './tabela-clientes/tabela-clientes.component';

const routes: Routes = [
  { path:'tabela', component: TabelaClientesComponent},
  { path:'cadastro', component: FormClientesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
