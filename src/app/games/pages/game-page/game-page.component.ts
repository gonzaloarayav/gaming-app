import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FilterCategoriesComponent } from '../../components/filter-categories/filter-categories.component';
import { GameService } from '../../services/games.service';
import { Game } from '../../interfaces/game.interface';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-game-page',
  standalone: true,
  providers:[GameService],
  imports: [CommonModule, MaterialModule, FilterCategoriesComponent, HttpClientModule, RouterLink, RouterLinkActive],
  templateUrl: 'game-page.component.html'
})

export class GamePageComponent  {
  constructor(private route: ActivatedRoute, private gamesService: GameService){
    this.searchDetailsGame();
  }

  public idGame: number = 0;

  get gameDetails(): Game {
    return this.gamesService.gameDetails;
  }

  searchDetailsGame(): void{
    this.route.params.subscribe(params => {
      this.idGame = params['id'];
      this.gamesService.idGame = params['id'];
      this.gamesService.searchDetailsGame();
    });
  }

}
