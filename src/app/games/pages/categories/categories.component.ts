import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { GameService } from '../../services/games.service';
import { Games } from '../../interfaces/games.interfaces';
import { FilterCategoriesComponent } from '../../components/filter-categories/filter-categories.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-categories',
  standalone: true,
  providers: [GameService], // Agrega el servicio aquí
  imports: [CommonModule, MaterialModule, HttpClientModule, FilterCategoriesComponent, RouterLink, RouterLinkActive],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  constructor(private gamesService: GameService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  get games(): Games[] {
    return this.gamesService.gameList;
  }

  ngAfterViewInit(): void {
   if(this.paginator){
    this.paginator.page.subscribe((event: PageEvent) => {
      // console.log(event.pageIndex)
      this.gamesService.paginator = event.pageIndex + 1;
      this.gamesService.searchGames();
    })
   }
  }
}
