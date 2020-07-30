import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasajeroComponent } from './pasajero.component';

const routes: Routes = [{ path: '', component: PasajeroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasajeroRoutingModule { }
