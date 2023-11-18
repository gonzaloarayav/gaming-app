import { Routes } from '@angular/router';
import { SidebarComponent } from './navbar/components/sidebar/sidebar.component';
import { CategoriesComponent } from '../games/pages/categories/categories.component';
import { Example2Component } from '../games/pages/example2/example2.component';
import { PrincipalPageComponent } from '../principal/pages/principal-page/principal-page.component';

export const routes: Routes = [
  { path: 'categories', component: CategoriesComponent },
  { path: 'second', component: Example2Component },
  { path: 'principal', component: PrincipalPageComponent },
  { path: '**', redirectTo: 'principal'},
]
