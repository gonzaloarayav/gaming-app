import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../../shared/material.module';
import { GameService } from '../../../games/services/games.service';
import { Games } from '../../../games/interfaces/games.interfaces';

@Component({
  selector: 'principal-notice',
  standalone: true,
  providers:[GameService],
  imports: [
    CommonModule, MaterialModule, HttpClientModule
  ],
  templateUrl: './principal-notice.component.html',
  styleUrl: './principal-notice.component.css',
})
export class PrincipalNoticeComponent  {
  constructor(public gamesService: GameService) {
    this.gamesService.pageSize = 10;
    this.gamesService.searchGames();
  }


   get games(): Games[] {
    return this.gamesService.gameList;
  }

 }

