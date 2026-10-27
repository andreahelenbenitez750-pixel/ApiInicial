import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoProducto',
  standalone: true
})
export class EstadoProductoPipe implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Disponible' : 'No disponible';
  }
}
