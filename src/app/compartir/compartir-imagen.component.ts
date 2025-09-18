import { Component } from '@angular/core';
import { shareImage } from '@nativescript/social-share';
import { ImageSource } from '@nativescript/core';

@Component({
  selector: 'ns-compartir-imagen',
  templateUrl: './compartir-imagen.component.html',
})
export class CompartirImagenComponent {
  imagen: ImageSource | null = null;

  cargarImagenDemo() {
    ImageSource.fromUrl('https://placekitten.com/300/300').then(img => this.imagen = img);
  }

  compartir() {
    if (this.imagen) {
      shareImage(this.imagen, 'Compartir imagen');
    }
  }
}
