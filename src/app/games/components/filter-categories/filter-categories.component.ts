import { CommonModule } from '@angular/common';
import {  Component } from '@angular/core';
import { MaterialModule } from '../../../shared/material.module';
import { GameService } from '../../services/games.service';
import { Categories } from '../../interfaces/categories.interface';

@Component({
  selector: 'app-filter-categories',
  standalone: true,
  imports: [
    CommonModule, MaterialModule
  ],
  templateUrl: './filter-categories.component.html',
  styleUrls: ['./filter-categories.component.css'],
})
export class FilterCategoriesComponent {

  constructor(private gamesService: GameService) {}

  get genres(): Categories[] {
    return this.gamesService.genresList;
  }

  getGamesByGenres(genre: number): void{
    const genreToUse = genre ?? 0;

    this.gamesService.searchGames(genreToUse);
  }
}
