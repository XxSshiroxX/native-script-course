import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';
import { BusquedaRoutingModule } from './busqueda-routing.module';
import { BusquedaComponent } from './busqueda.component';
import { ToastComponent } from '../shared/toast/toast.component';

@NgModule({
  declarations: [BusquedaComponent, ToastComponent],
  imports: [CommonModule, NativeScriptCommonModule, NativeScriptFormsModule, BusquedaRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class BusquedaModule {}
