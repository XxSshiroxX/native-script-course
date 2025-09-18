import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionalidadRoutingModule } from './funcionalidad-routing.module';
import { ListaComponent } from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  declarations: [ListaComponent, DetalleComponent],
  imports: [CommonModule, FuncionalidadRoutingModule],
})
export class FuncionalidadModule {}