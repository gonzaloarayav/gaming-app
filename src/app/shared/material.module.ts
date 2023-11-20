// material.module.ts
import { NgModule } from '@angular/core';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  imports: [],
  exports: [
    // MatInputModule,
    // MatButtonModule,
    // MatSidenavModule
    // Exporta otros módulos que desees utilizar
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,


    MatSidenavModule,
    MatListModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatChipsModule,
    MatPaginatorModule

  ]
})
export class MaterialModule { }
