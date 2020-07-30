import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { BuscarViajeRoutingModule } from './buscar-viaje-routing.module';
import { BuscarViajeComponent } from './buscar-viaje.component';
import { ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [BuscarViajeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BuscarViajeRoutingModule
  ]
})
export class BuscarViajeModule { }
