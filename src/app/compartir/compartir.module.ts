import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';
import { CommonModule } from '@angular/common';
import { CompartirTextoComponent } from './compartir-texto.component';
import { CompartirImagenComponent } from './compartir-imagen.component';
import { CompartirCamaraComponent } from './compartir-camara.component';

@NgModule({
  declarations: [CompartirTextoComponent, CompartirImagenComponent, CompartirCamaraComponent],
  imports: [CommonModule, NativeScriptCommonModule, NativeScriptFormsModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CompartirModule {}
