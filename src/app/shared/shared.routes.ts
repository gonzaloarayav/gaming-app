import { Routes } from '@angular/router';
import { SidebarComponent } from './navbar/components/sidebar/sidebar.component';
import { CategoriesComponent } from '../games/pages/categories/categories.component';
import { PrincipalPageComponent } from '../principal/pages/principal-page/principal-page.component';
import { GamePageComponent } from '../games/pages/game/game-page.component';

export const routes: Routes = [
  { path: 'categories', component: CategoriesComponent },
  { path: 'principal', component: PrincipalPageComponent },
  { path: 'game/:id', component:  GamePageComponent},
  { path: '**', redirectTo: 'principal'},
]
