import { Component } from '@angular/core';
import { BusquedaService } from './busqueda.service';
import { RouterExtensions } from '@nativescript/angular';
import { action } from '@nativescript/core';

@Component({
  selector: 'ns-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  resultados = [
    { nombre: 'Elemento 1', categoria: 'A', icono: 'res://ic_custom_icon' },
    { nombre: 'Elemento 2', categoria: 'B', icono: 'res://ic_custom_icon' },
    { nombre: 'Elemento 3', categoria: 'C', icono: 'res://ic_custom_icon' }
  ];
  busqueda = '';
  error = '';
  animando = false;
  toastMsg = '';
  toastVisible = false;

  constructor(
    private busquedaService: BusquedaService,
    private routerExtensions: RouterExtensions
  ) {}

  onPullRefresh(args: any) {
    setTimeout(() => {
      this.resultados.unshift(this.busquedaService.getRandomItem());
      args.object.refreshing = false;
      this.mostrarToast('¡Elemento agregado!');
    }, 1000);
  }

  irADetalle(item: any) {
    this.routerExtensions.navigate(['/busqueda/detalle'], {
      queryParams: { nombre: item.nombre, categoria: item.categoria }
    });
  }

  async cambiarCategoria(item: any) {
    const result = await action({
      message: 'Selecciona categoría',
      cancelButtonText: 'Cancelar',
      actions: ['A', 'B', 'C', 'D', 'E']
    });
    if (result && result !== 'Cancelar') {
      item.categoria = result;
      this.mostrarToast('Categoría cambiada a ' + result);
    }
  }

  onLongPress(item: any) {
    this.animando = true;
    setTimeout(() => this.animando = false, 1000);
    this.mostrarToast('¡Long press detectado!');
  }

  onSubmit() {
    if (!this.busqueda || this.busqueda.length < 3) {
      this.error = 'Mínimo 3 caracteres';
      return;
    }
    this.error = '';
    this.mostrarToast('Búsqueda: ' + this.busqueda);
  }

  mostrarToast(msg: string) {
    this.toastMsg = msg;
    this.toastVisible = true;
    setTimeout(() => this.toastVisible = false, 2000);
  }
}
