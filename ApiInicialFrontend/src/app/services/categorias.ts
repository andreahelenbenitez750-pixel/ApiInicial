import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Categoria {
  id: number;
  nombre: string;
}

@Injectable({
  providedIn: 'root'
})
export class Categorias {
  private http = inject(HttpClient);

  categorias = signal<Categoria[]>([]);

  obtenerCategorias() {
    this.http.get<Categoria[]>('http://localhost:5147/api/v1/categorias')
      .subscribe(datos => {
        this.categorias.set(datos);
      });
  }
}