import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Productos } from './components/productos/productos';
import { Categorias } from './components/categorias/categorias';

@Component({
  imports: [RouterOutlet, Productos, Categorias],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ApiInicialFrontend');
}


