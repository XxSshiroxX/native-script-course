import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicioGlobalService {
  mensaje = 'Servicio global disponible';
  getMensaje() {
    return this.mensaje;
  }
}
