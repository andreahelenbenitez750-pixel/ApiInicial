import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  stock: number;
  estado: boolean;
  categoriaId: number;
  nombreCategoria: string;
}

@Injectable({
  providedIn: 'root'
})
export class Productos {
  private http = inject(HttpClient);

  productos = signal<Producto[]>([]);

  obtenerProductos() {
    this.http.get<Producto[]>('http://localhost:5147/api/v1/productos')
      .subscribe(datos => {
        this.productos.set(datos);
        console.log('Productos recibidos:', datos);
      });
  }
}
