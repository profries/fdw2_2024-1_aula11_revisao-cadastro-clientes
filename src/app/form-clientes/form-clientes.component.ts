import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteApiService } from '../cliente-api.service';

@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.component.html',
  styleUrl: './form-clientes.component.css'
})
export class FormClientesComponent {
  cliente = new Cliente();

  constructor(private clienteApiService: ClienteApiService) {

  }

  cadastrar() {
    this.clienteApiService.inserir(this.cliente).subscribe(
      (cli) => {
        alert(`Cliente ${cli.id} cadastrado com sucesso`);
        this.cliente = new Cliente();    
      }
    )
  }
}
