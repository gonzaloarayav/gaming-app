import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {path: 'p', loadChildren: () =>
  import('./shared/shared.routes').then((m) => m.routes)},
  { path: '**', redirectTo: 'p'}
];
