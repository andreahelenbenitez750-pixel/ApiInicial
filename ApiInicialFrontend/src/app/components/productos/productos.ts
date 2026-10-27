import { Component, inject } from '@angular/core';
import { Productos as ProductosService } from '../../services/productos';
import { EstadoProductoPipe } from '../../pipes/estado-producto-pipe';
import { EstadoProducto } from '../../directives/estado-producto';

@Component({
  imports: [EstadoProductoPipe, EstadoProducto],
  selector: 'app-productos',
  styleUrl: './productos.css',
  templateUrl: './productos.html',
})
export class Productos {
  localService = inject(ProductosService);
  listaProductos = this.localService.productos;

  constructor() {
    this.localService.obtenerProductos();
  }
}