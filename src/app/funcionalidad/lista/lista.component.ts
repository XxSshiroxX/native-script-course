import { Component, OnInit } from '@angular/core';
import { isAndroid } from '@nativescript/core';

@Component({
  selector: 'ns-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css', './lista.component.android.css', './lista.component.ios.css']
})
export class ListaComponent implements OnInit {
  items = ['Elemento 1', 'Elemento 2', 'Elemento 3'];
  soloAndroid: string;

  ngOnInit() {
    if (isAndroid) {
      this.soloAndroid = '¡Esto solo se muestra en Android!';
    } else {
      this.soloAndroid = '';
    }
  }
}
