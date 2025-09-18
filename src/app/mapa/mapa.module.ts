import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { CommonModule } from '@angular/common';
import { MapaComponent } from './mapa.component';

@NgModule({
  declarations: [MapaComponent],
  imports: [CommonModule, NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class MapaModule {}
