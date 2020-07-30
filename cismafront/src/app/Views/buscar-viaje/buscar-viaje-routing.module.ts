import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarViajeComponent } from './buscar-viaje.component';

const routes: Routes = [{ path: '', component: BuscarViajeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscarViajeRoutingModule { }
