import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { GameService } from '../../services/games.service';
import { Games } from '../../interfaces/games.interfaces';
import { FilterCategoriesComponent } from '../../components/filter-categories/filter-categories.component';


@Component({
  selector: 'app-categories',
  standalone: true,
  providers: [GameService], // Agrega el servicio aquí
  imports: [CommonModule, MaterialModule, HttpClientModule, FilterCategoriesComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  constructor(private gamesService: GameService) {}

  get games(): Games[] {
    return this.gamesService.gameList;
  }

  searchDetailsGame(idGame: number): void{

    this.gamesService.searchDetailsGame(idGame);
  }
}
