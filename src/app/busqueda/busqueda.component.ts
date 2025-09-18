import { Component } from '@angular/core';
import { ItemsService, Item } from '../services/items.service';
import { RouterExtensions } from '@nativescript/angular';
import { action } from '@nativescript/core';

@Component({
  selector: 'ns-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  resultados: Item[] = [];
  busqueda = '';
  error = '';
  animando = false;
  toastMsg = '';
  toastVisible = false;

  toggleFavorito(item: Item) {
    this.itemsService.updateFavorito(item.id, !item.favorito).subscribe({
      next: (updated) => {
        item.favorito = updated.favorito;
        this.mostrarToast(updated.favorito ? 'Marcado como favorito' : 'Eliminado de favoritos');
      },
      error: () => this.mostrarToast('Error al actualizar favorito'),
    });
  }

  constructor(
    private itemsService: ItemsService,
    private routerExtensions: RouterExtensions
  ) {
    this.buscar();
  }

  onPullRefresh(args: any) {
    this.buscar(() => (args.object.refreshing = false));
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
    this.buscar();
  }

  buscar(callback?: () => void) {
    this.itemsService.getItems(this.busqueda).subscribe({
      next: (items) => {
        this.resultados = items;
        if (callback) callback();
      },
      error: () => {
        this.resultados = [];
        if (callback) callback();
        this.mostrarToast('Error al buscar');
      },
    });
  }

  mostrarToast(msg: string) {
    this.toastMsg = msg;
    this.toastVisible = true;
    setTimeout(() => this.toastVisible = false, 2000);
  }
}
