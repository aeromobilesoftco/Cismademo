import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificaPasajeroComponent } from './modifica-pasajero.component';

const routes: Routes = [{ path: '', component: ModificaPasajeroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModificaPasajeroRoutingModule { }
