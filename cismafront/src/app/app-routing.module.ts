import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'Views/Pasajero', loadChildren: () => import('./Views/pasajero/pasajero.module').then(m => m.PasajeroModule) }, { path: 'Views/BuscarViaje', loadChildren: () => import('./Views/buscar-viaje/buscar-viaje.module').then(m => m.BuscarViajeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
