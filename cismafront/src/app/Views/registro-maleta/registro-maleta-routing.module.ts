import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroMaletaComponent } from './registro-maleta.component';

const routes: Routes = [{ path: '', component: RegistroMaletaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistroMaletaRoutingModule { }
