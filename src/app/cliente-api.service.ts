import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

const BASE_API = "http://localhost:3000/clientes";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ClienteApiService {

  constructor(private http:HttpClient) { }

  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(BASE_API);
  }

  inserir(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(BASE_API, cliente, httpOptions)
  }
}
