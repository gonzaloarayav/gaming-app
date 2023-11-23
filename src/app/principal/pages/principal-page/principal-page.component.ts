import { CommonModule } from '@angular/common';
import {  Component } from '@angular/core';
import { PrincipalNoticeComponent } from '../../components/principal-notice/principal-notice.component';
import { PrincipalGamesComponent } from '../../components/principal-games/principal-games.component';
import { Games } from '../../../games/interfaces/games.interfaces';
import { GameService } from '../../../games/services/games.service';

@Component({
  selector: 'principal-page',
  standalone: true,
  imports: [
    CommonModule, PrincipalNoticeComponent, PrincipalGamesComponent
  ],
  templateUrl: 'principal-page.component.html',
})
export class PrincipalPageComponent {


 }
