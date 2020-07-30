import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { ModificaPasajeroRoutingModule } from './modifica-pasajero-routing.module';
import { ModificaPasajeroComponent } from './modifica-pasajero.component';


@NgModule({
  declarations: [ModificaPasajeroComponent],
  imports: [
    CommonModule,
    FormsModule,
    ModificaPasajeroRoutingModule
  ]
})
export class ModificaPasajeroModule { }
