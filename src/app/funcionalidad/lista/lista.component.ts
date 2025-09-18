import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { isAndroid } from '@nativescript/core';

@Component({
  selector: 'ns-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css', './lista.component.android.css', './lista.component.ios.css']
})
export class ListaComponent implements OnInit {
  items = [
    { nombre: 'Elemento 1', categoria: 'A' },
    { nombre: 'Elemento 2', categoria: 'B' },
    { nombre: 'Elemento 3', categoria: 'C' }
  ];
  soloAndroid: string = '';

  constructor(private routerExtensions: RouterExtensions) {}

  ngOnInit() {
    if (isAndroid) {
      this.soloAndroid = '¡Esto solo se muestra en Android!';
    }
  }

  irADetalle(item: any) {
    this.routerExtensions.navigate(['/funcionalidad/detalle'], {
      queryParams: { nombre: item.nombre, categoria: item.categoria }
    });
  }
}
