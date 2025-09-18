import { Component } from '@angular/core';
import { takePicture, requestCameraPermissions, CameraOptions } from '@nativescript/camera';
import { shareImage } from '@nativescript/social-share';
import { ImageSource } from '@nativescript/core';

@Component({
  selector: 'ns-compartir-camara',
  templateUrl: './compartir-camara.component.html',
})
export class CompartirCamaraComponent {
  imagen: ImageSource | null = null;

  async tomarFoto() {
    await requestCameraPermissions();
    const options: CameraOptions = { width: 300, height: 300, keepAspectRatio: true, saveToGallery: true };
    const imgAsset = await takePicture(options);
    this.imagen = ImageSource.fromAssetSync(imgAsset);
  }

  compartir() {
    if (this.imagen) {
      shareImage(this.imagen, 'Compartir foto tomada');
    }
  }
}
