import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PrincipalPageComponent } from './principal/pages/principal-page/principal-page.component';
import { CategoriesComponent } from './games/pages/categories/categories.component';
import { GamePageComponent } from './games/pages/game-page/game-page.component';
import { AboutComponent } from './about/pages/about/about.component';

export const routes: Routes = [
  // {path: '', loadChildren: () =>
  // import('./shared/shared.routes').then((m) => m.routes)},
  // { path: '**', redirectTo: ''}

  // { path: 'home', component: PrincipalPageComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'game/:id', component:  GamePageComponent},
  { path: 'about', component:  AboutComponent},
  { path: '**', component: PrincipalPageComponent},
  { path: '', component: PrincipalPageComponent}

];
