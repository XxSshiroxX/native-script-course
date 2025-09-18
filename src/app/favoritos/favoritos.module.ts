import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { FavoritosComponent } from './favoritos.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FavoritosComponent],
  imports: [CommonModule, NativeScriptCommonModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class FavoritosModule {}
