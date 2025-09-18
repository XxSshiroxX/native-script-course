import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeScriptCommonModule, NativeScriptFormsModule } from '@nativescript/angular';
import { FuncionalidadRoutingModule } from './funcionalidad-routing.module';
import { ListaComponent } from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component';
import { MinLengthDirective } from './min-length.directive';

@NgModule({
  declarations: [ListaComponent, DetalleComponent, MinLengthDirective],
  imports: [CommonModule, NativeScriptCommonModule, NativeScriptFormsModule, FuncionalidadRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class FuncionalidadModule {}