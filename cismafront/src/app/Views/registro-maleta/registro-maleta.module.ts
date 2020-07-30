import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { RegistroMaletaRoutingModule } from './registro-maleta-routing.module';
import { RegistroMaletaComponent } from './registro-maleta.component';


@NgModule({
  declarations: [RegistroMaletaComponent],
  imports: [
    CommonModule,
    FormsModule,
    RegistroMaletaRoutingModule
  ]
})
export class RegistroMaletaModule { }
