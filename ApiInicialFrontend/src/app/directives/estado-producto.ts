import { Directive, input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appEstadoProducto]',
  standalone: true
})
export class EstadoProducto {
  estado = input<boolean>(true, { alias: 'appEstadoProducto' });

  @HostBinding('style.backgroundColor')
  get colorFondo(): string {
    return this.estado() ? '#dcfce7' : '#fee2e2';
  }

  @HostBinding('style.color')
  get colorTexto(): string {
    return this.estado() ? '#166534' : '#991b1b';
  }

  @HostBinding('style.padding')
  padding = '5px 10px';

  @HostBinding('style.borderRadius')
  radio = '20px';
}