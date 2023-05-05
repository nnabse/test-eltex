import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'devices',
    loadChildren: () =>
      import('@features/devices/devices.module').then((m) => m.DevicesModule),
  },
  { path: '', pathMatch: 'full', redirectTo: 'devices' },
];

const options: ExtraOptions = {
  useHash: false,
  scrollPositionRestoration: 'top',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, options)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
