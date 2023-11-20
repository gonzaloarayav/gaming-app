import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FilterCategoriesComponent } from '../../components/filter-categories/filter-categories.component';
import { GameService } from '../../services/games.service';
import { Game } from '../../interfaces/game.interface';

@Component({
  selector: 'app-game-page',
  standalone: true,
  imports: [CommonModule, MaterialModule, HttpClientModule, FilterCategoriesComponent],
  templateUrl: 'game-page.component.html'
})

export class GamePageComponent  {
  constructor(private gamesService: GameService) {

  }

  get gameDetails(): Game[] {
    return this.gamesService.gameDetails;
  }

}
