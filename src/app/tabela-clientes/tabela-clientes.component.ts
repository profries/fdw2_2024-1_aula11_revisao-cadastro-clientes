import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteApiService } from '../cliente-api.service';

@Component({
  selector: 'app-tabela-clientes',
  templateUrl: './tabela-clientes.component.html',
  styleUrl: './tabela-clientes.component.css'
})
export class TabelaClientesComponent {
  listaClientes: Cliente[] = [];

  constructor(private clienteApiService: ClienteApiService){
    this.clienteApiService.listar().subscribe(
      (clientes) => { this.listaClientes = clientes; }
    )
  }
}
