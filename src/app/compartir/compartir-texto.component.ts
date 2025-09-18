import { Component } from '@angular/core';
import { shareText } from '@nativescript/social-share';

@Component({
  selector: 'ns-compartir-texto',
  templateUrl: './compartir-texto.component.html',
})
export class CompartirTextoComponent {
  texto = '¡Hola desde NativeScript!';

  compartir() {
    shareText(this.texto, 'Compartir texto');
  }
}
