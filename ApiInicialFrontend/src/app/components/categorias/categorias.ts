import { Component, inject } from '@angular/core';
import { Categorias as CategoriasService } from '../../services/categorias';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [],
  templateUrl: './categorias.html',
  styleUrl: './categorias.css',
})
export class Categorias {
  servicioCategorias = inject(CategoriasService);

  listaCategorias = this.servicioCategorias.categorias;

  constructor() {
    this.servicioCategorias.obtenerCategorias();
  }
}