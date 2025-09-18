import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BusquedaService {
  private categorias = ['A', 'B', 'C', 'D', 'E'];

  getRandomItem() {
    const nombre = 'Elemento ' + Math.floor(Math.random() * 1000);
    const categoria = this.categorias[Math.floor(Math.random() * this.categorias.length)];
    return { nombre, categoria, icono: 'res://ic_custom_icon' };
  }
}
