import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { PasajeroRoutingModule } from './pasajero-routing.module';
import { PasajeroComponent } from './pasajero.component';


@NgModule({
  declarations: [PasajeroComponent],
  imports: [
    CommonModule,
    FormsModule,
    PasajeroRoutingModule
  ]
})
export class PasajeroModule { }
